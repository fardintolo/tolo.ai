import React from 'react';
import { Download } from 'lucide-react';

const DownloadButton = () => {
  return (
    <button className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition group">
      <Download className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
      Download Case Study PDF
    </button>
  );
};

export default DownloadButton;