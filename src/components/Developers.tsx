import './Developers.css';

const imgImage = "http://localhost:3845/assets/b5a08982f24da8135260d6c9b5839788aed16575.png"; // Right code graphic

export default function Developers() {
  return (
    <section className="developers-wrapper" data-node-id="93:725">
      <div className="developers-card">
        {/* Left Side */}
        <div className="developers-left" data-node-id="93:726">
          <h2 className="developers-title" data-node-id="93:729">One platform. Every investment opportunity.</h2>
          <p className="developers-description" data-node-id="93:731">
            Trade, invest, research, monitor portfolios, discover IPOs, invest globally, and manage wealth from one seamless experience.
          </p>
          <button className="developers-btn" data-node-id="93:733">
            <span data-node-id="93:734">Start Investing</span>
          </button>
        </div>

        {/* Right Side */}
        <div className="developers-right" data-node-id="93:735">
          <img src={imgImage} className="developers-image" alt="Narnolia unified platform mockup" data-node-id="93:740" />
        </div>
      </div>
    </section>
  );
}
