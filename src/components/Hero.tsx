import type { CSSProperties } from 'react';
import { AUTH_URL } from '../config';
import { revealDelay } from '../motion';
import { IconArrowRight, IconChart, IconDiamond, IconGlobe } from './icons';
import RollingNumber from './RollingNumber';
import { ShaderBackground } from './ui/dq';
import heroGlobe1000 from '../assets/media/hero-globe-1000.webp';
import heroGlobe560 from '../assets/media/hero-globe-560.webp';
import './Hero.css';

const EXCHANGES = [
  { code: 'NYSE', city: 'New York', tone: 'royal' },
  { code: 'LSE', city: 'London', tone: 'midnight' },
  { code: 'SGX', city: 'Singapore', tone: 'jade' },
  { code: 'TSE', city: 'Tokyo', tone: 'goldenrod' },
];

// Credentials strip as carried on the live landing. The network figures use the
// numbers published in the Bonanza brand book.
const CREDENTIALS = [
  'NSE Member',
  'BSE Member',
  'MCX Member',
  'SEBI Stock Broker',
  'Depository Participant',
  'PMS & Research',
  'Commodities',
  '1,700+ outlets',
  '600+ cities',
  'IFSCA, GIFT IFSC',
];

const STATS = [
  { value: '90+', label: 'Global markets, one account' },
  { value: '4,000+', label: 'US stocks & ETFs, fractional' },
  { value: '1,700+', label: 'Bonanza outlets across 600+ cities' },
  { value: '30 yrs', label: "In India's markets" },
];

// Hero copy enters on load: the eyebrow, the headline line by line, then the
// supporting copy. Nothing starts later than 400ms.
const enterDelay = (ms: number) => ({ '--enter-delay': `${ms}ms` }) as CSSProperties;

function CredentialList({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="sponsors-marquee-content" aria-hidden={duplicate || undefined}>
      {CREDENTIALS.map((item) => (
        <li key={item} className="marquee-item">
          <span>{item}</span>
          <IconDiamond className="marquee-separator" size={12} strokeWidth={2} />
        </li>
      ))}
    </ul>
  );
}

export default function Hero() {
  return (
    <>
      <section id="top" className="hero-wrapper" aria-labelledby="hero-title">
        <ShaderBackground className="hero-canvas" />
        <div className="hero container">
          <div className="hero-left">
            <p className="hero-eyebrow hero-enter" style={enterDelay(0)}>
              <span>Bonanza powered by Valura.Ai</span>
              <span>Your global investing desk</span>
            </p>
            <span className="hero-icon-bars hero-enter" style={enterDelay(320)} aria-hidden="true">
              <IconChart size={72} strokeWidth={1.3} />
            </span>
            <h1 id="hero-title" className="hero-title">
              <span className="hero-line">
                <span className="hero-line-inner" style={enterDelay(60)}>
                  Think investments.
                </span>
              </span>{' '}
              <span className="hero-line">
                <span className="hero-line-inner hero-title-inline" style={enterDelay(160)}>
                  <span className="accent">Now think global.</span>
                  <span className="hero-icon-globe" aria-hidden="true">
                    <IconGlobe size={46} strokeWidth={1.5} />
                  </span>
                </span>
              </span>
            </h1>
            <p className="hero-description hero-enter" style={enterDelay(240)}>
              Bonanza has powered Indian investors for 30 years across broking, PMS, commodities and
              research. Now add the world: 4,000+ US stocks and ETFs, dollar income and pre-IPO, under
              one IFSCA-regulated GIFT City account, funded in rupees.
            </p>
            <div className="hero-ctas hero-enter" style={enterDelay(320)}>
              <a className="btn btn-primary btn-lg" href={AUTH_URL}>
                Open a global account
                <IconArrowRight className="btn-icon" size={20} />
              </a>
              <a className="btn btn-secondary btn-lg" href="#invest-in">
                See what you can hold
              </a>
            </div>
            <ul className="hero-trust hero-enter" style={enterDelay(400)}>
              <li>IFSCA-regulated, GIFT IFSC</li>
              <li>Funded in rupees under LRS</li>
              <li>30 years in India&apos;s markets</li>
            </ul>
          </div>

          <div className="hero-right">
            <figure className="hero-visual">
              <div className="hero-visual-frame">
                <img
                  className="hero-image"
                  src={heroGlobe1000}
                  srcSet={`${heroGlobe560} 560w, ${heroGlobe1000} 1000w`}
                  sizes="(max-width: 768px) 80vw, (max-width: 1100px) 440px, 430px"
                  width={1000}
                  height={1000}
                  alt=""
                  fetchPriority="high"
                  decoding="async"
                />
                <ul className="exchange-chips" aria-label="Global exchanges">
                  {EXCHANGES.map((exchange, i) => (
                    <li key={exchange.code} className={`exchange-chip chip-${i + 1}`}>
                      <span className={`chip-dot chip-dot--${exchange.tone}`} aria-hidden="true" />
                      <span className="chip-text">
                        <strong>{exchange.code}</strong>
                        <small>{exchange.city}</small>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="sidecard sidecard-1">
                  <p className="sidecard-eyebrow">US stocks</p>
                  <p className="sidecard-row">
                    <strong>NVDA</strong>
                    <span className="sidecard-tag">NASDAQ</span>
                  </p>
                  <p className="sidecard-note">One of 4,000+ US stocks and ETFs</p>
                </div>
                <div className="sidecard sidecard-2">
                  <p className="sidecard-eyebrow sidecard-eyebrow--income">USD income</p>
                  <p className="sidecard-row">
                    <strong>Structured notes</strong>
                  </p>
                  <p className="sidecard-note">Coupons disclosed per issue, not assured</p>
                </div>
              </div>
              <figcaption className="visual-caption">Illustrative only. Not investment advice.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="sponsors-wrapper" aria-label="Bonanza credentials">
        <div className="sponsors container">
          <p className="sponsors-title" data-reveal="">
            30 years, twin-regulated
          </p>
          {/* Continuous marquee. Hover or keyboard focus pauses it; "Pause animations" in the footer stops it. */}
          <div
            className="sponsors-marquee"
            data-reveal=""
            style={revealDelay(80)}
            tabIndex={0}
            role="group"
            aria-label="Credentials"
          >
            <CredentialList />
            <CredentialList duplicate />
          </div>
          <dl className="stats-row" data-reveal="" style={revealDelay(140)}>
            {STATS.map((stat, i) => (
              <div className="stat" key={stat.label}>
                <dt className="stat-label">{stat.label}</dt>
                <dd className="stat-value">
                  <RollingNumber value={stat.value} delay={180 + i * 120} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
