import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroContent = () => {
  return (
    <div className="text-left">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
      >
        Revolutionize Customer Engagement with AI-Powered Solutions
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-gray-300 mb-8"
      >
        Streamline support, boost CRM efficiency, and simplify appointment management—all in one platform.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <button className="group flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105">
          Book Your Free Consultation
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
};

export default HeroContent;