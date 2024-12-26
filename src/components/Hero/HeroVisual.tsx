import React from 'react';
import { motion } from 'framer-motion';

const HeroVisual = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
      <img
        src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&q=80&w=800"
        alt="AI Dashboard"
        className="relative rounded-2xl shadow-2xl border border-gray-800"
      />
      
      {/* Floating elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute -bottom-4 -left-4 bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-xl"
      >
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <span className="text-sm font-medium">AI Assistant Active</span>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute -top-4 -right-4 bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-xl"
      >
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Response Time</span>
          <span className="text-green-500 font-bold">0.3s</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroVisual;