import React from 'react';
import { Link } from 'react-router-dom';

const ProvinceSelector: React.FC = () => {
  // Mock data for popular provinces and their property counts
  const popularProvinces = [
    { id: '1', name: 'TP. Hồ Chí Minh', propertyCount: 68240, slug: 'tp-ho-chi-minh' },
    { id: '2', name: 'Hà Nội', propertyCount: 42156, slug: 'ha-noi' },
    { id: '3', name: 'Đà Nẵng', propertyCount: 8975, slug: 'da-nang' },
    { id: '4', name: 'Bình Dương', propertyCount: 7823, slug: 'binh-duong' },
    { id: '5', name: 'Đồng Nai', propertyCount: 6752, slug: 'dong-nai' },
    { id: '6', name: 'Khánh Hòa', propertyCount: 5324, slug: 'khanh-hoa' },
    { id: '7', name: 'Quảng Nam', propertyCount: 3256, slug: 'quang-nam' },
    { id: '8', name: 'Bà Rịa - Vũng Tàu', propertyCount: 4532, slug: 'ba-ria-vung-tau' },
    { id: '9', name: 'Hải Phòng', propertyCount: 3876, slug: 'hai-phong' },
    { id: '10', name: 'Long An', propertyCount: 2987, slug: 'long-an' },
    { id: '11', name: 'Quảng Ninh', propertyCount: 2765, slug: 'quang-ninh' },
    { id: '12', name: 'Lâm Đồng', propertyCount: 2543, slug: 'lam-dong' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {popularProvinces.map((province) => (
        <Link
          key={province.id}
          to={`/tim-kiem?province=${province.slug}`}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
        >
          <div className="h-32 bg-gray-200 relative">
            {/* We would typically use an image for each province here */}
            <img 
              src={`/src/assets/provinces/${province.slug}.jpg`} 
              alt={province.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to a gradient if image fails to load
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
              }}
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center p-2">
                <h3 className="text-white font-semibold text-lg">{province.name}</h3>
                <p className="text-white text-sm">{province.propertyCount.toLocaleString()} bất động sản</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
      
      {/* View all provinces link */}
      <Link
        to="/danh-sach-tinh-thanh"
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex items-center justify-center h-32"
      >
        <div className="text-center">
          <div className="bg-gray-100 rounded-full p-3 mx-auto mb-2 w-12 h-12 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
            </svg>
          </div>
          <span className="text-gray-800 font-medium">Xem tất cả</span>
        </div>
      </Link>
    </div>
  );
};

export default ProvinceSelector;
