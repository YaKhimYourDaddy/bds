import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/common/LoadingSpinner';

const ProjectListingPage = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    document.title = 'Dự án bất động sản - Batdongsan.com.vn';
    
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner size="large" />
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Dự án bất động sản</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg mb-4">
          Trang đang được phát triển. Vui lòng quay lại sau.
        </p>
        <Link to="/" className="text-red-600 hover:underline">
          ← Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
};

export default ProjectListingPage;
