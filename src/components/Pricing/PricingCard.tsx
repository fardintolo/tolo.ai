import React from 'react';
import { Check } from 'lucide-react';
import type { PricingTier } from './types';

interface PricingCardProps {
  tier: PricingTier;
  isPopular?: boolean;
}

const PricingCard = ({ tier, isPopular }: PricingCardProps) => {
  return (
    <div className={`bg-gray-800 rounded-xl p-8 border ${
      isPopular ? 'border-blue-500' : 'border-gray-700'
    }`}>
      {isPopular && (
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
      <p className="text-gray-400 mb-6">{tier.description}</p>
      
      <div className="mb-6">
        <span className="text-3xl font-bold">${tier.price}</span>
        <span className="text-gray-400">/month</span>
      </div>
      
      <ul className="space-y-4 mb-8">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-3 rounded-lg font-medium transition ${
        isPopular 
          ? 'bg-blue-600 hover:bg-blue-700 text-white'
          : 'bg-gray-700 hover:bg-gray-600 text-white'
      }`}>
        Start {tier.name}
      </button>
    </div>
  );
};

export default PricingCard;