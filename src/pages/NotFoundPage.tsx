import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Không tìm thấy trang - Batdongsan.com.vn';
  }, []);
  
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-red-600">404</h1>
        <h2 className="mt-6 text-2xl font-medium text-gray-900">Trang không tồn tại</h2>
        <p className="mt-2 text-gray-600">
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
