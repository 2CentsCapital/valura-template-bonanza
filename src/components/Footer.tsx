import { useState } from 'react';
import './Footer.css';
import bonanzaFooterWatermark from '../assets/Bonanza footer.svg';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    }
  };

  return (
    <footer className="footer-wrapper" data-node-id="93:782">
      <div className="footer">
        
        <div className="footer-main">
          {/* Left Column: Newsletter & Socials */}
          <div className="footer-left">
            <h2 className="newsletter-title">Signup for latest update</h2>
            <p className="newsletter-desc">
              Get exclusive insights, trend forecasts, and innovative strategies delivered directly to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="newsletter-input-wrapper">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe">
                  <svg className="send-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            </form>

            <div className="socials-section">
              <span className="socials-title">Follow us on</span>
              <div className="social-links">
                <a href="#facebook" className="social-link">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
                <a href="#instagram" className="social-link">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a href="#twitter" className="social-link">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>Twitter</span>
                </a>
                <a href="#linkedin" className="social-link">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Page links & Utilities */}
          <div className="footer-right">
            
            {/* Page Links Block */}
            <div className="footer-nav-block">
              <h3 className="nav-block-title">Page links</h3>
              <div className="nav-links-grid">
                <ul className="nav-column">
                  <li><a href="#home" className="nav-item active">Home</a></li>
                  <li><a href="#invest-in" className="nav-item">Invest in</a></li>
                  <li><a href="#research" className="nav-item">Research</a></li>
                  <li><a href="#why-global" className="nav-item">Why global</a></li>
                  <li><a href="#how-it-works" className="nav-item">How it works</a></li>
                  <li><a href="#trust" className="nav-item">Trust & regs</a></li>
                  <li><a href="#platform" className="nav-item">Platform</a></li>
                  <li><a href="#open-account" className="nav-item">Open Account</a></li>
                </ul>
                <ul className="nav-column">
                  <li><a href="#bonanza" className="nav-item">Bonanza Global</a></li>
                  <li><a href="#valura" className="nav-item">Valura.Ai</a></li>
                  <li><a href="#about" className="nav-item">About Us</a></li>
                  <li><a href="#careers" className="nav-item">Careers</a></li>
                  <li><a href="#faqs" className="nav-item">FAQs</a></li>
                  <li><a href="#blogs" className="nav-item">Blogs</a></li>
                  <li><a href="#contact" className="nav-item">Contact</a></li>
                </ul>
              </div>
            </div>

            {/* Utilities Block */}
            <div className="footer-nav-block">
              <h3 className="nav-block-title">Utilities</h3>
              <ul className="nav-column">
                <li><a href="#style-guide" className="nav-item">Style Guide</a></li>
                <li><a href="#license" className="nav-item">License</a></li>
                <li><a href="#changelog" className="nav-item">Changelog</a></li>
                <li><a href="#terms" className="nav-item">Terms of Service</a></li>
                <li><a href="#privacy" className="nav-item">Privacy Policy</a></li>
                <li><a href="#disclosures" className="nav-item">Regulatory Info</a></li>
                <li><a href="#help" className="nav-item">Help Center</a></li>
                <li><a href="#disclaimer" className="nav-item">Legal Disclaimer</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="footer-bottom-copyright">
          <p>© 2026. All rights reserved.</p>
        </div>

      </div>
      
      {/* Footer Watermark */}
      <div className="footer-watermark-container">
        <img src={bonanzaFooterWatermark} alt="" className="footer-watermark" />
      </div>
    </footer>
  );
}
