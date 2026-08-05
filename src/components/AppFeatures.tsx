import './AppFeatures.css';
import img11 from '../assets/Graphics/11.png';
import img12 from '../assets/Graphics/12.png';
import img151inv from '../assets/Graphics/151inv.png';

const imgEmployeeApp = img11;
const imgBenchmarking = img12;
const imgFinanceAutomated = img151inv;
const checkIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'%3E%3Ccircle cx='12' cy='12' r='12' fill='%2322c55e'/%3E%3Cpath d='M7 12.5l3.2 3.2L17 9' stroke='white' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";

export default function AppFeatures() {
  return (
    <div id="research" className="app-features-wrapper">
      {/* Section 1: Global Research */}
      <section className="feature-section" data-node-id="93:1322">
        <div className="feature-info">
          <div className="feature-badge-container">
            <div className="badge" data-node-id="93:1323">
              <span data-node-id="93:1324">MARKET RESEARCH</span>
            </div>
          </div>
          <h2 className="feature-title" data-node-id="93:1325">Research that helps you invest with confidence.</h2>
          <p className="feature-description" data-node-id="93:1326">
            Receive expert market analysis, sector outlooks, stock ideas, and actionable insights to make smarter investment decisions.
          </p>
          <ul className="feature-list">
            <li className="feature-list-item" data-node-id="93:1330">
              <img src={checkIcon} className="check-icon" alt="Check Icon" />
              <span>Daily market updates</span>
            </li>
            <li className="feature-list-item" data-node-id="93:1334">
              <img src={checkIcon} className="check-icon" alt="Check Icon" />
              <span>Stock recommendations</span>
            </li>
            <li className="feature-list-item" data-node-id="93:1338">
              <img src={checkIcon} className="check-icon" alt="Check Icon" />
              <span>Sector research</span>
            </li>
          </ul>
        </div>
        <div className="feature-visual" data-node-id="93:1339">
          <div className="feature-screenshot-container" data-node-id="93:1340">
            <img src={imgEmployeeApp} className="feature-screenshot" alt="Global research analytics" data-node-id="93:1343" />
          </div>
        </div>
      </section>

      {/* Section 2: Market Intelligence */}
      <section className="feature-section reverse" data-node-id="93:1300">
        <div className="feature-info">
          <div className="feature-badge-container">
            <div className="badge" data-node-id="93:1301">
              <span data-node-id="93:1302">WEALTH SOLUTIONS</span>
            </div>
          </div>
          <h2 className="feature-title" data-node-id="93:1303">Create a diversified portfolio built for tomorrow.</h2>
          <p className="feature-description" data-node-id="93:1304">
            Invest across multiple asset classes while balancing growth, income, and long-term financial security.
          </p>
          <ul className="feature-list">
            <li className="feature-list-item" data-node-id="93:1308">
              <img src={checkIcon} className="check-icon" alt="Check Icon" />
              <span>Stocks</span>
            </li>
            <li className="feature-list-item" data-node-id="93:1312">
              <img src={checkIcon} className="check-icon" alt="Check Icon" />
              <span>Mutual Funds</span>
            </li>
            <li className="feature-list-item" data-node-id="93:1316">
              <img src={checkIcon} className="check-icon" alt="Check Icon" />
              <span>ETFs & Global Investments</span>
            </li>
          </ul>
        </div>
        <div className="feature-visual" data-node-id="93:1317">
          <div className="feature-screenshot-container" data-node-id="93:1318">
            <img src={imgBenchmarking} className="feature-screenshot" alt="Market intelligence chart" data-node-id="93:1321" />
          </div>
        </div>
      </section>

      {/* Section 3: Wealth Management */}
      <section className="feature-section" data-node-id="93:1278">
        <div className="feature-info">
          <div className="feature-badge-container">
            <div className="badge" data-node-id="93:1279">
              <span data-node-id="93:1280">EXPERT GUIDANCE</span>
            </div>
          </div>
          <h2 className="feature-title" data-node-id="93:1281">Financial expertise that grows with you.</h2>
          <p className="feature-description" data-node-id="93:1282">
            Whether you're starting your investment journey or expanding an existing portfolio, our advisors help you make informed decisions every step of the way.
          </p>
          <ul className="feature-list">
            <li className="feature-list-item" data-node-id="93:1286">
              <img src={checkIcon} className="check-icon" alt="Check Icon" />
              <span>Personalized strategies</span>
            </li>
            <li className="feature-list-item" data-node-id="93:1290">
              <img src={checkIcon} className="check-icon" alt="Check Icon" />
              <span>Professional advisors</span>
            </li>
            <li className="feature-list-item" data-node-id="93:1294">
              <img src={checkIcon} className="check-icon" alt="Check Icon" />
              <span>Long-term planning</span>
            </li>
          </ul>
        </div>
        <div className="feature-visual" data-node-id="93:1295">
          <div className="feature-screenshot-container" data-node-id="93:1296">
            <img src={imgFinanceAutomated} className="feature-screenshot" alt="Wealth management portfolio dashboard" data-node-id="93:1299" />
          </div>
        </div>
      </section>
    </div>
  );
}
