import React from 'react';
import { Bot, Layers, Zap } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Automation',
    description: 'Leverage advanced machine learning to automate complex business processes.'
  },
  {
    icon: Layers,
    title: 'Seamless Integration',
    description: 'Connect with your existing systems and tools without disruption.'
  },
  {
    icon: Zap,
    title: 'Instant Insights',
    description: 'Get real-time analytics and actionable insights for better decision making.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose TOLO.ai?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;