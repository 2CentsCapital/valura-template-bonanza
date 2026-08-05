import './Integrations.css';

export default function Integrations() {
  return (
    <section id="how-it-works" className="integrations-wrapper" data-node-id="93:929">
      <div className="integrations" data-node-id="93:930">
        <div className="integrations-split">
          {/* Left Column: Benefits Text */}
          <div className="integrations-info">
            <div className="badge integrations-badge-orange">
              <span>❖ OPEN AN ACCOUNT</span>
            </div>
            <h2 className="integrations-form-title">
              Fully digital, regulated in India, your money custodied in India.
            </h2>
            <p className="integrations-form-subtitle">
              Leave your details and a Bonanza specialist takes it from there.
            </p>
            
            <ul className="benefits-list">
              <li>
                <span className="benefit-icon">✓</span>
                <span className="benefit-text">Paperless KYC in minutes</span>
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                <span className="benefit-text">Start from $5,000 — buy in fractions</span>
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                <span className="benefit-text">No foreign bank account needed</span>
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                <span className="benefit-text">Tax & LRS reporting done for you</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Form Card */}
          <div className="form-card">
            <h3 className="form-card-title">Open your global account</h3>
            
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Request submitted successfully!'); }}>
              <div className="form-group">
                <label htmlFor="fullname">Full name</label>
                <input 
                  type="text" 
                  id="fullname" 
                  placeholder="As per Govt. ID" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input 
                  type="tel" 
                  id="mobile" 
                  placeholder="+91" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="you@email.com" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="investorType">I am a</label>
                <select id="investorType" required defaultValue="">
                  <option value="" disabled>Select one...</option>
                  <option value="retail">Retail Investor</option>
                  <option value="hni">HNI / Corporate</option>
                  <option value="partner">Partner / Distributor</option>
                </select>
              </div>

              <button type="submit" className="form-submit-btn">
                Contact us <span className="arrow">→</span>
              </button>
            </form>

            <p className="form-disclaimer">
              By continuing you agree to be contacted by Bonanza. Investments are subject to market risks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
