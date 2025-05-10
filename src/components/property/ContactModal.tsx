import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { UIContext } from '../../context/UIContext';
import axios from 'axios';

interface ContactModalProps {
  propertyId: string;
}

interface PropertyOwner {
  _id: string;
  fullName: string;
  phone: string;
  email: string;
}

interface Property {
  _id: string;
  title: string;
  price: number;
  priceUnit: string;
  address: string;
  images: string[];
  owner: PropertyOwner;
}

const ContactModal = ({ propertyId }: ContactModalProps) => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const { closeContactModal, openLoginModal } = useContext(UIContext);
  
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sendSuccess, setSendSuccess] = useState(false);
  
  // Fetch property details
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        // In a real implementation, we would fetch property data from the API
        // For demonstration, we'll use mock data
        
        // Mock property data
        const mockProperty: Property = {
          _id: propertyId,
          title: 'Căn hộ cao cấp tại Vinhomes Central Park',
          price: 5.5,
          priceUnit: 'billion',
          address: 'Vinhomes Central Park, Bình Thạnh, TP.HCM',
          images: ['/src/assets/property-1.jpg'],
          owner: {
            _id: 'owner123',
            fullName: 'Nguyễn Văn A',
            phone: '0981234567',
            email: 'nguyenvana@example.com'
          }
        };
        
        setProperty(mockProperty);
        
        // Pre-fill form if user is authenticated
        if (isAuthenticated && user) {
          setName(user.fullName);
          setEmail(user.email);
          setPhone(user.phone || '');
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching property details:', error);
        setError('Không thể tải thông tin bất động sản');
        setLoading(false);
      }
    };
    
    fetchProperty();
  }, [propertyId, isAuthenticated, user]);
  
  // Handle contact form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      closeContactModal();
      openLoginModal();
      return;
    }
    
    try {
      // In a real implementation, we would send the contact request to the API
      // For demonstration, we'll simulate a successful request
      
      // Simulating API call delay
      setLoading(true);
      
      setTimeout(() => {
        setSendSuccess(true);
        setLoading(false);
      }, 1000);
      
      // Reset form after successful submission
      setMessage('');
    } catch (error) {
      console.error('Error sending contact request:', error);
      setError('Không thể gửi yêu cầu liên hệ');
      setLoading(false);
    }
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Liên hệ với người bán</h2>
          <button 
            onClick={closeContactModal}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        {/* Body */}
        <div className="p-6">
          {loading ? (
            <div className="text-center p-4">
              <div className="w-10 h-10 border-4 border-gray-200 border-t-red-600 rounded-full animate-spin mx-auto mb-2"></div>
              <p className="text-gray-600">Đang tải...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded mb-4">
              {error}
            </div>
          ) : property ? (
            <>
              {/* Property info */}
              <div className="flex mb-4">
                <div className="w-20 h-20 flex-shrink-0 mr-3 overflow-hidden rounded-md">
                  <img 
                    src={property.images[0] || '/src/assets/property-placeholder.jpg'} 
                    alt={property.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 line-clamp-2">{property.title}</h3>
                  <p className="text-sm text-gray-500">{property.address}</p>
                </div>
              </div>
              
              {/* Owner info */}
              <div className="bg-gray-50 p-3 rounded-md mb-4">
                <p className="font-medium text-gray-900 mb-1">{property.owner.fullName}</p>
                <p className="text-sm text-gray-700 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  {property.owner.phone}
                </p>
                <p className="text-sm text-gray-700 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  {property.owner.email}
                </p>
              </div>
              
              {sendSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded mb-4 text-center">
                  <svg className="w-6 h-6 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <p className="font-medium">Yêu cầu liên hệ đã được gửi thành công!</p>
                  <p className="text-sm mt-1">Người bán sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
                  <button
                    onClick={closeContactModal}
                    className="mt-3 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                  >
                    Đóng
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Họ và tên <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Nhập họ và tên của bạn"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      Số điện thoại <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Nhập số điện thoại của bạn"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Tin nhắn
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Nhập tin nhắn của bạn"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading}
                  >
                    {loading ? 'Đang xử lý...' : 'Gửi yêu cầu liên hệ'}
                  </button>
                </form>
              )}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
