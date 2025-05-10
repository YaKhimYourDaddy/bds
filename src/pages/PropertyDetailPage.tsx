import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaShareAlt, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import { UIContext } from '../context/UIContext';
import LoadingSpinner from '../components/common/LoadingSpinner';
import SimilarProperties from '../components/property/SimilarProperties';
import ImageGallery from '../components/property/ImageGallery';
import { formatCurrency, formatArea } from '../utils/formatters';
import { getPropertyById } from '../services/property.service';
import { isPropertyFavorite, addToFavorites, removeFromFavorites } from '../services/user.service';

interface PropertyDetail {
  _id: string;
  title: string;
  description: string;
  price: number;
  priceUnit: string;
  area: number;
  address: string;
  province: string;
  district: string;
  ward?: string;
  street?: string;
  projectName?: string;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  floors?: number;
  direction?: string;
  balconyDirection?: string;
  furniture?: string;
  legalDocuments?: string;
  images: string[];
  status: 'for-sale' | 'for-rent';
  features: string[];
  contactName: string;
  contactPhone: string;
  contactEmail?: string;
  createdAt: string;
  updatedAt: string;
}

const PropertyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated } = useContext(AuthContext);
  const { openLoginModal, openContactModal } = useContext(UIContext);
  
  const [property, setProperty] = useState<PropertyDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'legal'>('overview');
  
  useEffect(() => {
    const fetchProperty = async () => {
      setLoading(true);
      
      if (!id) {
        setError('Invalid property ID');
        setLoading(false);
        return;
      }
      
      try {
        // Fetch property data from API
        const propertyData = await getPropertyById(id).catch(err => {
          console.error('Error fetching property:', err);
          throw new Error('Failed to load property details');
        });
        
        // Check if property is in favorites for authenticated users
        let favoriteStatus = false;
        if (isAuthenticated) {
          favoriteStatus = await isPropertyFavorite(id).catch(() => false);
        }
        
        setProperty(propertyData);
        setIsFavorite(favoriteStatus);
        
        // Set page title
        document.title = propertyData.title + ' - Batdongsan.com.vn';
        
        setLoading(false);
      } catch (error) {
        // If API call fails, try to use mock data as fallback
        console.warn('Falling back to mock data');
        try {
          const mockProperty: PropertyDetail = {
          _id: id || 'property-1',
          title: 'Căn hộ cao cấp 3 phòng ngủ tại Vinhomes Central Park',
          description: `Căn hộ cao cấp Vinhomes Central Park, Tầng cao, View đẹp, full nội thất.
          
Thông tin căn hộ:
- Diện tích: 108m²
- 3 phòng ngủ rộng rãi
- 2 phòng tắm hiện đại
- Phòng khách và bếp thiết kế mở
- Ban công rộng, view công viên và sông Sài Gòn
- Nội thất cao cấp: Sofa, tủ lạnh, máy giặt, máy lạnh, bếp, tủ quần áo,...
          
Tiện ích nội khu:
- Hồ bơi
- Gym, spa
- Sân chơi trẻ em
- Công viên nội khu
- An ninh 24/7
- Siêu thị, nhà hàng
          
Vị trí đắc địa:
- Kết nối thuận tiện đến Quận 1, Thủ Thiêm
- Gần các tiện ích ngoại khu như Landmark 81, siêu thị, trường học quốc tế,...
          
Giấy tờ pháp lý: Sổ hồng đầy đủ, sẵn sàng giao dịch.
          
Giá: 7.5 tỷ (~ 69.4 triệu/m²) - Có thương lượng cho khách thiện chí.
          
Liên hệ ngay để xem nhà!`,
          price: 7500,
          priceUnit: 'billion',
          area: 108,
          address: 'Vinhomes Central Park, Phường 22, Quận Bình Thạnh, TP.HCM',
          province: 'TP.HCM',
          district: 'Quận Bình Thạnh',
          ward: 'Phường 22',
          street: 'Đường Nguyễn Hữu Cảnh',
          projectName: 'Vinhomes Central Park',
          propertyType: 'apartment',
          bedrooms: 3,
          bathrooms: 2,
          floors: 25,
          direction: 'East',
          balconyDirection: 'Southeast',
          furniture: 'Đầy đủ nội thất cao cấp',
          legalDocuments: 'Sổ hồng',
          images: [
            '/images/property-1.jpg',
            '/images/property-2.jpg',
            '/images/property-3.jpg',
            '/images/property-4.jpg',
            '/images/property-5.jpg',
          ],
          status: 'for-sale',
          features: [
            'Hồ bơi',
            'Gym',
            'Sân chơi trẻ em',
            'An ninh 24/7',
            'Công viên',
            'Trung tâm thương mại',
            'Nhà hàng',
            'Trường học'
          ],
          contactName: 'Nguyễn Văn A',
          contactPhone: '0901234567',
          contactEmail: 'nguyenvana@example.com',
          createdAt: '2023-08-15T09:00:00.000Z',
          updatedAt: '2023-08-15T09:00:00.000Z',
        };
        
          setProperty(mockProperty);
          setIsFavorite(false);
          document.title = mockProperty.title + ' - Batdongsan.com.vn';
          setLoading(false);
        } catch (mockError) {
          console.error('Error with fallback data:', mockError);
          setError('Failed to load property details. Please try again later.');
          setLoading(false);
        }
      }
    };
    
    fetchProperty();
  }, [id]);
  
  const handleShowPhone = () => {
    if (!isAuthenticated) {
      openLoginModal();
      return;
    }
    setShowPhone(true);
  };
  
  const handleOpenContactModal = () => {
    if (!isAuthenticated) {
      openLoginModal();
      return;
    }
    if (property) {
      openContactModal(property._id);
    }
  };
  
  const toggleFavorite = async () => {
    if (!isAuthenticated) {
      openLoginModal();
      return;
    }
    
    if (!property) return;
    
    try {
      if (isFavorite) {
        await removeFromFavorites(property._id);
      } else {
        await addToFavorites(property._id);
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Error toggling favorite status:', error);
      // Show error notification if needed
    }
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property?.title,
        text: 'Xem thông tin bất động sản này trên Batdongsan.com.vn',
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Đã sao chép liên kết vào clipboard');
    }
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner size="large" />
      </div>
    );
  }
  
  if (error || !property) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded mb-4">
          {error || 'Không tìm thấy thông tin bất động sản.'}
        </div>
        <Link to="/" className="text-red-600 hover:underline">
          ← Quay lại trang chủ
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-4">
          <Link to="/" className="hover:text-red-600">Trang chủ</Link> &gt;{' '}
          <Link to={`/${property.status === 'for-sale' ? 'nha-dat-ban' : 'nha-dat-cho-thue'}`} className="hover:text-red-600">
            {property.status === 'for-sale' ? 'Nhà đất bán' : 'Nhà đất cho thuê'}
          </Link> &gt;{' '}
          <Link to={`/${property.status === 'for-sale' ? 'nha-dat-ban' : 'nha-dat-cho-thue'}/${property.province}`} className="hover:text-red-600">
            {property.province}
          </Link> &gt;{' '}
          <span className="text-gray-800">{property.district}</span>
        </div>
        
        {/* Property title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {property.title}
        </h1>
        
        {/* Property address */}
        <div className="flex items-center text-gray-600 mb-6">
          <FaMapMarkerAlt className="mr-2 text-red-600" />
          <span>{property.address}</span>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left column - Property details */}
          <div className="lg:w-2/3">
            {/* Image gallery */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <ImageGallery images={property.images} />
            </div>
            
            {/* Main info */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                {/* Price and size overview */}
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex-1 min-w-[200px]">
                    <div className="text-sm text-gray-600 mb-1">Mức giá</div>
                    <div className="text-xl font-bold text-red-600">
                      {formatCurrency(property.price, property.priceUnit)}
                    </div>
                    <div className="text-sm text-gray-600">
                      ~{formatCurrency(property.price * 1000000 / property.area, 'million')}/m²
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-[150px]">
                    <div className="text-sm text-gray-600 mb-1">Diện tích</div>
                    <div className="text-xl font-bold text-gray-900">
                      {formatArea(property.area)}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-[150px]">
                    <div className="text-sm text-gray-600 mb-1">Phòng ngủ</div>
                    <div className="text-xl font-bold text-gray-900">
                      {property.bedrooms} PN
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-[150px]">
                    <div className="text-sm text-gray-600 mb-1">Phòng tắm</div>
                    <div className="text-xl font-bold text-gray-900">
                      {property.bathrooms} PT
                    </div>
                  </div>
                </div>
                
                {/* Tabs */}
                <div className="border-b border-gray-200 mb-6">
                  <div className="flex -mb-px">
                    <button
                      className={`mr-8 py-4 text-sm font-medium border-b-2 ${
                        activeTab === 'overview'
                          ? 'border-red-600 text-red-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                      onClick={() => setActiveTab('overview')}
                    >
                      Tổng quan
                    </button>
                    <button
                      className={`mr-8 py-4 text-sm font-medium border-b-2 ${
                        activeTab === 'features'
                          ? 'border-red-600 text-red-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                      onClick={() => setActiveTab('features')}
                    >
                      Đặc điểm bất động sản
                    </button>
                    <button
                      className={`mr-8 py-4 text-sm font-medium border-b-2 ${
                        activeTab === 'legal'
                          ? 'border-red-600 text-red-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                      onClick={() => setActiveTab('legal')}
                    >
                      Thông tin pháp lý
                    </button>
                  </div>
                </div>
                
                {/* Tab content */}
                {activeTab === 'overview' && (
                  <div className="whitespace-pre-line text-gray-700">
                    {property.description}
                  </div>
                )}
                
                {activeTab === 'features' && (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <div className="w-40 text-gray-600">Loại bất động sản</div>
                        <div className="font-medium text-gray-900">
                          {property.propertyType === 'apartment' ? 'Căn hộ chung cư' :
                            property.propertyType === 'house' ? 'Nhà riêng' :
                            property.propertyType === 'villa' ? 'Biệt thự, liền kề' :
                            property.propertyType === 'commercial' ? 'Nhà mặt phố' :
                            property.propertyType === 'land' ? 'Đất nền' : 'Khác'}
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-40 text-gray-600">Dự án</div>
                        <div className="font-medium text-gray-900">
                          {property.projectName || 'Không thuộc dự án'}
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-40 text-gray-600">Diện tích</div>
                        <div className="font-medium text-gray-900">
                          {formatArea(property.area)}
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-40 text-gray-600">Phòng ngủ</div>
                        <div className="font-medium text-gray-900">
                          {property.bedrooms} phòng
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-40 text-gray-600">Phòng tắm</div>
                        <div className="font-medium text-gray-900">
                          {property.bathrooms} phòng
                        </div>
                      </div>
                      
                      {property.floors && (
                        <div className="flex items-center">
                          <div className="w-40 text-gray-600">Số tầng</div>
                          <div className="font-medium text-gray-900">
                            {property.floors} tầng
                          </div>
                        </div>
                      )}
                      
                      {property.direction && (
                        <div className="flex items-center">
                          <div className="w-40 text-gray-600">Hướng nhà</div>
                          <div className="font-medium text-gray-900">
                            {property.direction === 'East' ? 'Đông' :
                              property.direction === 'West' ? 'Tây' :
                              property.direction === 'South' ? 'Nam' :
                              property.direction === 'North' ? 'Bắc' :
                              property.direction === 'Northeast' ? 'Đông Bắc' :
                              property.direction === 'Northwest' ? 'Tây Bắc' :
                              property.direction === 'Southeast' ? 'Đông Nam' :
                              property.direction === 'Southwest' ? 'Tây Nam' : property.direction}
                          </div>
                        </div>
                      )}
                      
                      {property.balconyDirection && (
                        <div className="flex items-center">
                          <div className="w-40 text-gray-600">Hướng ban công</div>
                          <div className="font-medium text-gray-900">
                            {property.balconyDirection === 'East' ? 'Đông' :
                              property.balconyDirection === 'West' ? 'Tây' :
                              property.balconyDirection === 'South' ? 'Nam' :
                              property.balconyDirection === 'North' ? 'Bắc' :
                              property.balconyDirection === 'Northeast' ? 'Đông Bắc' :
                              property.balconyDirection === 'Northwest' ? 'Tây Bắc' :
                              property.balconyDirection === 'Southeast' ? 'Đông Nam' :
                              property.balconyDirection === 'Southwest' ? 'Tây Nam' : property.balconyDirection}
                          </div>
                        </div>
                      )}
                      
                      {property.furniture && (
                        <div className="flex items-center">
                          <div className="w-40 text-gray-600">Nội thất</div>
                          <div className="font-medium text-gray-900">
                            {property.furniture}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <h4 className="font-medium text-lg mb-3">Tiện ích</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                      {property.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-2">
                            <div className="w-2 h-2 rounded-full bg-red-600"></div>
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeTab === 'legal' && (
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-40 text-gray-600">Giấy tờ pháp lý</div>
                      <div className="font-medium text-gray-900">
                        {property.legalDocuments || 'Đang cập nhật'}
                      </div>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm">
                      <p className="font-medium text-yellow-800">Lưu ý:</p>
                      <p className="text-yellow-700">
                        Thông tin pháp lý được cung cấp bởi người đăng tin. Quý khách nên kiểm tra kỹ
                        các giấy tờ pháp lý trước khi giao dịch.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Similar properties */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold">Bất động sản tương tự</h3>
              </div>
              <div className="p-4">
                <SimilarProperties type={property.status} district={property.district} />
              </div>
            </div>
          </div>
          
          {/* Right column - Contact info */}
          <div className="lg:w-1/3">
            {/* Contact card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 sticky top-20">
              <div className="border-b border-gray-200 p-4">
                <h3 className="text-lg font-semibold">Liên hệ</h3>
              </div>
              
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-600 font-medium text-lg">
                      {property.contactName.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium">{property.contactName}</div>
                    <div className="text-sm text-gray-500">Đăng ngày {new Date(property.createdAt).toLocaleDateString('vi-VN')}</div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="border border-gray-300 rounded-md">
                    <button
                      className="w-full py-3 px-4 flex items-center justify-center text-red-600 font-medium"
                      onClick={handleShowPhone}
                    >
                      <FaPhone className="mr-2" />
                      {showPhone ? property.contactPhone : 'Bấm để hiện số'}
                    </button>
                  </div>
                  
                  <button
                    className="w-full py-3 px-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition"
                    onClick={handleOpenContactModal}
                  >
                    Gửi tin nhắn
                  </button>
                </div>
                
                <div className="flex justify-center space-x-4 pb-2">
                  <button
                    className="flex items-center text-gray-600 hover:text-red-600"
                    onClick={toggleFavorite}
                  >
                    {isFavorite ? (
                      <FaHeart className="text-red-600 mr-1" />
                    ) : (
                      <FaRegHeart className="mr-1" />
                    )}
                    <span className="text-sm">Lưu tin</span>
                  </button>
                  
                  <button
                    className="flex items-center text-gray-600 hover:text-red-600"
                    onClick={handleShare}
                  >
                    <FaShareAlt className="mr-1" />
                    <span className="text-sm">Chia sẻ</span>
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 text-sm text-gray-600">
                <p className="mb-2">
                  <strong className="text-red-600">Lưu ý:</strong> Quý vị đang xem thông tin mô tả bất động sản trên Batdongsan.com.vn
                </p>
                <p>
                  Nếu thấy tin này không chính xác, vui lòng báo cáo vi phạm để được hỗ trợ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
