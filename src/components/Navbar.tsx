import React from 'react';
import { Brain } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-white">TOLO.ai</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Mission</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Solutions</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Technology</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;