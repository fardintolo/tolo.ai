import React from 'react';
import { FileText } from 'lucide-react';
import MetricsList from './MetricsList';
import DownloadButton from './DownloadButton';

const CaseStudy = () => {
  return (
    <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2">Success Story: TechCorp</h3>
          <p className="text-gray-400 mb-4">
            Learn how TechCorp achieved 300% ROI with our AI solutions
          </p>
          <MetricsList />
        </div>
        <FileText className="w-12 h-12 text-blue-500" />
      </div>
      <DownloadButton />
    </div>
  );
};

export default CaseStudy;