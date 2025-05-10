import { useState, useEffect, useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { UIContext } from '../../context/UIContext';

interface PropertyFilterProps {
  type: 'for-sale' | 'for-rent';
}

const PropertyFilter = ({ type }: PropertyFilterProps) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { searchFilters, setSearchFilters } = useContext(UIContext);
  
  // Filter states
  const [province, setProvince] = useState(searchParams.get('province') || '');
  const [district, setDistrict] = useState(searchParams.get('district') || '');
  const [ward, setWard] = useState(searchParams.get('ward') || '');
  const [propertyType, setPropertyType] = useState(searchParams.get('propertyType') || '');
  const [priceRange, setPriceRange] = useState(searchParams.get('priceRange') || '');
  const [areaRange, setAreaRange] = useState(searchParams.get('areaRange') || '');
  const [bedrooms, setBedrooms] = useState(searchParams.get('bedrooms') || '');
  const [bathrooms, setBathrooms] = useState(searchParams.get('bathrooms') || '');
  const [direction, setDirection] = useState(searchParams.get('direction') || '');
  
  // Mock data for dropdowns
  const provinces = [
    { id: '1', name: 'TP. Hồ Chí Minh' },
    { id: '2', name: 'Hà Nội' },
    { id: '3', name: 'Đà Nẵng' },
    { id: '4', name: 'Bình Dương' },
    { id: '5', name: 'Đồng Nai' },
    { id: '6', name: 'Bà Rịa - Vũng Tàu' },
    { id: '7', name: 'Hải Phòng' },
    { id: '8', name: 'Long An' },
  ];
  
  const districts = [
    { id: '1', provinceId: '1', name: 'Quận 1' },
    { id: '2', provinceId: '1', name: 'Quận 2' },
    { id: '3', provinceId: '1', name: 'Quận 3' },
    { id: '4', provinceId: '1', name: 'Quận 4' },
    { id: '5', provinceId: '1', name: 'Quận 5' },
    { id: '6', provinceId: '1', name: 'Quận 6' },
    { id: '7', provinceId: '1', name: 'Quận 7' },
    { id: '8', provinceId: '1', name: 'Quận 8' },
    // Districts for Hanoi
    { id: '9', provinceId: '2', name: 'Ba Đình' },
    { id: '10', provinceId: '2', name: 'Hoàn Kiếm' },
    { id: '11', provinceId: '2', name: 'Tây Hồ' },
    { id: '12', provinceId: '2', name: 'Long Biên' },
    { id: '13', provinceId: '2', name: 'Cầu Giấy' },
    { id: '14', provinceId: '2', name: 'Đống Đa' },
    { id: '15', provinceId: '2', name: 'Hai Bà Trưng' },
    { id: '16', provinceId: '2', name: 'Hoàng Mai' },
  ];
  
  const wards = [
    { id: '1', districtId: '1', name: 'Phường Bến Nghé' },
    { id: '2', districtId: '1', name: 'Phường Bến Thành' },
    { id: '3', districtId: '1', name: 'Phường Cô Giang' },
    { id: '4', districtId: '1', name: 'Phường Cầu Kho' },
    { id: '5', districtId: '1', name: 'Phường Cầu Ông Lãnh' },
    { id: '6', districtId: '1', name: 'Phường Nguyễn Cư Trinh' },
    { id: '7', districtId: '1', name: 'Phường Nguyễn Thái Bình' },
    { id: '8', districtId: '1', name: 'Phường Phạm Ngũ Lão' },
  ];
  
  const propertyTypes = [
    { id: 'apartment', name: 'Căn hộ chung cư' },
    { id: 'house', name: 'Nhà riêng' },
    { id: 'villa', name: 'Nhà biệt thự, liền kề' },
    { id: 'commercial', name: 'Nhà mặt phố' },
    { id: 'land', name: 'Đất nền' },
    { id: 'project', name: 'Đất nền dự án' },
    { id: 'farm', name: 'Trang trại, khu nghỉ dưỡng' },
    { id: 'warehouse', name: 'Kho, nhà xưởng' },
    { id: 'other', name: 'Loại bất động sản khác' },
  ];
  
  const priceRangesForSale = [
    { id: '', name: 'Tất cả mức giá' },
    { id: '0-500', name: 'Dưới 500 triệu' },
    { id: '500-800', name: '500 - 800 triệu' },
    { id: '800-1000', name: '800 triệu - 1 tỷ' },
    { id: '1000-2000', name: '1 - 2 tỷ' },
    { id: '2000-3000', name: '2 - 3 tỷ' },
    { id: '3000-5000', name: '3 - 5 tỷ' },
    { id: '5000-7000', name: '5 - 7 tỷ' },
    { id: '7000-10000', name: '7 - 10 tỷ' },
    { id: '10000-20000', name: '10 - 20 tỷ' },
    { id: '20000-30000', name: '20 - 30 tỷ' },
    { id: '30000-', name: 'Trên 30 tỷ' },
  ];
  
  const priceRangesForRent = [
    { id: '', name: 'Tất cả mức giá' },
    { id: '0-3', name: 'Dưới 3 triệu' },
    { id: '3-5', name: '3 - 5 triệu' },
    { id: '5-7', name: '5 - 7 triệu' },
    { id: '7-10', name: '7 - 10 triệu' },
    { id: '10-15', name: '10 - 15 triệu' },
    { id: '15-20', name: '15 - 20 triệu' },
    { id: '20-30', name: '20 - 30 triệu' },
    { id: '30-40', name: '30 - 40 triệu' },
    { id: '40-70', name: '40 - 70 triệu' },
    { id: '70-100', name: '70 - 100 triệu' },
    { id: '100-', name: 'Trên 100 triệu' },
  ];
  
  const areaRanges = [
    { id: '', name: 'Tất cả diện tích' },
    { id: '0-30', name: 'Dưới 30 m²' },
    { id: '30-50', name: '30 - 50 m²' },
    { id: '50-80', name: '50 - 80 m²' },
    { id: '80-100', name: '80 - 100 m²' },
    { id: '100-150', name: '100 - 150 m²' },
    { id: '150-200', name: '150 - 200 m²' },
    { id: '200-250', name: '200 - 250 m²' },
    { id: '250-300', name: '250 - 300 m²' },
    { id: '300-500', name: '300 - 500 m²' },
    { id: '500-', name: 'Trên 500 m²' },
  ];
  
  const bedroomOptions = [
    { id: '', name: 'Tất cả' },
    { id: '1', name: '1+' },
    { id: '2', name: '2+' },
    { id: '3', name: '3+' },
    { id: '4', name: '4+' },
    { id: '5', name: '5+' },
  ];
  
  const bathroomOptions = [
    { id: '', name: 'Tất cả' },
    { id: '1', name: '1+' },
    { id: '2', name: '2+' },
    { id: '3', name: '3+' },
    { id: '4', name: '4+' },
  ];
  
  const directionOptions = [
    { id: '', name: 'Tất cả hướng' },
    { id: 'East', name: 'Đông' },
    { id: 'West', name: 'Tây' },
    { id: 'South', name: 'Nam' },
    { id: 'North', name: 'Bắc' },
    { id: 'Northeast', name: 'Đông Bắc' },
    { id: 'Northwest', name: 'Tây Bắc' },
    { id: 'Southeast', name: 'Đông Nam' },
    { id: 'Southwest', name: 'Tây Nam' },
  ];
  
  // Reset district and ward when province changes
  useEffect(() => {
    setDistrict('');
    setWard('');
  }, [province]);
  
  // Reset ward when district changes
  useEffect(() => {
    setWard('');
  }, [district]);
  
  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProvince(e.target.value);
  };
  
  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDistrict(e.target.value);
  };
  
  const handleWardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setWard(e.target.value);
  };
  
  const handleReset = () => {
    setProvince('');
    setDistrict('');
    setWard('');
    setPropertyType('');
    setPriceRange('');
    setAreaRange('');
    setBedrooms('');
    setBathrooms('');
    setDirection('');
  };
  
  const handleSearch = () => {
    // Build query parameters
    const params = new URLSearchParams();
    
    if (province) params.set('province', province);
    if (district) params.set('district', district);
    if (ward) params.set('ward', ward);
    if (propertyType) params.set('propertyType', propertyType);
    if (priceRange) params.set('priceRange', priceRange);
    if (areaRange) params.set('areaRange', areaRange);
    if (bedrooms) params.set('bedrooms', bedrooms);
    if (bathrooms) params.set('bathrooms', bathrooms);
    if (direction) params.set('direction', direction);
    
    // Update search filters in context
    setSearchFilters({
      province,
      district,
      ward,
      type: propertyType,
      priceRange,
      areaRange,
      bedrooms,
      bathrooms,
      direction,
    });
    
    // Navigate to the search results page with filters
    navigate(`?${params.toString()}`);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Bộ lọc tìm kiếm</h3>
      
      <div className="space-y-4">
        {/* Location selects */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tỉnh, thành phố
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={province}
            onChange={handleProvinceChange}
          >
            <option value="">Tất cả tỉnh, thành</option>
            {provinces.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Quận, huyện
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={district}
            onChange={handleDistrictChange}
            disabled={!province}
          >
            <option value="">Tất cả quận, huyện</option>
            {districts
              .filter((d) => d.provinceId === province)
              .map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phường, xã
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={ward}
            onChange={handleWardChange}
            disabled={!district}
          >
            <option value="">Tất cả phường, xã</option>
            {wards
              .filter((w) => w.districtId === district)
              .map((w) => (
                <option key={w.id} value={w.id}>
                  {w.name}
                </option>
              ))}
          </select>
        </div>
        
        {/* Property type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Loại bất động sản
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">Tất cả loại bất động sản</option>
            {propertyTypes.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>
        
        {/* Price range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mức giá
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            {(type === 'for-sale' ? priceRangesForSale : priceRangesForRent).map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        
        {/* Area range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Diện tích
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={areaRange}
            onChange={(e) => setAreaRange(e.target.value)}
          >
            {areaRanges.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
        </div>
        
        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Số phòng ngủ
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          >
            {bedroomOptions.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </div>
        
        {/* Bathrooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Số phòng tắm
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
          >
            {bathroomOptions.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </div>
        
        {/* Direction */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Hướng nhà
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
          >
            {directionOptions.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
        
        {/* Action buttons */}
        <div className="flex space-x-2 pt-2">
          <button
            onClick={handleSearch}
            className="flex-1 py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition"
          >
            Tìm kiếm
          </button>
          <button
            onClick={handleReset}
            className="flex-1 py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition"
          >
            Đặt lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilter;
