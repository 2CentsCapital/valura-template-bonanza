import { useState } from 'react';
import { ShaderBackground } from './ui/dq';
import './Header.css';

import amfiLogo from '../assets/logos/amfi.svg';
import cdslLogo from '../assets/logos/cdsl.svg';
import morningstarLogo from '../assets/logos/morningstar.svg';
import nseLogo from '../assets/logos/nse.svg';
import ifscaLogo from '../assets/logos/ifsca.png';
import sebiLogo from '../assets/logos/sebi.svg';
import bseLogo from '../assets/logos/bse.png';
import aamLogo from '../assets/logos/aam.png';

import bonanzaLogo from '../assets/logos/Frame 1618872944.svg';
import iconCoin from '../assets/icons/Coin blue.png';
import iconBars from '../assets/icons/Bars green.png';
import heroDashboardImage from '../assets/dashboard-preview.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="header-container" data-node-id="93:1445">
      {/* Navigation */}
      <header className="navbar-wrapper">
        <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
          <a href="/" className="logo-container" data-node-id="93:1480">
            <img src={bonanzaLogo} className="logo-img" alt="Bonanza Logo" />
          </a>

          {/* Desktop Links */}
          <div className="nav-links">
            <a href="#why-global" className="nav-link" data-node-id="93:1487" onClick={(e) => smoothScroll(e, 'why-global')}><span>Why global</span></a>
            <a href="#invest-in" className="nav-link" data-node-id="93:1491" onClick={(e) => smoothScroll(e, 'invest-in')}><span>Invest in</span></a>
            <a href="#research" className="nav-link" data-node-id="93:1493" onClick={(e) => smoothScroll(e, 'research')}><span>Research</span></a>
            <a href="#how-it-works" className="nav-link" data-node-id="93:1495" onClick={(e) => smoothScroll(e, 'how-it-works')}><span>How it works</span></a>
            <a href="#faq" className="nav-link" data-node-id="93:1496" onClick={(e) => smoothScroll(e, 'faq')}><span>FAQ</span></a>
          </div>

          <div className="nav-actions desktop-actions">
            <a href="#login" className="login-link" data-node-id="93:1498">Log in</a>
            <button className="demo-btn" data-node-id="93:1499" onClick={() => alert('Start Investing...')}>Start Investing</button>
          </div>

          {/* Mobile Hamburger Button */}
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="mobile-menu-overlay">
            <div className="mobile-nav-links">
              <a href="#why-global" className="nav-link" onClick={(e) => smoothScroll(e, 'why-global')}>Why global</a>
              <a href="#invest-in" className="nav-link" onClick={(e) => smoothScroll(e, 'invest-in')}>Invest in</a>
              <a href="#research" className="nav-link" onClick={(e) => smoothScroll(e, 'research')}>Research</a>
              <a href="#how-it-works" className="nav-link" onClick={(e) => smoothScroll(e, 'how-it-works')}>How it works</a>
              <a href="#faq" className="nav-link" onClick={(e) => smoothScroll(e, 'faq')}>FAQ</a>
              <div className="mobile-nav-actions">
                <a href="#login" className="login-link" onClick={() => setIsMenuOpen(false)}>Log in</a>
                <button className="demo-btn" onClick={() => { setIsMenuOpen(false); alert('Start Investing...'); }}>Start Investing</button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero-wrapper" data-node-id="93:1500">
        <ShaderBackground className="hero-canvas" />
        <div className="hero">
          <div className="hero-left">
            <img src={iconBars} className="hero-icon-bars" alt="Growth bars icon" />
            <h1 className="hero-title" data-node-id="93:1501">
              Invest smarter.<br />
              Build wealth.<br />
              <span className="hero-title-inline">
                Grow globally.<img src={iconCoin} className="hero-icon-coin" alt="Coin icon" />
              </span>
            </h1>
            <p className="hero-description" data-node-id="93:1502">
              One platform for investing across equities, mutual funds, IPOs, ETFs, global markets, and wealth solutions—backed by expert research and decades of market experience.
            </p>
            <div className="hero-ctas">
              <button className="cta-primary" onClick={() => alert('Start Investing...')}>Start Investing</button>
              <button className="cta-secondary" onClick={() => alert('Explore Investment Solutions...')}>Explore Investment Solutions</button>
            </div>
          </div>
          <div className="hero-right" data-node-id="93:1510">
            <img src={heroDashboardImage} className="hero-image" alt="Bonanza Research Dashboard" />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="sponsors-wrapper" data-node-id="93:1446">
        <div className="sponsors">
          <h3 className="sponsors-title" data-node-id="93:1448">
            Trusted by investors across India
          </h3>
          <div className="sponsors-marquee">
            <div className="sponsors-marquee-content">
              <div className="marquee-item">
                <div className="marquee-logo-container">
                  <img src={sebiLogo} alt="SEBI" className="sponsor-logo logo-sebi" />
                </div>
                <span>SEBI · PMS · Research</span>
              </div>
              <span className="marquee-separator">❖</span>
              <div className="marquee-item">
                <div className="marquee-logo-container">
                  <img src={nseLogo} alt="NSE" className="sponsor-logo logo-nse" />
                </div>
                <span>NSE Member</span>
              </div>
              <span className="marquee-separator">❖</span>
              <div className="marquee-item">
                <div className="marquee-logo-container">
                  <img src={bseLogo} alt="BSE" className="sponsor-logo logo-bse" />
                </div>
                <span>BSE Member</span>
              </div>
              <span className="marquee-separator">❖</span>
              <div className="marquee-item">
                <div className="marquee-logo-container">
                  <img src={cdslLogo} alt="CDSL" className="sponsor-logo logo-cdsl" />
                </div>
                <span>CDSL Depository</span>
              </div>
              <span className="marquee-separator">❖</span>
              <div className="marquee-item">
                <div className="marquee-logo-container">
                  <img src={amfiLogo} alt="AMFI" className="sponsor-logo logo-amfi" />
                </div>
                <span>AMFI Registered</span>
              </div>
              <span className="marquee-separator">❖</span>
              <div className="marquee-item">
                <div className="marquee-logo-container">
                  <img src={ifscaLogo} alt="IFSCA" className="sponsor-logo logo-ifsca" />
                </div>
                <span>IFSCA · GIFT IFSC</span>
              </div>
              <span className="marquee-separator">❖</span>
              <div className="marquee-item">
                <div className="marquee-logo-container">
                  <img src={aamLogo} alt="AAM" className="sponsor-logo logo-aam" />
                </div>
                <span>Asia Asset Mgmt. recognition</span>
              </div>
              <span className="marquee-separator">❖</span>
              <div className="marquee-item">
                <div className="marquee-logo-container">
                  <img src={morningstarLogo} alt="Morningstar" className="sponsor-logo logo-morningstar" />
                </div>
                <span>Morningstar 5★ history</span>
              </div>
              <span className="marquee-separator">❖</span>
            </div>
            <div className="sponsors-marquee-content" aria-hidden="true">
              <div className="marquee-item">
                <div className="marquee-logo-container">
                  <img src={sebiLogo} alt="SEBI" className="sponsor-logo logo-sebi" />
                </div>
                <span>SEBI · PMS · Research</span>
              </div>
              <span className="marquee-separator">❖</span>
              <div className="marquee-item">
                <div className="marquee-logo-container">
                  <img src={nseLogo} alt="NSE" className="sponsor-logo logo-nse" />
                </div>
                <span>NSE Member</span>
              </div>
              <span className="marquee-separator">❖</span>
              <div className="marquee-item">
                <div className="marquee-logo-container">
                  <img src={bseLogo} alt="BSE" className="sponsor-logo logo-bse" />
                </div>
                <span>BSE Member</span>
              </div>
              <span className="marquee-separator">❖</span>
              <div className="marquee-item">
                <div className="marquee-logo-container">
                  <img src={cdslLogo} alt="CDSL" className="sponsor-logo logo-cdsl" />
                </div>
                <span>CDSL Depository</span>
              </div>
              <span className="marquee-separator">❖</span>
              <div className="marquee-item">
                <div className="marquee-logo-container">
                  <img src={amfiLogo} alt="AMFI" className="sponsor-logo logo-amfi" />
                </div>
                <span>AMFI Registered</span>
              </div>
              <span className="marquee-separator">❖</span>
              <div className="marquee-item">
                <div className="marquee-logo-container">
                  <img src={ifscaLogo} alt="IFSCA" className="sponsor-logo logo-ifsca" />
                </div>
                <span>IFSCA · GIFT IFSC</span>
              </div>
              <span className="marquee-separator">❖</span>
              <div className="marquee-item">
                <div className="marquee-logo-container">
                  <img src={aamLogo} alt="AAM" className="sponsor-logo logo-aam" />
                </div>
                <span>Asia Asset Mgmt. recognition</span>
              </div>
              <span className="marquee-separator">❖</span>
              <div className="marquee-item">
                <div className="marquee-logo-container">
                  <img src={morningstarLogo} alt="Morningstar" className="sponsor-logo logo-morningstar" />
                </div>
                <span>Morningstar 5★ history</span>
              </div>
              <span className="marquee-separator">❖</span>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
