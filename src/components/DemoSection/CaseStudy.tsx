import React from 'react';
import { FileText, Download } from 'lucide-react';

const CaseStudy = () => {
  return (
    <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2">Success Story: TechCorp</h3>
          <p className="text-gray-400 mb-4">
            Learn how TechCorp achieved 300% ROI with our AI solutions
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-gray-300">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
              70% reduction in response time
            </li>
            <li className="flex items-center text-gray-300">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
              95% customer satisfaction rate
            </li>
            <li className="flex items-center text-gray-300">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
              $2M annual cost savings
            </li>
          </ul>
        </div>
        <FileText className="w-12 h-12 text-blue-500" />
      </div>
      <button className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition group">
        <Download className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
        Download Case Study PDF
      </button>
    </div>
  );
};

export default CaseStudy;