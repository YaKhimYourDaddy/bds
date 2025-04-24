// src/components/Home/SearchSuggestions.jsx
import { Link } from "react-router-dom";

const SearchSuggestions = () => {
  const suggestions = [
    {
      category: "Mua bán",
      links: [
        { label: "Bán căn hộ chung cư", url: "/mua-ban/can-ho-chung-cu" },
        { label: "Bán nhà riêng", url: "/mua-ban/nha-rieng" },
        { label: "Bán đất nền", url: "/mua-ban/dat-nen" },
        { label: "Bán biệt thự", url: "/mua-ban/biet-thu" },
      ],
    },
    {
      category: "Cho thuê",
      links: [
        { label: "Cho thuê căn hộ", url: "/cho-thue/can-ho-chung-cu" },
        { label: "Cho thuê nhà riêng", url: "/cho-thue/nha-rieng" },
        { label: "Cho thuê văn phòng", url: "/cho-thue/van-phong" },
        { label: "Cho thuê mặt bằng", url: "/cho-thue/mat-bang" },
      ],
    },
    {
      category: "Địa điểm HOT",
      links: [
        { label: "Hà Nội", url: "/bat-dong-san/ha-noi" },
        { label: "TP. Hồ Chí Minh", url: "/bat-dong-san/ho-chi-minh" },
        { label: "Đà Nẵng", url: "/bat-dong-san/da-nang" },
        { label: "Hải Phòng", url: "/bat-dong-san/hai-phong" },
      ],
    },
  ];

  return (
    <div className="bg-white rounded shadow-card p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {suggestions.map((section, index) => (
          <div key={index}>
            <h3 className="text-sm font-medium mb-2">{section.category}</h3>
            <ul className="space-y-1">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    to={link.url}
                    className="text-sm text-text-secondary hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchSuggestions;
