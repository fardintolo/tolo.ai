import React from 'react';
import HeroContent from './HeroContent';
import HeroVisual from './HeroVisual';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <HeroVisual />
        </div>
      </div>
    </div>
  );
};

export default Hero;