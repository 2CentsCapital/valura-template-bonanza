import { AUTH_URL } from './config';

// Campaign attribution for paid launches. Ad and campaign parameters on the
// arrival URL are kept for 30 days, carried onto every sign-up link and added
// to lead-form submissions, so a click can be traced to the account or lead it
// produced. Nothing personal is stored: only the parameters the ad platforms
// put on the link.

const KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
  'gclid',
  'gbraid',
  'wbraid',
  'fbclid',
  'msclkid',
  'li_fat_id',
  'ref',
] as const;

const STORAGE_KEY = 'bonanza-attribution';
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;
const MAX_VALUE_LENGTH = 200;

type Params = Record<string, string>;

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

function fromUrl(search: string): Params {
  const query = new URLSearchParams(search);
  const found: Params = {};
  for (const key of KEYS) {
    const value = query.get(key)?.trim();
    if (value) found[key] = value.slice(0, MAX_VALUE_LENGTH);
  }
  return found;
}

function readStored(): Params {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const stored = JSON.parse(raw) as { at?: number; params?: Params };
    if (!stored.at || Date.now() - stored.at > MAX_AGE_MS) return {};
    return stored.params ?? {};
  } catch {
    return {};
  }
}

let current: Params = {};

// A visit that arrives with campaign parameters replaces what was stored
// (last campaign touch wins); a plain visit keeps the stored campaign.
export function captureAttribution(): void {
  const arrived = fromUrl(window.location.search);
  if (Object.keys(arrived).length > 0) {
    current = arrived;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ at: Date.now(), params: arrived }));
    } catch {
      // Storage unavailable: the parameters still apply for this page view.
    }
  } else {
    current = readStored();
  }
}

export function getAttribution(): Params {
  return { ...current };
}

// Adds the stored campaign parameters to a sign-up URL without overwriting
// any parameter the link already carries.
export function withAttribution(href: string): string {
  if (Object.keys(current).length === 0) return href;
  try {
    const url = new URL(href);
    for (const [key, value] of Object.entries(current)) {
      if (!url.searchParams.has(key)) url.searchParams.set(key, value);
    }
    return url.toString();
  } catch {
    return href;
  }
}

export function track(event: string, params: Record<string, unknown> = {}): void {
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}

// Google Play passes its `referrer` parameter to the installed app (the
// Install Referrer API), so a campaign survives the install.
export function withPlayReferrer(href: string): string {
  const campaign = Object.entries(current).filter(([key]) => key.startsWith('utm_') || key === 'gclid');
  if (campaign.length === 0) return href;
  try {
    const url = new URL(href);
    if (!url.searchParams.has('referrer')) url.searchParams.set('referrer', new URLSearchParams(campaign).toString());
    return url.toString();
  } catch {
    return href;
  }
}

function isSignupLink(anchor: HTMLAnchorElement): boolean {
  return anchor.href.startsWith(AUTH_URL);
}

// One delegated listener covers every sign-up and app-store link on the page,
// including ones rendered later (the mobile menu, the form's success state).
// It runs in the capture phase so the link already carries the campaign
// parameters when the browser follows it, for clicks, middle-clicks and
// keyboard activation alike.
export function initLinkTracking(): void {
  const handle = (event: MouseEvent) => {
    const target = event.target instanceof Element ? event.target : null;
    const anchor = target?.closest('a');
    if (!anchor) return;

    const label = (anchor.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 60);
    const section =
      anchor.closest('section[id], aside[id]')?.id || anchor.closest('header, footer')?.tagName.toLowerCase() || 'page';

    if (isSignupLink(anchor)) {
      anchor.href = withAttribution(anchor.href);
      track('signup_click', { cta_label: label, cta_section: section });
    } else if (/apps\.apple\.com|play\.google\.com/.test(anchor.href)) {
      if (anchor.href.includes('play.google.com')) anchor.href = withPlayReferrer(anchor.href);
      track('app_store_click', { store: anchor.href.includes('apple') ? 'app_store' : 'google_play', cta_section: section });
    }
  };

  document.addEventListener('click', handle, true);
  document.addEventListener('auxclick', handle, true);
}

// Google Tag Manager loads only when a container id is supplied at build time
// (VITE_GTM_ID=GTM-XXXXXXX), so the page ships with no third-party tags until
// Bonanza's marketing team provides theirs.
export function loadTagManager(): void {
  const id = import.meta.env.VITE_GTM_ID as string | undefined;
  if (!id || !/^GTM-[A-Z0-9]+$/.test(id)) return;

  track('gtm.js', { 'gtm.start': Date.now() });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);
}
