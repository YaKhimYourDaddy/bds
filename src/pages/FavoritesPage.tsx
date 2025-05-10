import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart, FaTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { formatCurrency, formatArea } from '../utils/formatters';
import { getUserFavorites, removeFromFavorites } from '../services/user.service';
import { Property } from '../services/property.service';

// Use the Property type from the service
interface FavoriteProperty extends Property {
  favoriteId?: string;
}

const FavoritesPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  
  const [favorites, setFavorites] = useState<FavoriteProperty[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    document.title = 'Bất động sản đã lưu - Batdongsan.com.vn';
    
    // Redirect if not logged in
    if (!isAuthenticated) {
      navigate('/dang-nhap');
      return;
    }
    
    const fetchFavorites = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch real favorites data from API
        const response = await getUserFavorites();
        
        // If successful, set favorites
        if (response && Array.isArray(response)) {
          setFavorites(response);
        } else {
          // Fallback to empty array if response is not as expected
          setFavorites([]);
          
          // For development/testing, use mock data if API returns empty
          if (response && response.length === 0) {
            // This is just fallback mock data for development
            const mockFavorites: FavoriteProperty[] = [
          {
            _id: 'property-1',
            title: 'Căn hộ cao cấp 3 phòng ngủ tại Vinhomes Central Park',
            description: 'Căn hộ cao cấp view sông Sài Gòn',
            type: 'apartment',
            price: 7500,
            priceUnit: 'billion',
            area: 108,
            address: 'Quận Bình Thạnh, TP.HCM',
            province: 'TP.HCM',
            district: 'Quận Bình Thạnh',
            ward: 'Phường 22',
            street: 'Nguyễn Hữu Cảnh',
            bedrooms: 3,
            bathrooms: 2,
            contactName: 'Nguyễn Văn A',
            contactPhone: '0123456789',
            contactEmail: 'example@email.com',
            owner: 'user-1',
            images: ['/src/assets/property-1.jpg'],
            status: 'for-sale',
            createdAt: '2023-08-15T09:00:00.000Z',
            updatedAt: '2023-08-15T09:00:00.000Z',
            favoriteId: 'fav-1',
            isVerified: true,
            isPromoted: false,
            features: ['Hồ bơi', 'Gym'],
            views: 245,
            expiryDate: '2024-08-15T09:00:00.000Z'
          },
          {
            _id: 'property-2',
            title: 'Nhà phố mặt tiền đường Nguyễn Văn Linh',
            description: 'Nhà phố thương mại mặt tiền',
            type: 'house',
            price: 12000,
            priceUnit: 'billion',
            area: 150,
            address: 'Quận 7, TP.HCM',
            province: 'TP.HCM',
            district: 'Quận 7',
            ward: 'Tân Phong',
            street: 'Nguyễn Văn Linh',
            bedrooms: 4,
            bathrooms: 3,
            contactName: 'Trần Văn B',
            contactPhone: '0987654321',
            contactEmail: 'example2@email.com',
            owner: 'user-2',
            images: ['/src/assets/property-2.jpg'],
            status: 'for-sale',
            createdAt: '2023-08-10T14:30:00.000Z',
            updatedAt: '2023-08-10T14:30:00.000Z',
            favoriteId: 'fav-2',
            isVerified: true,
            isPromoted: true,
            features: ['Sân vườn', 'Bảo vệ 24/7'],
            views: 350,
            expiryDate: '2024-08-10T14:30:00.000Z' 
          },
          {
            _id: 'property-3',
            title: 'Cho thuê căn hộ 2 phòng ngủ tại The Sun Avenue',
            description: 'Căn hộ đầy đủ nội thất',
            type: 'apartment',
            price: 15,
            priceUnit: 'million',
            area: 76,
            address: 'Quận 2, TP.HCM',
            province: 'TP.HCM',
            district: 'Quận 2',
            ward: 'An Phú',
            street: 'Mai Chí Thọ',
            bedrooms: 2,
            bathrooms: 2,
            contactName: 'Lê Văn C',
            contactPhone: '0909123456',
            contactEmail: 'example3@email.com',
            owner: 'user-3',
            images: ['/src/assets/property-3.jpg'],
            status: 'for-rent',
            createdAt: '2023-08-05T08:15:00.000Z',
            updatedAt: '2023-08-05T08:15:00.000Z',
            favoriteId: 'fav-3',
            isVerified: true,
            isPromoted: false,
            features: ['Hồ bơi', 'Gym', 'Công viên'],
            views: 180,
            expiryDate: '2024-08-05T08:15:00.000Z'
          },
        ];
        
            setFavorites(mockFavorites);
          }
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching favorites:', error);
        setError('Không thể tải danh sách bất động sản đã lưu. Vui lòng thử lại sau.');
        setLoading(false);
      }
    };
    
    fetchFavorites();
  }, [isAuthenticated, navigate]);
  
  const handleRemoveFavorite = async (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa bất động sản này khỏi danh sách đã lưu?')) {
      try {
        // Call API to remove from favorites
        await removeFromFavorites(id);
        
        // Update local state
        setFavorites(favorites.filter(property => property._id !== id));
      } catch (error) {
        console.error('Error removing favorite:', error);
        alert('Đã có lỗi xảy ra khi xóa khỏi danh sách đã lưu');
      }
    }
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner size="large" />
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="py-4 px-6 border-b border-gray-200">
            <h1 className="text-xl font-semibold">Bất động sản đã lưu</h1>
          </div>
          
          <div className="p-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}
            
            {favorites.length === 0 ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-500 mb-4">
                  <FaHeart className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Bạn chưa lưu bất động sản nào
                </h3>
                <p className="text-gray-600 mb-4">
                  Lưu lại các bất động sản yêu thích để dễ dàng xem lại sau này
                </p>
                <div className="flex justify-center gap-4">
                  <Link
                    to="/nha-dat-ban"
                    className="px-4 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition"
                  >
                    Tìm mua
                  </Link>
                  <Link
                    to="/nha-dat-cho-thue"
                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition"
                  >
                    Tìm thuê
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.map((property) => (
                  <div key={property._id} className="border border-gray-200 rounded-lg overflow-hidden group">
                    <div className="relative">
                      <Link to={`/chi-tiet/${property._id}`}>
                        <img
                          src={property.images[0]}
                          alt={property.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full h-16 opacity-60"></div>
                        <div className="absolute bottom-2 left-2 text-white font-semibold">
                          {formatCurrency(property.price, property.priceUnit)}
                        </div>
                      </Link>
                      <button
                        className="absolute top-2 right-2 p-2 rounded-full bg-white text-red-600 hover:bg-red-100 transition"
                        onClick={() => handleRemoveFavorite(property._id)}
                      >
                        <FaTrashAlt size={14} />
                      </button>
                    </div>
                    
                    <div className="p-4">
                      <Link 
                        to={`/chi-tiet/${property._id}`}
                        className="block text-gray-900 font-medium line-clamp-2 mb-2 group-hover:text-red-600 transition"
                      >
                        {property.title}
                      </Link>
                      
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <div>{formatArea(property.area)}</div>
                        <div>{property.bedrooms} PN</div>
                        <div>{property.bathrooms} VS</div>
                      </div>
                      
                      <div className="text-sm text-gray-500 truncate">
                        {property.address}
                      </div>
                      
                      <div className="text-xs text-gray-400 mt-2">
                        Lưu ngày: {new Date(property.createdAt).toLocaleDateString('vi-VN')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
