import React from 'react';
import { motion } from 'framer-motion';
import FeaturesGrid from './FeaturesGrid';

const Features = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Transform Your Business</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how our AI-powered solutions can revolutionize your operations
            and enhance customer experience.
          </p>
        </motion.div>
        
        <FeaturesGrid />
      </div>
    </section>
  );
};

export default Features;