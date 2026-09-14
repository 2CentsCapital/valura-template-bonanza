import { useEffect } from 'react';
import { initReveals } from './motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Research from './components/Research';
import CTASection from './components/CTASection';
import AppFeatures from './components/AppFeatures';
import Trust from './components/Trust';
import FAQ from './components/FAQ';
import Integrations from './components/Integrations';
import Footer from './components/Footer';

function App() {
  // Runs after every section has mounted, so all reveal targets are in the DOM.
  useEffect(() => initReveals(), []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Features />
        <Products />
        <Research />
        <CTASection />
        <AppFeatures />
        <Trust />
        <FAQ />
        <Integrations />
      </main>
      <Footer />
    </>
  );
}

export default App;
