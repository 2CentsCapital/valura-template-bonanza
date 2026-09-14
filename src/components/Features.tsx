import type { ReactNode } from 'react';
import { AUTH_URL } from '../config';
import { revealDelay } from '../motion';
import { IconArrowRight } from './icons';
import LoopVideo from './LoopVideo';
import imgCompanies from '../assets/media/why-companies.webp';
import imgIncome from '../assets/media/why-income.webp';
import imgPreIpo from '../assets/media/why-preipo.webp';
import globeMp4 from '../assets/media/why-globe.mp4';
import globeWebm from '../assets/media/why-globe.webm';
import globePoster from '../assets/media/why-globe-poster.webp';
import './Features.css';

type Card = {
  index: string;
  title: ReactNode;
  text: string;
  meta: string;
  media: ReactNode;
};

const CARDS: Card[] = [
  {
    index: '01',
    title: (
      <>
        Diversify beyond the <span className="accent">rupee.</span>
      </>
    ),
    text: 'USD revenue, USD profits, USD valuations, denominated in dollars rather than rupees. Historically, a modest global leg has improved drawdown behaviour for some long-horizon Indian portfolios. Past performance is not indicative of future returns.',
    meta: 'Currency diversification',
    media: (
      <LoopVideo
        className="card-image card-image--contain"
        mp4={globeMp4}
        webm={globeWebm}
        poster={globePoster}
        width={640}
        height={360}
      />
    ),
  },
  {
    index: '02',
    title: (
      <>
        Own the companies you use <span className="accent">every day.</span>
      </>
    ),
    text: 'Apple, NVIDIA, Microsoft, Alphabet, Meta, Tesla: investable in a single tap, fractional from $1, reported alongside your existing Bonanza portfolio.',
    meta: 'Fractional from $1',
    media: <img className="card-image" src={imgCompanies} width={635} height={408} loading="lazy" decoding="async" alt="" />,
  },
  {
    index: '03',
    title: (
      <>
        Seek income in <span className="accent">dollars.</span>
      </>
    ),
    text: 'Structured income notes and short-duration US treasuries can pay a coupon on idle USD. Coupons are indicative, disclosed per issue and not assured. Capital is at risk.',
    meta: 'USD coupons, indicative',
    media: <img className="card-image" src={imgIncome} width={740} height={448} loading="lazy" decoding="async" alt="" />,
  },
  {
    index: '04',
    title: (
      <>
        Be in <span className="accent">before</span> the IPO.
      </>
    ),
    text: 'Curated late-stage allocations, the kind of access Indian investors have asked for and rarely received, sized with research. Minimum ticket $10,000; eligibility applies.',
    meta: 'Pre-IPO, eligibility applies',
    media: <img className="card-image" src={imgPreIpo} width={740} height={238} loading="lazy" decoding="async" alt="" />,
  },
];

export default function Features() {
  return (
    <section id="why-global" className="features-wrapper" aria-labelledby="why-global-title">
      <div className="features container">
        <div className="features-header">
          <p className="badge features-badge" data-reveal="">
            Why global, why now
          </p>
          <h2 id="why-global-title" className="section-title" data-reveal="" style={revealDelay(80)}>
            A portfolio with <span className="accent">two engines.</span>
          </h2>
          <div className="features-lede" data-reveal="" style={revealDelay(160)}>
            <p>
              India built your wealth. The rest of the world can diversify it. Eight of the ten largest
              companies on earth trade outside India, and in past decades a dollar leg has often steadied
              Indian portfolios through rupee cycles. Past performance is not indicative of future
              returns.
            </p>
            <p>
              This isn&apos;t a switch from rupees to dollars. It&apos;s a second engine added to the
              markets expertise you already trust with Bonanza: same conviction, wider canvas.
            </p>
          </div>
          <a className="btn btn-primary" href={AUTH_URL} data-reveal="" style={revealDelay(240)}>
            Open a global account
            <IconArrowRight className="btn-icon" size={20} />
          </a>
        </div>

        <div className="features-grid-wide">
          {CARDS.map((card, i) => (
            <div key={card.index} className="feature-cell lift" data-reveal="" style={revealDelay((i % 2) * 110)}>
              <article className="feature-card">
                <div className="card-text">
                  <span className="card-index" aria-hidden="true">
                    {card.index}
                  </span>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.text}</p>
                  <p className="card-meta">{card.meta}</p>
                </div>
                <div className="card-image-container">{card.media}</div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
