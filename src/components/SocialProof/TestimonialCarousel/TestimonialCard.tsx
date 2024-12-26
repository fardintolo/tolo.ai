import React from 'react';
import { Star } from 'lucide-react';
import type { Testimonial } from './types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-gray-400">{testimonial.role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-600'}`}
            fill={i < testimonial.rating ? 'currentColor' : 'none'}
          />
        ))}
      </div>
      <p className="text-gray-300">{testimonial.content}</p>
    </div>
  );
};

export default TestimonialCard;