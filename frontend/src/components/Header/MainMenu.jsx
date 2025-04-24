// src/components/Header/MainMenu.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

const MainMenu = ({ mobile = false }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    {
      name: "Mua bán",
      link: "/mua-ban",
      submenu: [
        { name: "Căn hộ chung cư", link: "/mua-ban/can-ho-chung-cu" },
        { name: "Nhà riêng", link: "/mua-ban/nha-rieng" },
        { name: "Đất nền", link: "/mua-ban/dat-nen" },
        { name: "Biệt thự", link: "/mua-ban/biet-thu" },
        { name: "Shophouse", link: "/mua-ban/shophouse" },
      ],
    },
    {
      name: "Cho thuê",
      link: "/cho-thue",
      submenu: [
        { name: "Căn hộ chung cư", link: "/cho-thue/can-ho-chung-cu" },
        { name: "Nhà riêng", link: "/cho-thue/nha-rieng" },
        { name: "Văn phòng", link: "/cho-thue/van-phong" },
        { name: "Mặt bằng", link: "/cho-thue/mat-bang" },
      ],
    },
    {
      name: "Dự án",
      link: "/du-an",
      submenu: [
        { name: "Căn hộ chung cư", link: "/du-an/can-ho-chung-cu" },
        { name: "Nhà phố", link: "/du-an/nha-pho" },
        { name: "Biệt thự", link: "/du-an/biet-thu" },
        { name: "Shophouse", link: "/du-an/shophouse" },
      ],
    },
    {
      name: "Tin tức",
      link: "/tin-tuc",
    },
    {
      name: "Wiki BĐS",
      link: "/wiki-bds",
    },
    {
      name: "Liên hệ",
      link: "/lien-he",
    },
  ];

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <ul className={`${mobile ? "flex flex-col space-y-3" : "flex space-x-6"}`}>
      {menuItems.map((item, index) => (
        <li key={index} className={`${mobile ? "" : "relative"}`}>
          {item.submenu ? (
            <div>
              <button
                className={`flex items-center ${
                  mobile ? "text-base" : "text-sm"
                } font-medium hover:text-primary transition-colors`}
                onClick={() => toggleDropdown(index)}
              >
                {item.name}
                <FiChevronDown className="ml-1" />
              </button>

              {activeDropdown === index && (
                <div
                  className={`${
                    mobile
                      ? "mt-2 pl-4 space-y-2"
                      : "absolute top-full left-0 min-w-48 bg-white shadow-dropdown rounded mt-2 py-2"
                  }`}
                >
                  {item.submenu.map((subitem, subindex) => (
                    <Link
                      key={subindex}
                      to={subitem.link}
                      className={`${
                        mobile ? "block" : "block px-4 py-2 hover:bg-tertiary"
                      } text-sm`}
                    >
                      {subitem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              to={item.link}
              className={`${
                mobile ? "text-base" : "text-sm"
              } font-medium hover:text-primary transition-colors`}
            >
              {item.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
