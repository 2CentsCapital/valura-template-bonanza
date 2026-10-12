import { useEffect, useState } from 'react';
import { AUTH_URL } from '../config';
import './StickyCta.css';

// Phones only (the bar is hidden by CSS above 768px). The page is long on a
// phone, so once the hero's buttons have scrolled away this keeps the two
// actions in reach. It steps aside wherever the page already offers them: the
// hero, the dark closing band, the lead form and the footer's legal text.
const COVERED = ['#top', '.cta-section-wrapper', '#open', 'footer'];

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const targets = COVERED.map((selector) => document.querySelector(selector)).filter(
      (el): el is Element => el !== null,
    );
    if (targets.length === 0 || !('IntersectionObserver' in window)) return;

    const onScreen = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target);
        else onScreen.delete(entry.target);
      }
      setVisible(onScreen.size === 0);
    });
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <aside id="sticky-cta" className={`sticky-cta${visible ? ' is-visible' : ''}`} aria-label="Get started" inert={!visible}>
      <a className="btn btn-primary sticky-cta-primary" href={AUTH_URL}>
        Start investing
      </a>
      <a className="btn btn-secondary sticky-cta-secondary" href="#open">
        Talk to us
      </a>
    </aside>
  );
}
