import type { ComponentType, SVGProps } from 'react';
import { revealDelay } from '../motion';
import AnimatedLogos from './AnimatedLogos';
import { IconChart, IconGlobe, IconLandmark, IconLayers, IconRocket, IconTicket } from './icons';
import './Products.css';

type Shelf = {
  Icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
  title: string;
  text: string;
  tag: string;
};

// The six shelves from the live landing, edited to the compliance rules: no return
// figures, no private company names.
const SHELVES: Shelf[] = [
  {
    Icon: IconChart,
    title: 'US, UK & HK equities',
    text: 'Listed equities in the US, UK and Hong Kong, including 4,000+ US stocks and ETFs. Fractional, settled into your unified view.',
    tag: 'From $1',
  },
  {
    Icon: IconGlobe,
    title: 'Global ETFs',
    text: 'Core exposure built right: S&P 500, NASDAQ-100, MSCI World, plus 200+ low-cost theme funds.',
    tag: '200+ ETFs',
  },
  {
    Icon: IconTicket,
    title: 'Structured income notes',
    text: 'Notes that pay coupons in US dollars. Coupons are indicative, disclosed per issue and not assured. Capital is at risk.',
    tag: 'USD income',
  },
  {
    Icon: IconLandmark,
    title: 'US treasuries & IG bonds',
    text: 'Hold USD in laddered T-bills and investment-grade corporates.',
    tag: 'Fixed income',
  },
  {
    Icon: IconRocket,
    title: 'Pre-IPO & private equity',
    text: 'Curated late-stage names with research-led sizing. Minimum ticket $10,000.',
    tag: 'Eligibility',
  },
  {
    Icon: IconLayers,
    title: 'Global funds & REITs',
    text: 'Offshore funds, feeders and global REITs, onboarded once and reported alongside your India book.',
    tag: 'Curated shortlist',
  },
];

export default function Products() {
  return (
    <section id="invest-in" className="products-wrapper" aria-labelledby="invest-in-title">
      <div className="products container">
        <div className="products-header">
          <p className="badge products-badge" data-reveal="">
            What you can hold
          </p>
          <h2 id="invest-in-title" className="section-title" data-reveal="" style={revealDelay(80)}>
            Six shelves. <span className="accent">One regulated roof.</span>
          </h2>
          <p className="section-lead products-lead" data-reveal="" style={revealDelay(160)}>
            The full global menu, from blue-chip equities to income notes, under one IFSCA account. No
            second login, no overseas bank account, no scattered tax pack.
          </p>
        </div>

        <ul className="products-grid">
          {SHELVES.map(({ Icon, title, text, tag }, i) => (
            <li key={title} className="product-cell lift" data-reveal="" style={revealDelay((i % 3) * 90)}>
              <article className={`product-card ${i % 2 === 0 ? 'product-card--royal' : 'product-card--midnight'}`}>
                <Icon className="product-card-icon" size={32} strokeWidth={1.5} />
                <h3 className="product-card-title">{title}</h3>
                <p className="product-card-description">{text}</p>
                <p className="product-card-tag">{tag}</p>
              </article>
            </li>
          ))}
        </ul>

        <div className="providers-panel" data-reveal="">
          <div className="providers-text">
            <h3 className="providers-title">
              90+ global markets,
              <br />
              one account.
            </h3>
            <p className="providers-description">
              100,000+ instruments, including 4,000+ US stocks and ETFs with fractional investing from $1,
              on one IFSCA-regulated account at GIFT City.
            </p>
          </div>
          <AnimatedLogos />
        </div>
      </div>
    </section>
  );
}
