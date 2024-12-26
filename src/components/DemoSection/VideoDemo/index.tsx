import React from 'react';
import PlayButton from './PlayButton';

const VideoDemo = () => {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=2000"
        alt="Platform Demo"
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      <PlayButton />
    </div>
  );
};

export default VideoDemo;