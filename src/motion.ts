import { useSyncExternalStore, type CSSProperties } from 'react';

// Motion controls for the page.
//
// Designed motion runs for every visitor, including when the operating system
// asks for reduced motion; only smooth anchor scrolling is dropped in that case.
// Visitors stop all motion with the "Pause animations" button in the footer.
// The choice is stored in localStorage and applied before first paint by the
// inline script in index.html (html[data-motion="paused"]).

const STORAGE_KEY = 'bonanza-motion';
const PAUSED = 'paused';

const listeners = new Set<() => void>();

function storedPaused(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === PAUSED;
  } catch {
    return false;
  }
}

let paused = document.documentElement.getAttribute('data-motion') === PAUSED || storedPaused();

function syncDocument() {
  const root = document.documentElement;
  if (paused) root.setAttribute('data-motion', PAUSED);
  else root.removeAttribute('data-motion');
}

syncDocument();

export function isMotionPaused(): boolean {
  return paused;
}

export function setMotionPaused(next: boolean) {
  if (next === paused) return;
  paused = next;
  syncDocument();
  try {
    if (paused) window.localStorage.setItem(STORAGE_KEY, PAUSED);
    else window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Storage can be unavailable (private modes, blocked site data). The choice
    // then lasts for this page view only.
  }
  listeners.forEach((listener) => listener());
}

export function subscribeMotion(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useMotionPaused(): boolean {
  return useSyncExternalStore(subscribeMotion, isMotionPaused, isMotionPaused);
}

// Keep several open tabs in step.
window.addEventListener('storage', (event) => {
  if (event.key === STORAGE_KEY) setMotionPaused(event.newValue === PAUSED);
});

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function revealDelay(ms: number): CSSProperties {
  return { '--reveal-delay': `${ms}ms` } as CSSProperties;
}

// Entrance reveals.
//
// [data-reveal] elements are hidden by CSS once the head script has added
// html.motion-ready. This controller marks each one data-revealed as it reaches
// the viewport and adds html.reveal-live so the CSS failsafe stands down.
// Nothing can stay hidden: a scroll and resize sweep plus timed sweeps cover an
// IntersectionObserver that never fires, and pausing, printing or elements that
// are already scrolled past are revealed at once without animation.
const REVEAL_LINE = 0.92;

export function initReveals(): () => void {
  const root = document.documentElement;
  const pending = new Set(
    Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-revealed])'))
  );
  const timers: number[] = [];
  let observer: IntersectionObserver | null = null;
  let frame = 0;

  const stop = () => {
    observer?.disconnect();
    observer = null;
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', schedule);
    window.removeEventListener('beforeprint', revealAllNow);
    timers.forEach((id) => window.clearTimeout(id));
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
  };

  const reveal = (el: HTMLElement, instant: boolean) => {
    if (!pending.delete(el)) return;
    observer?.unobserve(el);
    if (instant) el.setAttribute('data-reveal-instant', '');
    el.setAttribute('data-revealed', '');
    el.querySelectorAll('[data-count="pending"]').forEach((node) =>
      node.setAttribute('data-count', instant ? 'done' : 'run')
    );
    if (pending.size === 0) stop();
  };

  function revealAllNow() {
    Array.from(pending).forEach((el) => reveal(el, true));
  }

  function sweep() {
    frame = 0;
    const line = window.innerHeight * REVEAL_LINE;
    Array.from(pending).forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom <= 0) reveal(el, true);
      else if (rect.top < line) reveal(el, false);
    });
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(sweep);
  }

  root.classList.add('reveal-live');

  if (paused) {
    revealAllNow();
  } else {
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) reveal(entry.target as HTMLElement, false);
          }),
        { rootMargin: `0px 0px -${Math.round((1 - REVEAL_LINE) * 100)}% 0px` }
      );
      pending.forEach((el) => observer?.observe(el));
    }
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    window.addEventListener('beforeprint', revealAllNow);
    timers.push(window.setTimeout(sweep, 700), window.setTimeout(sweep, 2000));
    schedule();
  }

  const unsubscribe = subscribeMotion(() => {
    if (paused) revealAllNow();
  });

  return () => {
    stop();
    unsubscribe();
  };
}
