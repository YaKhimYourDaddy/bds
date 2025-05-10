import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-300px)] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">Page Not Found</h2>
        <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <Link 
            to="/" 
            className="inline-flex items-center px-5 py-2.5 rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
          >
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="inline-flex items-center px-5 py-2.5 rounded-md text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;