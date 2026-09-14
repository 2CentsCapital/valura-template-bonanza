import { AUTH_URL, BONANZA_IFSC_URL, VALURA_URL } from '../config';
import StoreButtons from './StoreButtons';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-wrapper on-dark">
      <div className="footer container">
        <div className="footer-main">
          <div className="footer-left">
            {/* Worded name only: the joint mark appears once, in the header. */}
            <p className="footer-brand">Bonanza powered by Valura.Ai</p>
            <p className="footer-about">
              A co-branded global investing experience for Bonanza investors. Bonanza powers the markets
              expertise, research and India relationship. Valura.Ai (Valura India IFSC Limited) powers the
              IFSCA-regulated broker-dealer rails from GIFT City.
            </p>
            <StoreButtons tone="dark" />
          </div>

          <div className="footer-right">
            <nav className="footer-nav-block" aria-labelledby="footer-platform">
              <h2 id="footer-platform" className="nav-block-title">
                Platform
              </h2>
              <ul className="nav-column">
                <li>
                  <a className="nav-item" href="#invest-in">
                    What you can invest in
                  </a>
                </li>
                <li>
                  <a className="nav-item" href="#research">
                    Research desk
                  </a>
                </li>
                <li>
                  <a className="nav-item" href="#how-it-works">
                    How it works
                  </a>
                </li>
                <li>
                  <a className="nav-item" href="#trust">
                    Trust &amp; regulation
                  </a>
                </li>
                <li>
                  <a className="nav-item" href={AUTH_URL}>
                    Open account
                  </a>
                </li>
              </ul>
            </nav>

            <nav className="footer-nav-block" aria-labelledby="footer-companies">
              <h2 id="footer-companies" className="nav-block-title">
                Companies
              </h2>
              <ul className="nav-column">
                <li>
                  <a className="nav-item" href={BONANZA_IFSC_URL} target="_blank" rel="noopener noreferrer">
                    Bonanza IFSC
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
                <li>
                  <a className="nav-item" href={VALURA_URL} target="_blank" rel="noopener noreferrer">
                    Valura.Ai
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
                <li>
                  <a className="nav-item" href="#open">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="nav-item" href="#open">
                    Talk to a specialist
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="footer-legal">
          <div className="footer-reg">
            <div>
              <p className="footer-reg-title">Bonanza</p>
              <p>
                SEBI-registered Stock Broker (NSE, BSE, MCX), Depository Participant (CDSL, NSDL), PMS &amp;
                Research. A broking &amp; wealth house since 1994. Bonanza Portfolio (IFSC) Private Limited is
                registered with IFSCA as a Broker Dealer (INZ000220432).
              </p>
            </div>
            <div>
              <p className="footer-reg-title">Valura.Ai: Valura India IFSC Limited</p>
              <p>
                Registered with IFSCA as a broker-dealer at GIFT City. GIFT SEZ, GIFT City, Gandhinagar, Gujarat
                382355, India. Designed for permitted global investing by resident Indians under LRS.
              </p>
            </div>
          </div>

          <p className="footer-risk">
            Investments in securities markets are subject to market risks. Read all related documents carefully
            before investing.
          </p>
          <p className="footer-disclaimer">
            Past performance is not indicative of future returns; figures shown are indicative, not guaranteed.
            Currency, country and issuer risk apply to all global products. This page is for informational
            purposes and does not constitute investment advice or an offer to sell or solicitation to buy any
            security. Eligibility for structured products and pre-IPO allocations is subject to investor
            classification and regulatory limits. Product visuals and account screens on this page are
            illustrative only.
          </p>
          <p className="footer-disclaimer">
            Bonanza and the Bonanza logo are either registered trademarks or trademarks of Bonanza in India or
            other countries. All other trademarks are the property of their respective owners.
          </p>
        </div>

        <div className="footer-bottom-copyright">
          <p>&copy; {year} Bonanza powered by Valura.Ai. All rights reserved.</p>
          <p>Think investments. Now think global.</p>
        </div>
      </div>
    </footer>
  );
}
