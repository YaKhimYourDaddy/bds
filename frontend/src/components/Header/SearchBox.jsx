// src/components/Header/SearchBox.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState("buy");
  const [searchParams, setSearchParams] = useState({
    propertyType: "",
    location: "",
    priceMin: "",
    priceMax: "",
    areaMin: "",
    areaMax: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append("type", searchType);

    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) {
        params.append(key, value);
      }
    });

    navigate(`/tim-kiem?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded shadow-card">
      <div className="flex border-b border-border-color">
        <button
          className={`flex-1 py-2 text-center font-medium text-sm ${
            searchType === "buy"
              ? "text-primary border-b-2 border-primary"
              : "text-text-secondary"
          }`}
          onClick={() => setSearchType("buy")}
        >
          Mua bán
        </button>
        <button
          className={`flex-1 py-2 text-center font-medium text-sm ${
            searchType === "rent"
              ? "text-primary border-b-2 border-primary"
              : "text-text-secondary"
          }`}
          onClick={() => setSearchType("rent")}
        >
          Cho thuê
        </button>
        <button
          className={`flex-1 py-2 text-center font-medium text-sm ${
            searchType === "project"
              ? "text-primary border-b-2 border-primary"
              : "text-text-secondary"
          }`}
          onClick={() => setSearchType("project")}
        >
          Dự án
        </button>
      </div>

      <form onSubmit={handleSearch} className="p-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          <div>
            <select
              name="propertyType"
              value={searchParams.propertyType}
              onChange={handleInputChange}
              className="input-field text-sm"
            >
              <option value="">Loại nhà đất</option>
              <option value="can-ho">Căn hộ chung cư</option>
              <option value="nha-rieng">Nhà riêng</option>
              <option value="dat-nen">Đất nền</option>
              <option value="biet-thu">Biệt thự</option>
              <option value="shophouse">Shophouse</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <select
              name="location"
              value={searchParams.location}
              onChange={handleInputChange}
              className="input-field text-sm"
            >
              <option value="">Tỉnh/Thành phố, Quận/Huyện, Phường/Xã</option>
              <option value="ha-noi">Hà Nội</option>
              <option value="ho-chi-minh">Hồ Chí Minh</option>
              <option value="da-nang">Đà Nẵng</option>
              <option value="hai-phong">Hải Phòng</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
          <div>
            <select
              name="priceMin"
              value={searchParams.priceMin}
              onChange={handleInputChange}
              className="input-field text-sm"
            >
              <option value="">Giá thấp nhất</option>
              <option value="500000000">500 triệu</option>
              <option value="1000000000">1 tỷ</option>
              <option value="2000000000">2 tỷ</option>
              <option value="3000000000">3 tỷ</option>
              <option value="5000000000">5 tỷ</option>
            </select>
          </div>

          <div>
            <select
              name="priceMax"
              value={searchParams.priceMax}
              onChange={handleInputChange}
              className="input-field text-sm"
            >
              <option value="">Giá cao nhất</option>
              <option value="1000000000">1 tỷ</option>
              <option value="2000000000">2 tỷ</option>
              <option value="3000000000">3 tỷ</option>
              <option value="5000000000">5 tỷ</option>
              <option value="10000000000">10 tỷ</option>
            </select>
          </div>

          <div>
            <select
              name="areaMin"
              value={searchParams.areaMin}
              onChange={handleInputChange}
              className="input-field text-sm"
            >
              <option value="">Diện tích thấp nhất</option>
              <option value="30">30 m²</option>
              <option value="50">50 m²</option>
              <option value="80">80 m²</option>
              <option value="100">100 m²</option>
              <option value="150">150 m²</option>
            </select>
          </div>

          <div>
            <select
              name="areaMax"
              value={searchParams.areaMax}
              onChange={handleInputChange}
              className="input-field text-sm"
            >
              <option value="">Diện tích cao nhất</option>
              <option value="50">50 m²</option>
              <option value="80">80 m²</option>
              <option value="100">100 m²</option>
              <option value="150">150 m²</option>
              <option value="200">200 m²</option>
              <option value="300">300 m²</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between">
          <button type="button" className="text-sm text-info hover:underline">
            Tìm kiếm nâng cao
          </button>

          <button type="submit" className="btn btn-primary">
            <FiSearch className="mr-1" />
            Tìm kiếm
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
