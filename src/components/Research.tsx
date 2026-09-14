import type { ReactNode } from 'react';
import { revealDelay } from '../motion';
import { IconDocument } from './icons';
import './Research.css';

type Note = {
  area: string;
  cadence: string;
  tag: string;
  title: ReactNode;
  text: string;
};

// Research notes as described on the live landing. The live page has no
// published documents behind them, so there is no "read" link here.
const NOTES: Note[] = [
  {
    area: 'Allocation',
    cadence: 'Quarterly',
    tag: 'Strategy',
    title: (
      <>
        How much <span className="accent">dollar</span> should your portfolio carry?
      </>
    ),
    text: 'A framework for sizing the global leg of an Indian portfolio, with historical drawdown evidence across rupee cycles and three simple rebalancing rules.',
  },
  {
    area: 'Thematic',
    cadence: 'Monthly',
    tag: 'Equity',
    title: (
      <>
        Beyond the Magnificent Seven: <span className="accent">a US mid-cap screen</span>
      </>
    ),
    text: 'A screen of US mid-caps with India-style ROCE, cash conversion and re-investment runway, held across cycles, not chased through headlines.',
  },
  {
    area: 'Fixed Income',
    cadence: 'Quarterly',
    tag: 'Yield',
    title: (
      <>
        Laddered USD income, <span className="accent">explained.</span>
      </>
    ),
    text: "A primer on structured notes and short-tenor T-bills, with indicative examples sized to fit a typical Indian investor's cashflow calendar.",
  },
];

export default function Research() {
  return (
    <section id="research" className="research-wrapper" aria-labelledby="research-title">
      <div className="container">
        <div className="research-header">
          <p className="badge badge--white" data-reveal="">
            Research-led, not noise-led
          </p>
          <h2 id="research-title" className="section-title" data-reveal="" style={revealDelay(80)}>
            The research you trust, now with a <span className="accent">global lens.</span>
          </h2>
          <p className="section-lead" data-reveal="" style={revealDelay(160)}>
            Bonanza is built on markets research and disciplined advice. Every global idea is filtered
            through the same lens (fit to your goal, risk and horizon first), then delivered in plain
            language, never as a 3 a.m. tip.
          </p>
        </div>

        <ul className="research-grid">
          {NOTES.map((note, i) => (
            <li key={note.area} className="research-cell lift" data-reveal="" style={revealDelay((i % 3) * 100)}>
              <article className="research-card">
                <div className="research-card-top">
                  <p className="research-meta">
                    <span>{note.area}</span>
                    <span>{note.cadence}</span>
                  </p>
                  <p className="research-tag">{note.tag}</p>
                </div>
                <IconDocument className="research-icon" size={28} strokeWidth={1.6} />
                <h3 className="research-title">{note.title}</h3>
                <p className="research-text">{note.text}</p>
                <p className="research-by">By the Valura research desk</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
