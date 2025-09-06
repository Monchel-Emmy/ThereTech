import React from 'react';

export const ServiceSkeleton = () => (
  <div className="service-card animate-pulse">
    <div className="bg-gray-300 h-16 w-16 rounded-full mx-auto mb-4"></div>
    <div className="bg-gray-300 h-6 w-3/4 mx-auto mb-2 rounded"></div>
    <div className="bg-gray-300 h-4 w-full mb-2 rounded"></div>
    <div className="bg-gray-300 h-4 w-2/3 mx-auto rounded"></div>
  </div>
);

export const ProjectSkeleton = () => (
  <div className="project-card animate-pulse">
    <div className="bg-gray-300 h-48 w-full mb-4 rounded"></div>
    <div className="bg-gray-300 h-6 w-3/4 mb-2 rounded"></div>
    <div className="bg-gray-300 h-4 w-full mb-2 rounded"></div>
    <div className="bg-gray-300 h-4 w-2/3 rounded"></div>
  </div>
);

export const StatsSkeleton = () => (
  <div className="stat-item animate-pulse">
    <div className="bg-gray-300 h-12 w-12 rounded-full mx-auto mb-2"></div>
    <div className="bg-gray-300 h-8 w-16 mx-auto mb-1 rounded"></div>
    <div className="bg-gray-300 h-4 w-24 mx-auto rounded"></div>
  </div>
);
