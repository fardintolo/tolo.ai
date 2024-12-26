import React from 'react';
import { ShoppingBag, Heart, LineChart, Store } from 'lucide-react';

const industries = [
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description: 'Automate inventory, optimize pricing, and enhance customer experience.'
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Streamline patient care and improve operational efficiency.'
  },
  {
    icon: LineChart,
    title: 'Finance',
    description: 'Automate risk assessment and enhance decision-making processes.'
  },
  {
    icon: Store,
    title: 'Retail',
    description: 'Optimize inventory management and personalize customer interactions.'
  }
];

const Applications = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Revolutionize Every Industry
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2"
            >
              <industry.icon className="w-12 h-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;