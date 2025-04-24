// src/components/Home/FeaturedProperties.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiCamera } from "react-icons/fi";
import PropertyCard from "../Common/PropertyCard";

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  // Simulated property data
  useEffect(() => {
    const dummyProperties = [
      {
        id: 1,
        title: "Căn hộ chung cư cao cấp Royal City",
        address: "Thanh Xuân, Hà Nội",
        price: "5.2 tỷ",
        area: "98 m²",
        bedrooms: 3,
        bathrooms: 2,
        type: "apartment",
        status: "sale",
        image: "/property1.jpg",
        isVerified: true,
        postedDate: "1 ngày trước",
      },
      {
        id: 2,
        title: "Nhà phố liền kề khu đô thị Vinhomes",
        address: "Quận 9, TP. Hồ Chí Minh",
        price: "8.5 tỷ",
        area: "120 m²",
        bedrooms: 4,
        bathrooms: 3,
        type: "house",
        status: "sale",
        image: "/property2.jpg",
        isVerified: true,
        postedDate: "2 ngày trước",
      },
      {
        id: 3,
        title: "Đất nền dự án Eco City",
        address: "Gia Lâm, Hà Nội",
        price: "2.3 tỷ",
        area: "80 m²",
        type: "land",
        status: "sale",
        image: "/property3.jpg",
        isVerified: false,
        postedDate: "3 ngày trước",
      },
      {
        id: 4,
        title: "Căn hộ 2 phòng ngủ cho thuê tại The Sun Avenue",
        address: "Quận 2, TP. Hồ Chí Minh",
        price: "15 triệu/tháng",
        area: "75 m²",
        bedrooms: 2,
        bathrooms: 2,
        type: "apartment",
        status: "rent",
        image: "/property4.jpg",
        isVerified: true,
        postedDate: "1 ngày trước",
      },
      {
        id: 5,
        title: "Biệt thự đơn lập view sông",
        address: "Thảo Điền, TP. Hồ Chí Minh",
        price: "35 tỷ",
        area: "300 m²",
        bedrooms: 5,
        bathrooms: 5,
        type: "villa",
        status: "sale",
        image: "/property5.jpg",
        isVerified: true,
        postedDate: "5 ngày trước",
      },
      {
        id: 6,
        title: "Văn phòng cho thuê hạng A",
        address: "Cầu Giấy, Hà Nội",
        price: "30 triệu/tháng",
        area: "150 m²",
        type: "office",
        status: "rent",
        image: "/property6.jpg",
        isVerified: false,
        postedDate: "2 ngày trước",
      },
    ];

    setProperties(dummyProperties);
  }, []);

  const filteredProperties =
    activeTab === "all"
      ? properties
      : properties.filter((prop) => prop.status === activeTab);

  return (
    <div>
      <div className="flex border-b border-border-color mb-4">
        <button
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "all"
              ? "text-primary border-b-2 border-primary"
              : "text-text-secondary"
          }`}
          onClick={() => setActiveTab("all")}
        >
          Tất cả
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "sale"
              ? "text-primary border-b-2 border-primary"
              : "text-text-secondary"
          }`}
          onClick={() => setActiveTab("sale")}
        >
          Mua bán
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "rent"
              ? "text-primary border-b-2 border-primary"
              : "text-text-secondary"
          }`}
          onClick={() => setActiveTab("rent")}
        >
          Cho thuê
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
