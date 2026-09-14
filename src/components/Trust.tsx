import { IconFileCheck } from './icons';
import './Trust.css';

// Registrations as carried on the live landing, corrected to the canonical
// Valura entity and to Bonanza's IFSC registration from the partner record.
const REGISTRATIONS = [
  { label: 'Bonanza: SEBI Stock Broker', value: 'NSE, BSE, MCX' },
  { label: 'Bonanza: Depository Participant', value: 'CDSL, NSDL' },
  { label: 'Bonanza: PMS & Research', value: 'SEBI-registered' },
  { label: 'Bonanza Portfolio (IFSC) Private Limited', value: 'IFSCA Broker Dealer, INZ000220432' },
  { label: 'Valura India IFSC Limited', value: 'IFSCA broker-dealer, GIFT City' },
  { label: 'Custody', value: 'Onshore-linked' },
  { label: 'Funding', value: 'LRS, INR to USD' },
  { label: 'Reporting', value: 'Consolidated, INR and USD' },
];

export default function Trust() {
  return (
    <section id="trust" className="trust-wrapper" aria-labelledby="trust-title">
      <div className="trust container">
        <div className="trust-body">
          <p className="badge badge--white">Trust &amp; regulation</p>
          <h2 id="trust-title" className="section-title">
            Twin-regulated. <span className="accent">Single trail.</span>
          </h2>
          <p>
            <strong>Bonanza</strong> has been a broking and wealth house since 1994: a SEBI-registered stock
            broker across NSE, BSE and MCX, with depository, PMS, commodities and research, and 1,700+ outlets
            across 600+ cities. <strong>Valura.Ai</strong> (Valura India IFSC Limited) is a GIFT City
            broker-dealer regulated by IFSCA, the government-sanctioned route for resident Indians to invest in
            permitted global products.
          </p>
          <p>
            Your money moves on a regulated rail. Rupees move under LRS to an IFSC entity, securities settle
            into onshore-linked global custody, and reporting comes back consolidated, in INR and USD, ready
            for your tax workflow.
          </p>
          <a className="btn btn-secondary" href="#open">
            Request the regulatory pack
          </a>
        </div>

        <div className="regbox">
          <p className="regbox-title">
            <IconFileCheck size={22} />
            Registrations
          </p>
          <dl className="regbox-list">
            {REGISTRATIONS.map((row) => (
              <div className="regrow" key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
