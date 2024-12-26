import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TrialBanner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center"
    >
      <h3 className="text-2xl font-bold mb-4">
        Experience the Power of AI Automation
      </h3>
      <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
        Start transforming your business today with our 30-day evaluation period. 
        No commitments required.
      </p>
      <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition group">
        Begin Your Journey
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
};

export default TrialBanner;