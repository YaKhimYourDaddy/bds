import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import { formatCurrency, formatArea } from '../../utils/formatters';
import LoadingSpinner from '../common/LoadingSpinner';

interface SimilarPropertiesProps {
  type: 'for-sale' | 'for-rent';
  district: string;
  excludeId?: string;
}

interface Property {
  _id: string;
  title: string;
  price: number;
  priceUnit: string;
  area: number;
  address: string;
  bedrooms: number;
  bathrooms: number;
  images: string[];
}

const SimilarProperties = ({ type, district, excludeId }: SimilarPropertiesProps) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchSimilarProperties = async () => {
      try {
        setLoading(true);
        
        // In a real implementation, we would fetch data from the API
        // For now, we'll use mock data to demonstrate the UI
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Generate mock properties
        const mockProperties: Property[] = Array.from({ length: 4 }, (_, index) => ({
          _id: `similar-property-${index}`,
          title: type === 'for-sale'
            ? `Căn hộ cao cấp ${index + 1} phòng ngủ tại ${district}`
            : `Cho thuê căn hộ ${index + 1} phòng ngủ tại ${district}`,
          price: type === 'for-sale'
            ? Math.floor(Math.random() * 10) + 2 // 2-12 billion
            : Math.floor(Math.random() * 20) + 5, // 5-25 million
          priceUnit: type === 'for-sale' ? 'billion' : 'million',
          area: Math.floor(Math.random() * 100) + 50, // 50-150 sqm
          address: `${district}, TP.HCM`,
          bedrooms: Math.floor(Math.random() * 3) + 1, // 1-3 bedrooms
          bathrooms: Math.floor(Math.random() * 2) + 1, // 1-2 bathrooms
          images: [`/images/property-${(index % 8) + 1}.jpg`],
        }));
        
        setProperties(mockProperties);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching similar properties:', error);
        setError('Failed to load similar properties.');
        setLoading(false);
      }
    };
    
    fetchSimilarProperties();
  }, [type, district, excludeId]);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <LoadingSpinner size="medium" />
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="text-sm text-gray-600">
        {error}
      </div>
    );
  }
  
  if (properties.length === 0) {
    return (
      <div className="text-sm text-gray-600">
        Không tìm thấy bất động sản tương tự.
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {properties.map((property) => (
        <Link
          key={property._id}
          to={`/chi-tiet/${property._id}`}
          className="group flex bg-white border border-gray-200 rounded-md overflow-hidden hover:shadow-md transition"
        >
          {/* Property image */}
          <div className="w-1/3 relative">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Property info */}
          <div className="w-2/3 p-3">
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-red-600 transition mb-2">
              {property.title}
            </h3>
            
            <div className="text-red-600 font-semibold mb-1">
              {formatCurrency(property.price, property.priceUnit)}
            </div>
            
            <div className="flex items-center text-xs text-gray-600 space-x-2">
              <div className="flex items-center">
                <FaRulerCombined className="mr-1" />
                {formatArea(property.area)}
              </div>
              <div className="flex items-center">
                <FaBed className="mr-1" />
                {property.bedrooms}
              </div>
              <div className="flex items-center">
                <FaBath className="mr-1" />
                {property.bathrooms}
              </div>
            </div>
            
            <div className="text-xs text-gray-500 mt-1 truncate">
              {property.address}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SimilarProperties;
