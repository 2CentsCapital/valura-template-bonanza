import './Testimonials.css';

const imgFiltersFormatWebp = "http://localhost:3845/assets/8cac66edac7e9cc006e377a554341d67f0d9b385.png";
const imgFiltersFormatWebp1 = "http://localhost:3845/assets/14f5fce788c8ca6dfdd7896d6c8cb3f3508ed0c2.png";
const imgFiltersFormatWebp2 = "http://localhost:3845/assets/aac6b1b18acee54880feb3c84cfacdb2ff89076d.png";
const imgImage = "http://localhost:3845/assets/c2dab529df4729577395a774e7d6f46b40135ba6.png"; // Hand cursor icon

export default function Testimonials() {
  return (
    <section id="trust-regs" className="testimonials-wrapper" data-node-id="93:1251">
      <div className="testimonials" data-node-id="93:1252">
        <div className="testimonials-badge-container">
          <div className="badge" data-node-id="93:1253">
            <span data-node-id="93:1254">Testimonials</span>
          </div>
        </div>

        <h2 className="testimonials-content">
          Millions of
          <span className="inline-avatar-container" data-node-id="93:1258">
            <img src={imgFiltersFormatWebp} className="inline-avatar" alt="User Avatar" />
            <div className="quote-tooltip">
              <p className="quote-text">"Bonanza's research and trading platform transformed how I invest. Their expert guidance has been invaluable for my portfolio growth."</p>
              <div className="quote-author">Amit S.</div>
              <div className="quote-role">Private Investor</div>
            </div>
          </span>
          investors trust us to help
          <span className="inline-avatar-container" data-node-id="93:1263">
            <img src={imgFiltersFormatWebp1} className="inline-avatar" alt="Finance Officer Avatar" />
            <div className="quote-tooltip">
              <p className="quote-text">"The global investment access and mutual fund options made wealth building simple. Highly professional and deeply researched."</p>
              <div className="quote-author">Sarah M.</div>
              <div className="quote-role">Wealth Planner</div>
            </div>
          </span>
          shape their
          <span className="inline-avatar-container" data-node-id="93:1267">
            <img src={imgFiltersFormatWebp2} className="inline-avatar" alt="Manager Avatar" />
            <div className="quote-tooltip">
              <p className="quote-text">"With 30+ years of market expertise, Bonanza delivers the confidence I need for long-term investment planning."</p>
              <div className="quote-author">Rajesh K.</div>
              <div className="quote-role">Investor</div>
            </div>
          </span>
          financial future.
        </h2>

        <div className="hover-hint">
          <span data-node-id="93:1272">Try to hover</span>
          <img src={imgImage} className="hand-icon" alt="Hand cursor pointing" data-node-id="93:1273" />
        </div>
      </div>
    </section>
  );
}
