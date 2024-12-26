import { useState, useCallback } from 'react';
import { testimonials } from './data';

const useTestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % testimonials.length);
  }, []);

  const previous = useCallback(() => {
    setCurrentIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  }, []);

  return {
    currentIndex,
    currentTestimonial: testimonials[currentIndex],
    next,
    previous,
    totalSlides: testimonials.length
  };
};

export default useTestimonialCarousel;