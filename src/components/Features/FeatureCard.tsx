import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

const FeatureCard = ({ icon: Icon, title, description, benefits }: FeatureCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors"
    >
      <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-500" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center text-sm text-gray-300">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
            {benefit}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FeatureCard;