import { Link } from 'react-router-dom';
import { formatCurrency, formatArea } from '../../utils/formatters';

interface PropertyCardProps {
  property: {
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
  };
  showFavoriteButton?: boolean;
}

const PropertyCard = ({ property, showFavoriteButton = true }: PropertyCardProps) => {
  const {
    _id,
    title,
    price,
    priceUnit,
    area,
    address,
    province,
    district,
    bedrooms,
    bathrooms,
    images,
    status,
    createdAt
  } = property;

  // Determine the URL based on property status
  const detailUrl = status === 'for-sale' 
    ? `/ban-nha-dat/${_id}` 
    : `/cho-thue-nha-dat/${_id}`;
  
  // Get time difference
  const getTimeDifference = (dateString: string) => {
    const now = new Date();
    const createdDate = new Date(dateString);
    const diffTime = Math.abs(now.getTime() - createdDate.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return 'Hôm nay';
    } else if (diffDays === 1) {
      return 'Hôm qua';
    } else if (diffDays < 7) {
      return `${diffDays} ngày trước`;
    } else if (diffDays < 30) {
      return `${Math.floor(diffDays / 7)} tuần trước`;
    } else {
      return `${Math.floor(diffDays / 30)} tháng trước`;
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      {/* Image container */}
      <Link to={detailUrl} className="block relative overflow-hidden h-48">
        {/* Status badge */}
        <div className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white rounded z-10 ${
          status === 'for-sale' ? 'bg-red-600' : 'bg-blue-600'
        }`}>
          {status === 'for-sale' ? 'Bán' : 'Cho thuê'}
        </div>
        
        {/* Time badge */}
        <div className="absolute top-2 right-2 px-2 py-1 text-xs font-semibold bg-gray-800 text-white rounded z-10">
          {getTimeDifference(createdAt)}
        </div>
        
        {/* Favorite button */}
        {showFavoriteButton && (
          <button 
            className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center z-10 hover:bg-gray-100"
            aria-label="Add to favorites"
          >
            <svg 
              className="w-5 h-5 text-gray-600 hover:text-red-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </button>
        )}
        
        {/* Fallback image in case the image array is empty */}
        <img 
          src={images[0] || '/src/assets/property-placeholder.jpg'} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </Link>
      
      {/* Content container */}
      <div className="p-4">
        <Link to={detailUrl} className="block mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 hover:text-red-600 transition">
            {title}
          </h3>
        </Link>
        
        <div className="flex items-center text-gray-600 mb-2">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
          </svg>
          <span className="text-sm truncate">{`${district}, ${province}`}</span>
        </div>
        
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-600 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            <span className="text-sm">{bedrooms} PN</span>
          </div>
          
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-600 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15.414 4a1 1 0 11-1.414 1.414L13.293 4.707 12.586 4A1 1 0 1114 2.586zm0 10a1 1 0 01.707.293l.707.707L15.414 14a1 1 0 11-1.414 1.414l-.707-.707-.707.707A1 1 0 1112.586 14l.707-.707-.707-.707A1 1 0 1114 12.586z" clipRule="evenodd"></path>
            </svg>
            <span className="text-sm">{bathrooms} WC</span>
          </div>
          
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-600 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
            </svg>
            <span className="text-sm">{formatArea(area)} m²</span>
          </div>
        </div>
        
        <div className="border-t pt-3">
          <div className="text-red-600 font-bold text-lg">
            {formatCurrency(price, priceUnit)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
