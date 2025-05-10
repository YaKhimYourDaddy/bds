import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const CreateListingPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  
  useEffect(() => {
    document.title = 'Đăng tin bất động sản - Batdongsan.com.vn';
    
    // Redirect if not logged in
    if (!isAuthenticated) {
      navigate('/dang-nhap');
    }
  }, [isAuthenticated, navigate]);
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="py-4 px-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold">Đăng tin bất động sản</h2>
          </div>
          
          <div className="p-6">
            <p className="text-center text-gray-600 my-12">
              Tính năng đăng tin đang được phát triển. Vui lòng quay lại sau.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateListingPage;
