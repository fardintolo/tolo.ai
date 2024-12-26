import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from './featureData';

const FeaturesGrid = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
};

export default FeaturesGrid;