import React from 'react';
import type { BenefitProps } from './types';

const BenefitCard = ({ icon: Icon, title, description }: BenefitProps) => {
  return (
    <div className="p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-blue-500 transition group">
      <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition">
        <Icon className="w-6 h-6 text-blue-500" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default BenefitCard;