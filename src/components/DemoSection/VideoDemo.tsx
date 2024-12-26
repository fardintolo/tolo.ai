import React from 'react';
import { Play } from 'lucide-react';

const VideoDemo = () => {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=2000"
        alt="Platform Demo"
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-full transition group">
        <Play className="w-8 h-8 group-hover:scale-110 transition" />
      </button>
    </div>
  );
};

export default VideoDemo;