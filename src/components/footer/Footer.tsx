import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="/src/assets/logo-white.png" 
                alt="Batdongsan.com.vn Logo" 
                className="h-10"
                onError={(e) => {
                  // Fallback if logo image is not available
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.style.display = 'none';
                }}
              />
              <span className="text-xl font-bold text-white">Batdongsan.com.vn</span>
            </Link>
            <p className="mb-4">
              Batdongsan.com.vn là nền tảng bất động sản uy tín tại Việt Nam dành cho những người đang tìm kiếm bất động sản để ở hoặc đầu tư. Chúng tôi cung cấp dữ liệu tin rao lớn với đa dạng loại hình bất động sản giúp bạn có những lựa chọn phù hợp nhất.
            </p>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition">Trang chủ</Link>
              </li>
              <li>
                <Link to="/nha-dat-ban" className="hover:text-white transition">Nhà đất bán</Link>
              </li>
              <li>
                <Link to="/nha-dat-cho-thue" className="hover:text-white transition">Nhà đất cho thuê</Link>
              </li>
              <li>
                <Link to="/du-an-bat-dong-san" className="hover:text-white transition">Dự án</Link>
              </li>
              <li>
                <Link to="/tin-tuc" className="hover:text-white transition">Tin tức</Link>
              </li>
              <li>
                <Link to="/wiki" className="hover:text-white transition">Wiki BĐS</Link>
              </li>
            </ul>
          </div>
          
          {/* About us */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Về chúng tôi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/gioi-thieu" className="hover:text-white transition">Giới thiệu</Link>
              </li>
              <li>
                <Link to="/bao-gia-quang-cao" className="hover:text-white transition">Báo giá quảng cáo</Link>
              </li>
              <li>
                <Link to="/tuyen-dung" className="hover:text-white transition">Tuyển dụng</Link>
              </li>
              <li>
                <Link to="/quy-che-hoat-dong" className="hover:text-white transition">Quy chế hoạt động</Link>
              </li>
              <li>
                <Link to="/dieu-khoan-su-dung" className="hover:text-white transition">Điều khoản sử dụng</Link>
              </li>
              <li>
                <Link to="/chinh-sach-bao-mat" className="hover:text-white transition">Chính sách bảo mật</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                <span>Tầng 31, Keangnam Landmark, Phạm Hùng, Nam Từ Liêm, Hà Nội</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>0981234567</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>cskh@batdongsan.com.vn</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-white text-sm font-semibold mb-2">Tải ứng dụng</h4>
              <div className="flex space-x-2">
                <a 
                  href="https://apps.apple.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="/src/assets/app-store.png" 
                    alt="App Store" 
                    className="h-10"
                    onError={(e) => {
                      // Fallback if image is not available
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.style.display = 'none';
                    }}
                  />
                </a>
                <a 
                  href="https://play.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="/src/assets/google-play.png" 
                    alt="Google Play" 
                    className="h-10"
                    onError={(e) => {
                      // Fallback if image is not available
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.style.display = 'none';
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom footer */}
      <div className="bg-gray-900 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Batdongsan.com.vn - All Rights Reserved.</p>
          <p className="mt-2 text-sm">
            Giấy phép ĐKKD số: 0123456789 do Sở KH & ĐT TP. Hà Nội cấp ngày 01/01/2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
