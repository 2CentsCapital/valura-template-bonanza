import './Features.css';

import imgImage from '../assets/Graphics/stocks.png'; // Stocks & Trading
import imgImage1 from '../assets/Graphics/MF.png'; // Mutual Funds
import imgImage2 from '../assets/Graphics/Global inv.webp'; // Global Investing
import imgImage3 from '../assets/Graphics/IPO.png'; // IPOs & New Listings
import imgImage4 from '../assets/Graphics/Wealth M.png'; // Wealth Management

export default function Features() {
  return (
    <section id="why-global" className="features-wrapper" data-node-id="93:1383">
      <div className="features">
        <div className="features-header">
          <div className="badge features-badge" data-node-id="93:1384">
            <span data-node-id="93:1385">Why Bonanza</span>
          </div>
          <h2 className="features-title" data-node-id="93:1386">
            Everything you need to grow your wealth.
          </h2>
        </div>

        {/* Row 1: 3 columns */}
        <div className="features-grid">
          <div className="feature-card" data-node-id="93:1387">
            <div className="card-text" data-node-id="93:1388">
              <h3 className="card-title" data-node-id="93:1390">Stocks & Trading</h3>
              <p className="card-description" data-node-id="93:1392">
                Trade confidently with real-time insights and powerful market tools.
              </p>
            </div>
            <div className="card-image-container" data-node-id="93:1393">
              <img src={imgImage} alt="Global investing map" className="card-image" data-node-id="93:1398" />
            </div>
          </div>

          <div className="feature-card" data-node-id="93:1399">
            <div className="card-text" data-node-id="93:1400">
              <h3 className="card-title" data-node-id="93:1402">Mutual Funds</h3>
              <p className="card-description" data-node-id="93:1404">
                Discover professionally managed funds aligned with your financial goals.
              </p>
            </div>
            <div className="card-image-container" data-node-id="93:1405">
              <img src={imgImage1} alt="Fundamental research analysis" className="card-image" data-node-id="93:1410" />
            </div>
          </div>

          <div className="feature-card" data-node-id="93:1411">
            <div className="card-text" data-node-id="93:1412">
              <h3 className="card-title" data-node-id="93:1414">Global Investing</h3>
              <p className="card-description" data-node-id="93:1416">
                Access investment opportunities beyond domestic markets.
              </p>
            </div>
            <div className="card-image-container" data-node-id="93:1417">
              <img src={imgImage2} alt="Compliance and transparency audit" className="card-image" data-node-id="93:1421" />
            </div>
          </div>
        </div>

        {/* Row 2: 2 columns */}
        <div className="features-grid-wide">
          <div className="feature-card feature-card-wide" data-node-id="93:1422">
            <div className="card-text" data-node-id="93:1423">
              <h3 className="card-title" data-node-id="93:1425">IPOs & New Listings</h3>
              <p className="card-description" data-node-id="93:1427">
                Stay ahead with upcoming IPOs and curated investment opportunities.
              </p>
            </div>
            <div className="card-image-container" data-node-id="93:1428">
              <img src={imgImage3} alt="Sustainable wealth growth chart" className="card-image" data-node-id="93:1433" />
            </div>
          </div>

          <div className="feature-card feature-card-wide" data-node-id="93:1434">
            <div className="card-text" data-node-id="93:1435">
              <h3 className="card-title" data-node-id="93:1437">Wealth Management</h3>
              <p className="card-description" data-node-id="93:1439">
                Personalized investment strategies designed for long-term wealth creation.
              </p>
            </div>
            <div className="card-image-container" data-node-id="93:1440">
              <img src={imgImage4} alt="Single dashboard for wealth portfolios" className="card-image" data-node-id="93:1444" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
