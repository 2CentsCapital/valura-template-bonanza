import { AUTH_URL } from '../config';
import { revealDelay } from '../motion';
import { IconArrowRight } from './icons';
import quoteImage from '../assets/media/quote-portfolio.webp';
import './CTASection.css';

export default function CTASection() {
  return (
    <section className="cta-section-wrapper on-dark">
      <div className="cta-section container">
        <div className="cta-left">
          <blockquote className="cta-quote" data-reveal="">
            <p>
              Thirty years building wealth in India. Now hold one corner of your portfolio in dollars, on a
              regulated rail, from GIFT City.
            </p>
          </blockquote>
          <p className="cta-byline" data-reveal="" style={revealDelay(100)}>
            Bonanza powered by Valura.Ai. A global desk built into the markets house you already trust.
          </p>
          <div className="cta-buttons-container" data-reveal="" style={revealDelay(180)}>
            <a className="btn btn-primary" href={AUTH_URL}>
              Open a global account
              <IconArrowRight className="btn-icon" size={20} />
            </a>
            <a className="btn btn-light" href="#open">
              Talk to a specialist
            </a>
          </div>
        </div>

        <div className="cta-right">
          <div className="cta-illustration-container" data-reveal="zoom" style={revealDelay(120)}>
            <img
              className="cta-image"
              src={quoteImage}
              width={900}
              height={826}
              loading="lazy"
              decoding="async"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
