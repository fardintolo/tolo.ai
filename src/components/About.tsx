import React from 'react';
import { Brain, Zap, Network } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Intuitive Visual Interface',
    description: 'Design and deploy AI workflows with our drag-and-drop interface.'
  },
  {
    icon: Zap,
    title: 'Seamless Automation',
    description: 'Connect and automate processes across multiple platforms effortlessly.'
  },
  {
    icon: Network,
    title: 'Advanced AI Capabilities',
    description: 'Leverage cutting-edge machine learning models for intelligent automation.'
  }
];

const About = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Makes TOLO.ai Unique?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-gray-900 rounded-xl hover:bg-gray-900/80 transition"
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

export default About;