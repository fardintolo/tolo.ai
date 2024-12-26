import React from 'react';
import { motion } from 'framer-motion';
import VideoDemo from './VideoDemo';
import CaseStudy from './CaseStudy';

const DemoSection = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">See the Results for Yourself</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Watch how our platform transforms businesses and explore real success stories from our clients.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <VideoDemo />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <CaseStudy />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;