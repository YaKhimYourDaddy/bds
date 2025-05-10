import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UIContext } from '../../context/UIContext';

const SearchBar = () => {
  const navigate = useNavigate();
  const { searchFilters, updateSearchFilter } = useContext(UIContext);
  
  const [activeTab, setActiveTab] = useState('for-sale');
  const [keyword, setKeyword] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [areaRange, setAreaRange] = useState('');
  
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
  
  const propertyTypes = [
    { id: '1', name: 'Căn hộ chung cư' },
    { id: '2', name: 'Nhà riêng' },
    { id: '3', name: 'Nhà biệt thự, liền kề' },
    { id: '4', name: 'Nhà mặt phố' },
    { id: '5', name: 'Đất nền' },
    { id: '6', name: 'Đất nền dự án' },
    { id: '7', name: 'Trang trại, khu nghỉ dưỡng' },
    { id: '8', name: 'Kho, nhà xưởng' },
    { id: '9', name: 'Khác' },
  ];
  
  const priceRanges = [
    { id: '1', name: 'Tất cả mức giá' },
    { id: '2', name: 'Dưới 500 triệu' },
    { id: '3', name: '500 - 800 triệu' },
    { id: '4', name: '800 triệu - 1 tỷ' },
    { id: '5', name: '1 - 2 tỷ' },
    { id: '6', name: '2 - 3 tỷ' },
    { id: '7', name: '3 - 5 tỷ' },
    { id: '8', name: '5 - 7 tỷ' },
    { id: '9', name: '7 - 10 tỷ' },
    { id: '10', name: '10 - 20 tỷ' },
    { id: '11', name: '20 - 30 tỷ' },
    { id: '12', name: 'Trên 30 tỷ' },
  ];
  
  const areaRanges = [
    { id: '1', name: 'Tất cả diện tích' },
    { id: '2', name: 'Dưới 30 m²' },
    { id: '3', name: '30 - 50 m²' },
    { id: '4', name: '50 - 80 m²' },
    { id: '5', name: '80 - 100 m²' },
    { id: '6', name: '100 - 150 m²' },
    { id: '7', name: '150 - 200 m²' },
    { id: '8', name: '200 - 250 m²' },
    { id: '9', name: '250 - 300 m²' },
    { id: '10', name: '300 - 500 m²' },
    { id: '11', name: 'Trên 500 m²' },
  ];
  
  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProvince = e.target.value;
    setProvince(selectedProvince);
    setDistrict(''); // Reset district when province changes
  };
  
  const handleSearch = () => {
    // Update the search filters in the context
    updateSearchFilter('status', activeTab);
    updateSearchFilter('keyword', keyword);
    updateSearchFilter('province', province);
    updateSearchFilter('district', district);
    updateSearchFilter('type', propertyType);
    updateSearchFilter('priceRange', priceRange);
    updateSearchFilter('areaRange', areaRange);
    
    // Redirect to the search results page
    navigate('/tim-kiem');
  };
  
  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b">
        <button
          className={`flex-1 py-3 px-4 text-center font-medium text-sm focus:outline-none ${
            activeTab === 'for-sale'
              ? 'text-red-600 border-b-2 border-red-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => setActiveTab('for-sale')}
        >
          Nhà đất bán
        </button>
        <button
          className={`flex-1 py-3 px-4 text-center font-medium text-sm focus:outline-none ${
            activeTab === 'for-rent'
              ? 'text-red-600 border-b-2 border-red-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => setActiveTab('for-rent')}
        >
          Nhà đất cho thuê
        </button>
        <button
          className={`flex-1 py-3 px-4 text-center font-medium text-sm focus:outline-none ${
            activeTab === 'projects'
              ? 'text-red-600 border-b-2 border-red-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => setActiveTab('projects')}
        >
          Dự án
        </button>
      </div>
      
      {/* Search form */}
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Keyword search */}
          <div className="md:col-span-12">
            <input
              type="text"
              placeholder="Tìm kiếm theo địa điểm, tên dự án, tên tòa nhà"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          
          {/* Province */}
          <div className="md:col-span-3">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              value={province}
              onChange={handleProvinceChange}
            >
              <option value="">Tỉnh, thành phố</option>
              {provinces.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
          
          {/* District */}
          <div className="md:col-span-3">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              disabled={!province}
            >
              <option value="">Quận, huyện</option>
              {districts
                .filter((d) => d.provinceId === province)
                .map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
            </select>
          </div>
          
          {/* Property type */}
          <div className="md:col-span-2">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="">Loại bất động sản</option>
              {propertyTypes.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
          
          {/* Price range */}
          <div className="md:col-span-2">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              {priceRanges.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
          
          {/* Area range */}
          <div className="md:col-span-2">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
          
          {/* Search button */}
          <div className="md:col-span-12">
            <button
              className="w-full px-4 py-2 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition"
              onClick={handleSearch}
            >
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
