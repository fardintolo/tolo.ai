import React from 'react';
import SectionHeader from './SectionHeader';
import CompanyLogos from './CompanyLogos';
import TestimonialCarousel from './TestimonialCarousel';

const SocialProof = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <CompanyLogos />
        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default SocialProof;