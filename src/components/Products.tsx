import './Products.css';
import AnimatedLogos from './AnimatedLogos';

import imgEquity from '../assets/Graphics/Equity (2).png';
import imgMutualFunds from '../assets/Graphics/MF2.png';
import imgGlobalMarkets from '../assets/Graphics/GM1.png';

export default function Products() {
  return (
    <section id="invest-in" className="products-wrapper" data-node-id="93:1344">
      <div className="products">
        <div className="products-header">
          <div className="badge products-badge" data-node-id="93:1345">
            <span data-node-id="93:1346">Products</span>
          </div>
          <h2 className="products-title" data-node-id="93:1347">
            Investment solutions for every stage of your financial journey.
          </h2>
        </div>

        {/* Product Cards Grid */}
        <div className="products-grid">
          {/* Card 1: Equity Research */}
          <a href="#equity-research" className="product-card card-health" data-node-id="93:1348">
            <div className="card-text" data-node-id="93:1349">
              <h3 className="product-card-title" data-node-id="93:1350">Equity Investing</h3>
              <p className="product-card-description" data-node-id="93:1352">
                Build long-term wealth through carefully selected stocks.
              </p>
            </div>
            <div className="product-image-container">
              <img src={imgEquity} className="product-image" alt="Equity Investing" />
            </div>
          </a>

          {/* Card 2: Mutual Funds */}
          <a href="#mutual-funds" className="product-card card-pension" data-node-id="93:1356">
            <div className="card-text" data-node-id="93:1357">
              <h3 className="product-card-title" data-node-id="93:1358">Mutual Funds</h3>
              <p className="product-card-description" data-node-id="93:1360">
                Invest across diversified portfolios managed by industry experts.
              </p>
            </div>
            <div className="product-image-container">
              <img src={imgMutualFunds} className="product-image" alt="Mutual Funds" />
            </div>
          </a>

          {/* Card 3: Global Markets */}
          <a href="#global-markets" className="product-card card-life" data-node-id="93:1364">
            <div className="card-text" data-node-id="93:1365">
              <h3 className="product-card-title" data-node-id="93:1366">Global Markets</h3>
              <p className="product-card-description" data-node-id="93:1368">
                Diversify internationally and unlock worldwide investment opportunities.
              </p>
            </div>
            <div className="product-image-container">
              <img src={imgGlobalMarkets} className="product-image" alt="Global Markets" />
            </div>
          </a>
        </div>

        {/* Integrated Providers Panel */}
        <div className="providers-panel" data-node-id="93:1372">
          <div className="providers-text" data-node-id="93:1373">
            <h3 className="providers-title" data-node-id="93:1374">All your investments. One powerful platform.</h3>
            <p className="providers-description" data-node-id="93:1376">
              Manage every investment from a single intuitive dashboard.
            </p>
          </div>
          <AnimatedLogos />
        </div>
      </div>
    </section>
  );
}
