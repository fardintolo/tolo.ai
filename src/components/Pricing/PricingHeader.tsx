import React from 'react';
import { motion } from 'framer-motion';

const PricingHeader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold mb-4">Solutions Tailored for Your Business</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Choose the perfect plan to transform your customer experience with AI-powered automation
      </p>
    </motion.div>
  );
};

export default PricingHeader;