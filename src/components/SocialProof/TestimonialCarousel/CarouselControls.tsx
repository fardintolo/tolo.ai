import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  currentIndex: number;
  totalSlides: number;
}

const CarouselControls = ({
  onPrevious,
  onNext,
  currentIndex,
  totalSlides
}: CarouselControlsProps) => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-8">
      <button
        onClick={onPrevious}
        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <div className="flex space-x-2">
        {[...Array(totalSlides)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === currentIndex ? 'bg-blue-500' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
      
      <button
        onClick={onNext}
        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default CarouselControls;