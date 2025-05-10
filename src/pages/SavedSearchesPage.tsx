import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { FaSearch, FaTrashAlt, FaBell, FaBellSlash } from 'react-icons/fa';
import { getSavedSearches, deleteSavedSearch, toggleSavedSearchNotifications } from '../services/user.service';

interface SavedSearch {
  _id: string;
  name: string;
  url: string;
  filters: {
    type: 'for-sale' | 'for-rent';
    province?: string;
    district?: string;
    ward?: string;
    priceRange?: string;
    areaRange?: string;
    bedrooms?: string;
    propertyType?: string;
  };
  notificationsEnabled: boolean;
  createdAt: string;
}

const SavedSearchesPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  
  const [savedSearches, setSavedSearches] = useState<SavedSearch[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    document.title = 'Tìm kiếm đã lưu - Batdongsan.com.vn';
    
    // Redirect if not logged in
    if (!isAuthenticated) {
      navigate('/dang-nhap');
      return;
    }
    
    const fetchSavedSearches = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch real saved searches data from API
        const response = await getSavedSearches();
        
        // If successful, set saved searches
        if (response && Array.isArray(response)) {
          setSavedSearches(response);
        } else {
          // Fallback to empty array if response is not as expected
          setSavedSearches([]);
          
          // For development/testing, use mock data if API returns empty
          if (response && response.length === 0) {
            // This is just fallback mock data for development
            const mockSavedSearches: SavedSearch[] = [
          {
            _id: '1',
            name: 'Căn hộ Quận 2',
            url: '/nha-dat-ban?district=2&propertyType=apartment',
            filters: {
              type: 'for-sale',
              province: 'TP.HCM',
              district: 'Quận 2',
              propertyType: 'apartment',
            },
            notificationsEnabled: true,
            createdAt: '2023-09-15T09:00:00.000Z',
          },
          {
            _id: '2',
            name: 'Nhà riêng dưới 5 tỷ',
            url: '/nha-dat-ban?priceRange=0-5000&propertyType=house',
            filters: {
              type: 'for-sale',
              priceRange: '0-5000',
              propertyType: 'house',
            },
            notificationsEnabled: false,
            createdAt: '2023-09-10T14:30:00.000Z',
          },
          {
            _id: '3',
            name: 'Cho thuê căn hộ Quận 7',
            url: '/nha-dat-cho-thue?district=7&propertyType=apartment',
            filters: {
              type: 'for-rent',
              province: 'TP.HCM',
              district: 'Quận 7',
              propertyType: 'apartment',
            },
            notificationsEnabled: true,
            createdAt: '2023-09-05T08:15:00.000Z',
          },
        ];
        
            setSavedSearches(mockSavedSearches);
          }
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching saved searches:', error);
        setError('Không thể tải tìm kiếm đã lưu. Vui lòng thử lại sau.');
        setLoading(false);
      }
    };
    
    fetchSavedSearches();
  }, [isAuthenticated, navigate]);
  
  const handleDelete = async (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa tìm kiếm này?')) {
      try {
        // Call API to delete saved search
        await deleteSavedSearch(id);
        
        // Update local state
        setSavedSearches(savedSearches.filter(search => search._id !== id));
      } catch (error) {
        console.error('Error deleting saved search:', error);
        alert('Đã có lỗi xảy ra khi xóa tìm kiếm');
      }
    }
  };
  
  const toggleNotifications = async (id: string, currentStatus: boolean) => {
    try {
      // Call API to toggle notifications
      await toggleSavedSearchNotifications(id, !currentStatus);
      
      // Update local state
      setSavedSearches(
        savedSearches.map(search =>
          search._id === id
            ? { ...search, notificationsEnabled: !currentStatus }
            : search
        )
      );
    } catch (error) {
      console.error('Error toggling notifications:', error);
      alert('Đã có lỗi xảy ra khi cập nhật thông báo');
    }
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner size="large" />
      </div>
    );
  }
  
  const formatFilterText = (filters: SavedSearch['filters']) => {
    const parts = [];
    
    if (filters.propertyType) {
      parts.push(
        filters.propertyType === 'apartment' ? 'Căn hộ chung cư' :
        filters.propertyType === 'house' ? 'Nhà riêng' :
        filters.propertyType === 'villa' ? 'Biệt thự, liền kề' :
        filters.propertyType === 'commercial' ? 'Nhà mặt phố' :
        filters.propertyType === 'land' ? 'Đất nền' : 'Loại bất động sản khác'
      );
    }
    
    if (filters.province) {
      parts.push(filters.province);
    }
    
    if (filters.district) {
      parts.push(filters.district);
    }
    
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-');
      if (min && max) {
        parts.push(`${min} - ${max} tỷ`);
      } else if (min) {
        parts.push(`Trên ${min} tỷ`);
      } else if (max) {
        parts.push(`Dưới ${max} tỷ`);
      }
    }
    
    if (filters.areaRange) {
      const [min, max] = filters.areaRange.split('-');
      if (min && max) {
        parts.push(`${min} - ${max} m²`);
      } else if (min) {
        parts.push(`Trên ${min} m²`);
      } else if (max) {
        parts.push(`Dưới ${max} m²`);
      }
    }
    
    if (filters.bedrooms) {
      parts.push(`${filters.bedrooms}+ phòng ngủ`);
    }
    
    return parts.join(' • ');
  };
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="py-4 px-6 border-b border-gray-200">
            <h1 className="text-xl font-semibold">Tìm kiếm đã lưu</h1>
          </div>
          
          <div className="p-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}
            
            {savedSearches.length === 0 ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-500 mb-4">
                  <FaSearch className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Bạn chưa có tìm kiếm nào được lưu
                </h3>
                <p className="text-gray-600 mb-4">
                  Lưu tìm kiếm để nhận thông báo khi có bất động sản mới phù hợp với tiêu chí của bạn
                </p>
                <Link
                  to="/nha-dat-ban"
                  className="px-4 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition"
                >
                  Tìm kiếm ngay
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {savedSearches.map((search) => (
                  <div key={search._id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg">
                          <Link to={search.url} className="text-blue-600 hover:underline">
                            {search.name}
                          </Link>
                        </h3>
                        <p className="text-gray-600 mt-1">
                          {search.filters.type === 'for-sale' ? 'Mua' : 'Thuê'} • {formatFilterText(search.filters)}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                          Đã lưu: {new Date(search.createdAt).toLocaleDateString('vi-VN')}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          className={`p-2 rounded-full ${
                            search.notificationsEnabled
                              ? 'bg-green-100 text-green-600 hover:bg-green-200'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                          onClick={() => toggleNotifications(search._id, search.notificationsEnabled)}
                          title={search.notificationsEnabled ? 'Tắt thông báo' : 'Bật thông báo'}
                        >
                          {search.notificationsEnabled ? <FaBell /> : <FaBellSlash />}
                        </button>
                        <button
                          className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                          onClick={() => handleDelete(search._id)}
                          title="Xóa tìm kiếm"
                        >
                          <FaTrashAlt />
                        </button>
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

export default SavedSearchesPage;
