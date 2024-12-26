import React from 'react';
import { Play } from 'lucide-react';

const PlayButton = () => {
  return (
    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-full transition group">
      <Play className="w-8 h-8 group-hover:scale-110 transition" />
    </button>
  );
};

export default PlayButton;