import { AUTH_URL } from '../config';
import { revealDelay } from '../motion';
import { IconArrowRight, IconCheck } from './icons';
import imgOpen from '../assets/media/how-open.webp';
import imgFund from '../assets/media/how-fund.webp';
import imgInvest from '../assets/media/how-invest.webp';
import './AppFeatures.css';

type Step = {
  step: string;
  title: string;
  description: string;
  points: string[];
  image: { src: string; width: number; height: number; alt: string; caption?: string };
};

// "How it works" from the live landing, one alternating row per step.
const STEPS: Step[] = [
  {
    step: '01',
    title: 'Open in 3 minutes',
    description: 'Digital KYC with PAN and Aadhaar.',
    points: ['We pre-fill what we can', 'No paperwork trip', 'No re-scanning'],
    image: { src: imgOpen, width: 444, height: 444, alt: 'An investor completing digital KYC on a laptop' },
  },
  {
    step: '02',
    title: 'Fund in INR, hold in USD',
    description: 'LRS-compliant remittance from any Indian bank.',
    points: ['FX handled for you', 'W-8BEN handled for you', 'GIFT City onboarding handled for you'],
    image: { src: imgFund, width: 635, height: 408, alt: '' },
  },
  {
    step: '03',
    title: 'Invest with one tap',
    description: 'Search a US stock or a structured note, set a size, confirm.',
    points: [
      'The position lands in one consolidated view',
      'Fractional from $1',
      'In the Valura.Ai app on iOS and Android',
    ],
    image: {
      src: imgInvest,
      width: 444,
      height: 444,
      alt: 'Portfolio analysis screen from the app',
      caption: 'Illustrative only. Not investment advice.',
    },
  },
];

export default function AppFeatures() {
  return (
    <section id="how-it-works" className="app-features-wrapper" aria-labelledby="how-title">
      <div className="app-features-header container">
        <p className="badge" data-reveal="">
          How it works
        </p>
        <h2 id="how-title" className="section-title" data-reveal="" style={revealDelay(80)}>
          Live in <span className="accent">under ten minutes.</span>
        </h2>
        <p className="section-lead" data-reveal="" style={revealDelay(160)}>
          KYC once. Fund in rupees. Invest in dollars. Valura.Ai handles the IFSCA-regulated rails quietly
          underneath the Bonanza experience.
        </p>
      </div>

      {STEPS.map((step, i) => {
        const reversed = i % 2 === 1;
        return (
          <div key={step.step} className={`feature-section container ${reversed ? 'reverse' : ''}`}>
            <div className="feature-info" data-reveal={reversed ? 'right' : 'left'}>
              <div className="feature-badge-container">
                <p className="badge">Step {step.step}</p>
              </div>
              <h3 className="feature-title">{step.title}</h3>
              <p className="feature-description">{step.description}</p>
              <ul className="feature-list">
                {step.points.map((point, k) => (
                  <li key={point} className="feature-list-item" data-reveal="fade" style={revealDelay(260 + k * 90)}>
                    <span className="check-icon" aria-hidden="true">
                      <IconCheck size={16} strokeWidth={2.4} />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="feature-visual" data-reveal="zoom" style={revealDelay(120)}>
              <div className="feature-screenshot-container">
                <img
                  className="feature-screenshot"
                  src={step.image.src}
                  width={step.image.width}
                  height={step.image.height}
                  alt={step.image.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {step.image.caption && <figcaption className="visual-caption">{step.image.caption}</figcaption>}
            </figure>
          </div>
        );
      })}

      <div className="app-features-cta container" data-reveal="">
        <a className="btn btn-primary btn-lg" href={AUTH_URL}>
          Start KYC in 3 minutes
          <IconArrowRight className="btn-icon" size={20} />
        </a>
        <a className="btn btn-secondary btn-lg" href="#open">
          Talk to a specialist
        </a>
      </div>
    </section>
  );
}
