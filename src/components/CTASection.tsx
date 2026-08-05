import './CTASection.css';
import laptopGif from '../assets/Graphics/laptop.gif.gif';

export default function CTASection() {
  return (
    <section className="cta-section-wrapper" data-node-id="93:902">
      <div className="cta-section" data-node-id="93:903">
        {/* Left Side */}
        <div className="cta-left" data-node-id="93:904">
          <h2 className="cta-title" data-node-id="93:906">
            Your wealth journey starts today.
          </h2>
          <p className="cta-desc">
            Join thousands of investors building diversified portfolios through expert research, innovative investment products, and trusted financial guidance.
          </p>
          <div className="cta-buttons-container">
            <button className="cta-primary-btn" onClick={() => alert('Opening an investment account...')}>Open an Investment Account</button>
            <button className="cta-secondary-btn" onClick={() => alert('Connecting with an expert...')}>Talk to an Investment Expert</button>
          </div>
        </div>

        {/* Right Side Illustration */}
        <div className="cta-right" data-node-id="93:917">
          <div className="cta-illustration-container" data-node-id="93:924">
            <img src={laptopGif} className="cta-laptop-gif" alt="Laptop trading dashboard" />
          </div>
        </div>
      </div>
    </section>
  );
}
