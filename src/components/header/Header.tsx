import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { UIContext } from '../../context/UIContext';

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const { openLoginModal, openRegisterModal, toggleMobileMenu } = useContext(UIContext);
  
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [keyword, setKeyword] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/tim-kiem?q=${encodeURIComponent(keyword.trim())}`);
    }
  };
  
  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };
  
  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate('/');
  };
  
  return (
    <header className="bg-white shadow-md">
      {/* Top header */}
      <div className="bg-red-600 text-white py-1">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          {/* Contact info */}
          <div className="flex items-center space-x-4 text-sm">
            <a href="tel:+84981234567" className="flex items-center hover:text-gray-200">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              0981234567
            </a>
            <a href="mailto:cskh@batdongsan.com.vn" className="flex items-center hover:text-gray-200">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              cskh@batdongsan.com.vn
            </a>
          </div>
          
          {/* Auth buttons */}
          <div className="flex items-center space-x-4 text-sm">
            {isAuthenticated ? (
              <div className="relative">
                <button 
                  className="flex items-center hover:text-gray-200 focus:outline-none"
                  onClick={toggleUserMenu}
                >
                  <span className="mr-1">{user?.fullName}</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
                    <Link 
                      to="/trang-ca-nhan" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserMenu(false)}
                    >
                      Trang cá nhân
                    </Link>
                    <Link 
                      to="/tin-da-luu" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserMenu(false)}
                    >
                      Tin đã lưu
                    </Link>
                    <Link 
                      to="/tim-kiem-da-luu" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserMenu(false)}
                    >
                      Tìm kiếm đã lưu
                    </Link>
                    <Link 
                      to="/dang-tin" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserMenu(false)}
                    >
                      Đăng tin
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Đăng xuất
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button 
                  className="hover:text-gray-200"
                  onClick={openLoginModal}
                >
                  Đăng nhập
                </button>
                <span className="text-gray-300">|</span>
                <button 
                  className="hover:text-gray-200"
                  onClick={openRegisterModal}
                >
                  Đăng ký
                </button>
              </>
            )}
            
            <Link to="/dang-tin" className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm transition">
              Đăng tin
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/src/assets/logo.png" 
              alt="Batdongsan.com.vn Logo" 
              className="h-10"
              onError={(e) => {
                // Fallback if logo image is not available
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.style.display = 'none';
              }}
            />
            <span className="text-xl font-bold text-red-600">Batdongsan.com.vn</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          
          {/* Search bar - visible only on medium and larger screens */}
          <div className="hidden md:flex flex-1 mx-10">
            <form onSubmit={handleSearch} className="w-full max-w-xl relative">
              <input
                type="text"
                placeholder="Tìm kiếm bất động sản..."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
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
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="bg-gray-100 hidden lg:block">
        <div className="container mx-auto px-4">
          <ul className="flex">
            <li>
              <Link to="/" className="block px-4 py-3 text-gray-700 font-medium hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link to="/nha-dat-ban" className="block px-4 py-3 text-gray-700 font-medium hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition">
                Nhà đất bán
              </Link>
            </li>
            <li>
              <Link to="/nha-dat-cho-thue" className="block px-4 py-3 text-gray-700 font-medium hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition">
                Nhà đất cho thuê
              </Link>
            </li>
            <li>
              <Link to="/du-an-bat-dong-san" className="block px-4 py-3 text-gray-700 font-medium hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition">
                Dự án
              </Link>
            </li>
            <li>
              <Link to="/tin-tuc" className="block px-4 py-3 text-gray-700 font-medium hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition">
                Tin tức
              </Link>
            </li>
            <li>
              <Link to="/wiki" className="block px-4 py-3 text-gray-700 font-medium hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition">
                Wiki BĐS
              </Link>
            </li>
            <li>
              <Link to="/phong-thuy" className="block px-4 py-3 text-gray-700 font-medium hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition">
                Phong thủy
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
