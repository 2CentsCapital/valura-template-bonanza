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
            <p className="badge badge--dark integrations-badge">Open your global desk</p>
            <h2 id="open-title" className="integrations-form-title">
              Ready to take your portfolio <span className="accent">global?</span>
            </h2>
            <p className="integrations-form-subtitle">
              Leave a few details. A Bonanza &amp; Valura.Ai specialist will reach out within one business
              day.
            </p>
            <ul className="benefits-list">
              {POINTS.map((point) => (
                <li key={point}>
                  <span className="benefit-icon" aria-hidden="true">
                    <IconCheck size={16} strokeWidth={2.4} />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <StoreButtons tone="dark" />
          </div>

          <div className="form-card">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
