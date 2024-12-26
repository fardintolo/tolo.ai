import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import SocialProof from './components/SocialProof';
import About from './components/About';
import Applications from './components/Applications';
import DataVisualization from './components/DataVisualization';
import Features from './components/Features';
import DemoSection from './components/DemoSection';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <SocialProof />
        <About />
        <Applications />
        <DataVisualization />
        <Features />
        <DemoSection />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;