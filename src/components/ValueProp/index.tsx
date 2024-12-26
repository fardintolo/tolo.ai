import React from 'react';
import ValuePropHeader from './ValuePropHeader';
import BenefitsList from './BenefitsList';
import { Clock, Link, Calendar } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: '24/7 Customer Support',
    description: 'Round-the-clock AI-powered support for your customers'
  },
  {
    icon: Link,
    title: 'Seamless CRM Integrations',
    description: 'Connect with your existing tools without disruption'
  },
  {
    icon: Calendar,
    title: 'Effortless Appointment Scheduling',
    description: 'Automated booking system that saves time and reduces errors'
  }
];

const ValueProp = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ValuePropHeader />
        <BenefitsList benefits={benefits} />
      </div>
    </section>
  );
};

export default ValueProp;