import React from 'react';
import { motion } from 'framer-motion';
import useTestimonialCarousel from './useTestimonialCarousel';
import TestimonialCard from './TestimonialCard';
import CarouselControls from './CarouselControls';
import { testimonials } from './data';

const TestimonialCarousel = () => {
  const { currentIndex, currentTestimonial, next, previous, totalSlides } = useTestimonialCarousel();

  return (
    <div>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="mb-8"
      >
        <TestimonialCard testimonial={currentTestimonial} />
      </motion.div>

      <CarouselControls
        onNext={next}
        onPrevious={previous}
        currentIndex={currentIndex}
        totalSlides={totalSlides}
      />
    </div>
  );
};

export default TestimonialCarousel;