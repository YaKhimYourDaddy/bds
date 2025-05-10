import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { UIContext } from '../../context/UIContext';

const MobileMenu = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const { toggleMobileMenu, openLoginModal, openRegisterModal } = useContext(UIContext);
  
  const handleLogout = () => {
    logout();
    toggleMobileMenu();
  };
  
  const handleLoginClick = () => {
    openLoginModal();
    toggleMobileMenu();
  };
  
  const handleRegisterClick = () => {
    openRegisterModal();
    toggleMobileMenu();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 lg:hidden">
      <div className="bg-white h-full w-4/5 max-w-sm overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <Link to="/" className="flex items-center space-x-2" onClick={toggleMobileMenu}>
            <span className="text-xl font-bold text-red-600">Batdongsan.com.vn</span>
          </Link>
          <button 
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        {/* Search input */}
        <div className="p-4 border-b">
          <form className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm bất động sản..."
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-3 text-gray-600 hover:text-red-600"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
              </svg>
            </button>
          </form>
        </div>
        
        {/* Authentication section */}
        <div className="p-4 border-b">
          {isAuthenticated ? (
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-700 font-medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
                <span>{user?.fullName}</span>
              </div>
              <Link 
                to="/trang-ca-nhan" 
                className="block px-2 py-1 text-gray-700 hover:text-red-600" 
                onClick={toggleMobileMenu}
              >
                Trang cá nhân
              </Link>
              <Link 
                to="/tin-da-luu" 
                className="block px-2 py-1 text-gray-700 hover:text-red-600" 
                onClick={toggleMobileMenu}
              >
                Tin đã lưu
              </Link>
              <Link 
                to="/tim-kiem-da-luu" 
                className="block px-2 py-1 text-gray-700 hover:text-red-600" 
                onClick={toggleMobileMenu}
              >
                Tìm kiếm đã lưu
              </Link>
              <button 
                onClick={handleLogout}
                className="w-full text-left px-2 py-1 text-gray-700 hover:text-red-600"
              >
                Đăng xuất
              </button>
            </div>
          ) : (
            <div className="flex flex-col space-y-2">
              <button 
                className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
                onClick={handleLoginClick}
              >
                Đăng nhập
              </button>
              <button 
                className="w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition"
                onClick={handleRegisterClick}
              >
                Đăng ký
              </button>
            </div>
          )}
        </div>
        
        {/* Main navigation */}
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link 
                to="/" 
                className="block text-gray-700 font-medium hover:text-red-600 transition" 
                onClick={toggleMobileMenu}
              >
                Trang chủ
              </Link>
            </li>
            <li>
              <Link 
                to="/nha-dat-ban" 
                className="block text-gray-700 font-medium hover:text-red-600 transition" 
                onClick={toggleMobileMenu}
              >
                Nhà đất bán
              </Link>
            </li>
            <li>
              <Link 
                to="/nha-dat-cho-thue" 
                className="block text-gray-700 font-medium hover:text-red-600 transition" 
                onClick={toggleMobileMenu}
              >
                Nhà đất cho thuê
              </Link>
            </li>
            <li>
              <Link 
                to="/du-an-bat-dong-san" 
                className="block text-gray-700 font-medium hover:text-red-600 transition" 
                onClick={toggleMobileMenu}
              >
                Dự án
              </Link>
            </li>
            <li>
              <Link 
                to="/tin-tuc" 
                className="block text-gray-700 font-medium hover:text-red-600 transition" 
                onClick={toggleMobileMenu}
              >
                Tin tức
              </Link>
            </li>
            <li>
              <Link 
                to="/wiki" 
                className="block text-gray-700 font-medium hover:text-red-600 transition" 
                onClick={toggleMobileMenu}
              >
                Wiki BĐS
              </Link>
            </li>
            <li>
              <Link 
                to="/phong-thuy" 
                className="block text-gray-700 font-medium hover:text-red-600 transition" 
                onClick={toggleMobileMenu}
              >
                Phong thủy
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Post property button */}
        <div className="p-4 border-t">
          <Link 
            to="/dang-tin" 
            className="block w-full bg-yellow-500 text-center text-white py-2 rounded-md font-medium hover:bg-yellow-600 transition"
            onClick={toggleMobileMenu}
          >
            Đăng tin
          </Link>
        </div>
        
        {/* Contact info */}
        <div className="p-4 border-t">
          <h3 className="font-medium text-gray-700 mb-2">Liên hệ hỗ trợ</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <a href="tel:+84981234567" className="flex items-center hover:text-red-600">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              0981234567
            </a>
            <a href="mailto:cskh@batdongsan.com.vn" className="flex items-center hover:text-red-600">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              cskh@batdongsan.com.vn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
