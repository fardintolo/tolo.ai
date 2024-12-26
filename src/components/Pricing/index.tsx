import React from 'react';
import PricingHeader from './PricingHeader';
import PricingCard from './PricingCard';
import TrialBanner from './TrialBanner';
import { pricingTiers } from './pricingData';

const Pricing = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingHeader />
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingCard 
              key={tier.name}
              tier={tier}
              isPopular={index === 1}
            />
          ))}
        </div>

        <TrialBanner />
      </div>
    </section>
  );
};

export default Pricing;