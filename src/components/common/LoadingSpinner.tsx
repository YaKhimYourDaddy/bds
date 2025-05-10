import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'white';
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  color = 'primary',
  fullScreen = false 
}) => {
  let sizeClass = 'w-8 h-8';
  if (size === 'small') sizeClass = 'w-5 h-5';
  if (size === 'large') sizeClass = 'w-12 h-12';

  let colorClass = 'text-red-600';
  if (color === 'secondary') colorClass = 'text-blue-600';
  if (color === 'white') colorClass = 'text-white';

  const containerClass = fullScreen 
    ? 'fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50' 
    : 'flex items-center justify-center';

  return (
    <div className={containerClass}>
      <div className={`${sizeClass} ${colorClass} animate-spin`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          ></circle>
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default LoadingSpinner;
