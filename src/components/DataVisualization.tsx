import React from 'react';
import { motion } from 'framer-motion';

const DataVisualization = () => {
  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Powerful Analytics at Scale</h2>
            <div className="space-y-8">
              <div className="flex items-center">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1.5 }}
                  className="h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                />
                <span className="ml-4 text-3xl font-bold">150+</span>
              </div>
              <p className="text-gray-400">Successful Deployments</p>
              
              <div className="flex items-center">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1.5 }}
                  className="h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                />
                <span className="ml-4 text-3xl font-bold">16B+</span>
              </div>
              <p className="text-gray-400">Data Points Processed Annually</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              alt="Data Visualization"
              className="rounded-lg shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataVisualization;