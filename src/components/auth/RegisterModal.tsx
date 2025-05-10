import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { UIContext } from '../../context/UIContext';

const RegisterModal = () => {
  const { register, loading, error } = useContext(AuthContext);
  const { closeRegisterModal, openLoginModal } = useContext(UIContext);
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeTermsError, setAgreeTermsError] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setPasswordError('');
    setAgreeTermsError('');
    
    // Validate passwords match
    if (password !== confirmPassword) {
      setPasswordError('Mật khẩu xác nhận không khớp');
      return;
    }
    
    // Validate terms agreement
    if (!agreeTerms) {
      setAgreeTermsError('Bạn phải đồng ý với điều khoản sử dụng');
      return;
    }
    
    // Proceed with registration
    await register({ fullName, email, password, phone });
    
    // Close modal only if registration was successful
    if (!error) {
      closeRegisterModal();
    }
  };
  
  const switchToLogin = () => {
    closeRegisterModal();
    openLoginModal();
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Đăng ký tài khoản</h2>
          <button 
            onClick={closeRegisterModal}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        {/* Body */}
        <div className="p-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Họ và tên <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Nhập họ và tên của bạn"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Nhập email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Số điện thoại
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Nhập số điện thoại của bạn"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Mật khẩu <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Nhập mật khẩu của bạn"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
              <p className="mt-1 text-xs text-gray-500">Mật khẩu phải có ít nhất 6 ký tự</p>
            </div>
            
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Xác nhận mật khẩu <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                  passwordError ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Nhập lại mật khẩu của bạn"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {passwordError && (
                <p className="mt-1 text-xs text-red-600">{passwordError}</p>
              )}
            </div>
            
            <div className="mb-6">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  className={`h-4 w-4 mt-1 text-red-600 focus:ring-red-500 border-gray-300 rounded ${
                    agreeTermsError ? 'border-red-500' : ''
                  }`}
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                />
                <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-700">
                  Tôi đồng ý với <a href="#" className="text-red-600 hover:text-red-800">Điều khoản sử dụng</a> và <a href="#" className="text-red-600 hover:text-red-800">Chính sách bảo mật</a> của Batdongsan.com.vn
                </label>
              </div>
              {agreeTermsError && (
                <p className="mt-1 text-xs text-red-600">{agreeTermsError}</p>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Đang xử lý...' : 'Đăng ký'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Đã có tài khoản?{' '}
              <button
                onClick={switchToLogin}
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Đăng nhập
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
