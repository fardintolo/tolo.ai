import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold mb-4">Trusted by Leading Businesses</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Join thousands of companies using our AI-powered solutions to transform their customer experience
      </p>
    </motion.div>
  );
}

export default SectionHeader;