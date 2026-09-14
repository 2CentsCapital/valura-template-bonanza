import { useCallback, useEffect, useRef, useState } from 'react';
import { AUTH_URL, BRAND_NAME } from '../config';
import { IconClose, IconMenu } from './icons';
import lockup from '../assets/brand/bonanza-powered-by-valura.webp';
import './Header.css';

const NAV_LINKS = [
  { href: '#why-global', label: 'Why global' },
  { href: '#invest-in', label: 'Invest in' },
  { href: '#research', label: 'Research' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#trust', label: 'Trust & regs' },
];

const DESKTOP_MIN_WIDTH = 1101;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback((restoreFocus = false) => {
    setIsMenuOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  }, []);

  // A soft shadow fades in under the header once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu(true);
    };
    const onResize = () => {
      if (window.innerWidth >= DESKTOP_MIN_WIDTH) closeMenu();
    };
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <header className={`navbar-wrapper${isScrolled ? ' is-scrolled' : ''}`}>
      <nav className="navbar container" aria-label="Primary">
        {/* Approved joint artwork, placed whole and never animated. The only joint mark on the page. */}
        <a href="#top" className="logo-container">
          <img src={lockup} className="logo-img" alt={BRAND_NAME} width={294} height={160} />
        </a>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions desktop-actions">
          <a href={AUTH_URL} className="login-link">
            Log in
          </a>
          <a href={AUTH_URL} className="btn btn-primary nav-cta">
            Open account
          </a>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="mobile-menu-btn"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          data-testid="menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </nav>

      <div id="mobile-menu" className="mobile-menu-overlay" hidden={!isMenuOpen}>
        <nav aria-label="Mobile">
          <ul className="mobile-nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link" onClick={() => closeMenu()}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-nav-actions">
          <a href={AUTH_URL} className="btn btn-secondary">
            Log in
          </a>
          <a href={AUTH_URL} className="btn btn-primary">
            Open account
          </a>
        </div>
      </div>
    </header>
  );
}
