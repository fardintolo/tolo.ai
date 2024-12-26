import React from 'react';

const metrics = [
  { value: '70% reduction in response time' },
  { value: '95% customer satisfaction rate' },
  { value: '$2M annual cost savings' }
];

const MetricsList = () => {
  return (
    <ul className="space-y-2 mb-6">
      {metrics.map((metric, index) => (
        <li key={index} className="flex items-center text-gray-300">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
          {metric.value}
        </li>
      ))}
    </ul>
  );
};

export default MetricsList;