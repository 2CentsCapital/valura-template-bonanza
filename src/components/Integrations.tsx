import { revealDelay } from '../motion';
import LeadForm from './LeadForm';
import StoreButtons from './StoreButtons';
import { IconCheck } from './icons';
import './Integrations.css';

const POINTS = [
  'Live account in under 10 minutes',
  'Funded in rupees under LRS',
  'One consolidated INR + USD view',
  'Research-led guidance, start to finish',
];

export default function Integrations() {
  return (
    <section id="open" className="integrations-wrapper on-dark" aria-labelledby="open-title">
      <div className="container">
        <div className="integrations-split">
          <div className="integrations-info">
            <p className="badge badge--dark integrations-badge" data-reveal="">
              Open your global desk
            </p>
            <h2 id="open-title" className="integrations-form-title" data-reveal="" style={revealDelay(80)}>
              Ready to take your portfolio <span className="accent">global?</span>
            </h2>
            <p className="integrations-form-subtitle" data-reveal="" style={revealDelay(160)}>
              Leave a few details. A Bonanza &amp; Valura.Ai specialist will reach out within one business
              day.
            </p>
            <ul className="benefits-list">
              {POINTS.map((point, k) => (
                <li key={point} data-reveal="" style={revealDelay(220 + k * 70)}>
                  <span className="benefit-icon" aria-hidden="true">
                    <IconCheck size={16} strokeWidth={2.4} />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div data-reveal="" style={revealDelay(500)}>
              <StoreButtons tone="dark" />
            </div>
          </div>

          <div className="form-card" data-reveal="zoom" style={revealDelay(140)}>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
