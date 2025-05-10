import { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { UIContext } from '../context/UIContext';
import PropertyCard from '../components/property/PropertyCard';
import PropertyFilter from '../components/property/PropertyFilter';
import LoadingSpinner from '../components/common/LoadingSpinner';
import axios from 'axios';

interface PropertyListingPageProps {
  type?: 'for-sale' | 'for-rent';
}

interface Property {
  _id: string;
  title: string;
  price: number;
  priceUnit: string;
  area: number;
  address: string;
  province: string;
  district: string;
  ward?: string;
  bedrooms: number;
  bathrooms: number;
  images: string[];
  status: string;
  createdAt: string;
}

interface Pagination {
  total: number;
  page: number;
  limit: number;
  pages: number;
}

const PropertyListingPage = ({ type = 'for-sale' }: PropertyListingPageProps) => {
  const [searchParams] = useSearchParams();
  const { searchFilters } = useContext(UIContext);
  
  const [properties, setProperties] = useState<Property[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    total: 0,
    page: 1,
    limit: 12,
    pages: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState('date_desc');
  const [showFilters, setShowFilters] = useState(false);
  
  // Get filters from URL and context
  const province = searchParams.get('province') || searchFilters.province;
  const district = searchParams.get('district') || searchFilters.district;
  const priceRange = searchParams.get('priceRange') || searchFilters.priceRange;
  const areaRange = searchParams.get('areaRange') || searchFilters.areaRange;
  const bedrooms = searchParams.get('bedrooms') || searchFilters.bedrooms;
  const propertyType = searchParams.get('propertyType') || searchFilters.type;
  const keyword = searchParams.get('keyword') || searchFilters.keyword;
  const page = parseInt(searchParams.get('page') || '1');
  
  // Set page title based on type
  useEffect(() => {
    document.title = type === 'for-sale' 
      ? 'Nhà đất bán mới nhất - Batdongsan.com.vn'
      : 'Nhà đất cho thuê mới nhất - Batdongsan.com.vn';
  }, [type]);
  
  // Fetch properties
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        
        // In a real implementation, we would fetch data from the API with all filters
        // For now, we'll use mock data to demonstrate the UI
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Generate mock properties based on type
        const mockProperties: Property[] = Array.from({ length: 20 }, (_, index) => ({
          _id: `property-${index}`,
          title: type === 'for-sale'
            ? `Căn hộ cao cấp ${index + 1} phòng ngủ tại ${district || 'Quận 1'}, ${province || 'TP.HCM'}`
            : `Cho thuê căn hộ ${index + 1} phòng ngủ tại ${district || 'Quận 1'}, ${province || 'TP.HCM'}`,
          price: type === 'for-sale'
            ? Math.floor(Math.random() * 10) + 2 // 2-12 billion
            : Math.floor(Math.random() * 20) + 5, // 5-25 million
          priceUnit: type === 'for-sale' ? 'billion' : 'million',
          area: Math.floor(Math.random() * 100) + 50, // 50-150 sqm
          address: `${district || 'Quận 1'}, ${province || 'TP.HCM'}`,
          province: province || 'TP.HCM',
          district: district || 'Quận 1',
          ward: 'Phường Bến Nghé',
          bedrooms: Math.floor(Math.random() * 3) + 1, // 1-3 bedrooms
          bathrooms: Math.floor(Math.random() * 2) + 1, // 1-2 bathrooms
          images: [`/src/assets/property-${(index % 8) + 1}.jpg`],
          status: type,
          createdAt: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString()
        }));
        
        setProperties(mockProperties);
        setPagination({
          total: 235, // Mock total
          page: page,
          limit: 12,
          pages: 20
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setError('Failed to load properties. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchProperties();
  }, [type, province, district, priceRange, areaRange, bedrooms, propertyType, keyword, page, sortOption]);
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  // Get page title based on filters
  const getPageTitle = () => {
    if (province && district) {
      return `Nhà đất ${type === 'for-sale' ? 'bán' : 'cho thuê'} tại ${district}, ${province}`;
    } else if (province) {
      return `Nhà đất ${type === 'for-sale' ? 'bán' : 'cho thuê'} tại ${province}`;
    } else {
      return `Nhà đất ${type === 'for-sale' ? 'bán' : 'cho thuê'} mới nhất`;
    }
  };
  
  return (
    <div className="bg-gray-50 py-6">
      <div className="container mx-auto px-4">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{getPageTitle()}</h1>
          <p className="text-gray-600">
            {pagination.total.toLocaleString()} bất động sản
          </p>
        </div>
        
        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters sidebar - desktop */}
          <div className="hidden lg:block w-1/4">
            <PropertyFilter type={type} />
          </div>
          
          {/* Property listings */}
          <div className="lg:w-3/4">
            {/* Mobile filter toggle */}
            <div className="lg:hidden mb-4">
              <button
                onClick={toggleFilters}
                className="w-full py-2 px-4 bg-white border border-gray-300 rounded-md shadow-sm flex items-center justify-center text-gray-700 hover:bg-gray-50 transition"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                </svg>
                Lọc kết quả
              </button>
            </div>
            
            {/* Mobile filters */}
            {showFilters && (
              <div className="lg:hidden mb-6">
                <PropertyFilter type={type} />
              </div>
            )}
            
            {/* Sort options */}
            <div className="flex justify-between items-center mb-4 bg-white p-3 border border-gray-200 rounded-md">
              <div className="flex items-center">
                <span className="text-gray-700 mr-2">Sắp xếp:</span>
                <select
                  className="border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={sortOption}
                  onChange={handleSortChange}
                >
                  <option value="date_desc">Tin mới nhất</option>
                  <option value="price_asc">Giá thấp đến cao</option>
                  <option value="price_desc">Giá cao đến thấp</option>
                  <option value="area_asc">Diện tích bé đến lớn</option>
                  <option value="area_desc">Diện tích lớn đến bé</option>
                </select>
              </div>
              <div className="text-gray-600 text-sm">
                Hiển thị {((pagination.page - 1) * pagination.limit) + 1}-{Math.min(pagination.page * pagination.limit, pagination.total)} / {pagination.total.toLocaleString()}
              </div>
            </div>
            
            {/* Properties grid */}
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <LoadingSpinner size="large" />
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded mb-4">
                {error}
              </div>
            ) : properties.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Không tìm thấy bất động sản</h3>
                <p className="text-gray-600">
                  Không có bất động sản nào phù hợp với tiêu chí tìm kiếm của bạn.
                  <br />
                  Vui lòng thử lại với các bộ lọc khác.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {properties.map((property) => (
                    <PropertyCard key={property._id} property={property} />
                  ))}
                </div>
                
                {/* Pagination */}
                {pagination.pages > 1 && (
                  <div className="flex justify-center">
                    <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      {/* Previous page */}
                      <a
                        href={`?page=${Math.max(1, pagination.page - 1)}`}
                        className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
                          pagination.page === 1 ? 'cursor-not-allowed opacity-50' : ''
                        }`}
                      >
                        <span className="sr-only">Previous</span>
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </a>
                      
                      {/* Page numbers */}
                      {Array.from({ length: Math.min(5, pagination.pages) }, (_, i) => {
                        // Calculate page numbers to show
                        let pageNum;
                        if (pagination.pages <= 5) {
                          pageNum = i + 1;
                        } else if (pagination.page <= 3) {
                          pageNum = i + 1;
                        } else if (pagination.page >= pagination.pages - 2) {
                          pageNum = pagination.pages - 4 + i;
                        } else {
                          pageNum = pagination.page - 2 + i;
                        }
                        
                        return (
                          <a
                            key={i}
                            href={`?page=${pageNum}`}
                            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                              pageNum === pagination.page
                                ? 'z-10 bg-red-50 border-red-500 text-red-600'
                                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                            }`}
                          >
                            {pageNum}
                          </a>
                        );
                      })}
                      
                      {/* Next page */}
                      <a
                        href={`?page=${Math.min(pagination.pages, pagination.page + 1)}`}
                        className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
                          pagination.page === pagination.pages ? 'cursor-not-allowed opacity-50' : ''
                        }`}
                      >
                        <span className="sr-only">Next</span>
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </nav>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListingPage;
