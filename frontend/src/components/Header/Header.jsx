// src/components/Header/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiHeart, FiUser, FiPlus, FiSearch } from "react-icons/fi";
import logo from "../../assets/logo.svg";
import MainMenu from "./MainMenu";
import SearchBox from "./SearchBox";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchBoxOpen, setSearchBoxOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Header */}
      <div className="bg-secondary text-white py-1">
        <div className="container-custom flex justify-between items-center">
          <div className="hidden md:flex space-x-4 text-sm">
            <a href="#" className="hover:text-primary transition-colors">
              Tải ứng dụng
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Hotline: 1900 1881
            </a>
          </div>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:text-primary transition-colors">
              Trợ giúp
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Đăng tin
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button
              className="mr-4 md:hidden text-xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
            <Link to="/" className="inline-block">
              <img
                src={logo || "/placeholder-logo.png"}
                alt="Batdongsan.com.vn"
                className="h-8"
              />
            </Link>
          </div>

          {/* Search Toggle for Mobile */}
          <button
            className="md:hidden text-xl"
            onClick={() => setSearchBoxOpen(!searchBoxOpen)}
          >
            <FiSearch />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <MainMenu />
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center text-sm hover:text-primary">
              <FiHeart className="mr-1" /> Yêu thích
            </button>
            <button className="flex items-center text-sm hover:text-primary">
              <FiUser className="mr-1" /> Đăng nhập
            </button>
            <button className="btn btn-primary">
              <FiPlus className="mr-1" /> Đăng tin
            </button>
          </div>
        </div>

        {/* Mobile Search Box */}
        {searchBoxOpen && (
          <div className="md:hidden mt-2">
            <SearchBox />
          </div>
        )}

        {/* Desktop Search Box */}
        <div className="hidden md:block mt-3">
          <SearchBox />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border-color">
          <div className="container-custom py-4">
            <MainMenu mobile={true} />
            <div className="mt-4 flex flex-col space-y-3">
              <button className="flex items-center text-sm">
                <FiHeart className="mr-1" /> Yêu thích
              </button>
              <button className="flex items-center text-sm">
                <FiUser className="mr-1" /> Đăng nhập
              </button>
              <button className="btn btn-primary w-full">
                <FiPlus className="mr-1" /> Đăng tin
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
