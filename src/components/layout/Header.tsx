import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Heart, User, Bell, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      {/* Top bar */}
      <div className="bg-primary-600 text-white py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-sm hidden md:block">Marketplace for real estate in Vietnam</div>
          <div className="flex space-x-4 text-sm">
            <Link to="/news" className="hover:underline">News</Link>
            <Link to="/guides" className="hover:underline">Guides</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="bg-white py-3 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">BatDongSan</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/properties?type=sale"
                className={`font-medium hover:text-primary-600 ${location.pathname === '/properties' && location.search.includes('type=sale') ? 'text-primary-600' : 'text-neutral-700'}`}
              >
                For Sale
              </Link>
              <Link
                to="/properties?type=rent"
                className={`font-medium hover:text-primary-600 ${location.pathname === '/properties' && location.search.includes('type=rent') ? 'text-primary-600' : 'text-neutral-700'}`}
              >
                For Rent
              </Link>
              <div className="relative group">
                <button className="flex items-center font-medium text-neutral-700 hover:text-primary-600">
                  Projects <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 hidden group-hover:block">
                  <Link to="/projects/apartment" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">Apartment</Link>
                  <Link to="/projects/villa" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">Villa & House</Link>
                  <Link to="/projects/office" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">Office</Link>
                  <Link to="/projects/land" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">Land</Link>
                </div>
              </div>
              <Link
                to="/agents"
                className={`font-medium hover:text-primary-600 ${location.pathname === '/agents' ? 'text-primary-600' : 'text-neutral-700'}`}
              >
                Agents
              </Link>
              <Link
                to="/news"
                className={`font-medium hover:text-primary-600 ${location.pathname === '/news' ? 'text-primary-600' : 'text-neutral-700'}`}
              >
                News
              </Link>
            </nav>

            {/* User actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 text-neutral-600 hover:text-primary-600">
                <Heart className="h-5 w-5" />
              </button>
              <button className="p-2 text-neutral-600 hover:text-primary-600">
                <Bell className="h-5 w-5" />
              </button>
              <Link to="/login" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
                <User className="h-4 w-4 mr-1" />
                Sign In
              </Link>
              <Link to="/post-property" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-600 bg-white border-primary-600 hover:bg-primary-50">
                Post Property
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-neutral-600 hover:text-primary-600 hover:bg-neutral-100"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 border-t">
            <Link
              to="/properties?type=sale"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-100"
              onClick={() => setIsMenuOpen(false)}
            >
              For Sale
            </Link>
            <Link
              to="/properties?type=rent"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-100"
              onClick={() => setIsMenuOpen(false)}
            >
              For Rent
            </Link>
            <Link
              to="/projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/agents"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Agents
            </Link>
            <Link
              to="/news"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-100"
              onClick={() => setIsMenuOpen(false)}
            >
              News
            </Link>
            <div className="border-t border-neutral-200 pt-4 pb-3">
              <Link
                to="/login"
                className="block w-full px-3 py-2 rounded-md text-center text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/post-property"
                className="block w-full mt-2 px-3 py-2 rounded-md text-center text-base font-medium text-primary-600 bg-white border border-primary-600 hover:bg-primary-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Post Property
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {/* Search bar */}
      <div className="bg-white border-t border-b border-neutral-200 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md leading-5 bg-white placeholder-neutral-500 focus:outline-none focus:placeholder-neutral-400 focus:ring-1 focus:ring-primary-600 focus:border-primary-600 sm:text-sm"
                type="search"
                placeholder="Search by location, property type, keywords..."
              />
            </div>
            <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700">
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;