import React from 'react';
import { motion } from 'framer-motion';
import BenefitCard from './BenefitCard';
import type { BenefitProps } from './types';

interface BenefitsListProps {
  benefits: BenefitProps[];
}

const BenefitsList = ({ benefits }: BenefitsListProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <BenefitCard {...benefit} />
        </motion.div>
      ))}
    </div>
  );
};

export default BenefitsList;