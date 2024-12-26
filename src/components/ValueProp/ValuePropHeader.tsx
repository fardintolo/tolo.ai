import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const ValuePropHeader = () => {
  return (
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-6"
      >
        Why Choose Us?
      </motion.h2>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="group inline-flex items-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
      >
        <Play className="w-5 h-5 mr-2" />
        See How It Works
      </motion.button>
    </div>
  );
};

export default ValuePropHeader;