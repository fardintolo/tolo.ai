import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
        >
          TOLO.ai: Transforming Businesses with AI Automation
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Unleash the power of AI-driven automation to streamline your processes, 
          increase efficiency, and achieve unparalleled insights.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition transform hover:scale-105">
            Learn More
          </button>
          <button className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition transform hover:scale-105">
            Start Here
          </button>
        </motion.div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 to-transparent opacity-30"></div>
      </div>
    </div>
  );
};

export default Hero;