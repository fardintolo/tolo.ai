import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  { name: 'Company 1', logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=50&q=80&fit=crop' },
  { name: 'Company 2', logo: 'https://images.unsplash.com/photo-1611162616305-c69b3037c7ff?w=100&h=50&q=80&fit=crop' },
  { name: 'Company 3', logo: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=100&h=50&q=80&fit=crop' },
  { name: 'Company 4', logo: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=100&h=50&q=80&fit=crop' },
];

const CompanyLogos = () => {
  return (
    <div className="mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        {companies.map((company, index) => (
          <motion.div
            key={company.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex justify-center"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-12 object-contain opacity-50 hover:opacity-100 transition-opacity"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;