import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-4">BatDongSan</h3>
            <p className="text-neutral-300 mb-4">
              The leading real estate marketplace in Vietnam, connecting buyers and sellers since 2023
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-white hover:text-primary-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-primary-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-primary-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-primary-500">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-primary-500">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="flex items-center mb-2">
              <MapPin className="h-5 w-5 mr-2 text-primary-500" />
              <span className="text-neutral-300">123 Main Street, Ho Chi Minh City, Vietnam</span>
            </div>
            <div className="flex items-center mb-2">
              <Phone className="h-5 w-5 mr-2 text-primary-500" />
              <span className="text-neutral-300">+84 123 456 789</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-primary-500" />
              <span className="text-neutral-300">info@batdongsan-clone.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/properties?type=sale" className="text-neutral-300 hover:text-white">Properties for Sale</Link>
              </li>
              <li>
                <Link to="/properties?type=rent" className="text-neutral-300 hover:text-white">Properties for Rent</Link>
              </li>
              <li>
                <Link to="/projects" className="text-neutral-300 hover:text-white">New Projects</Link>
              </li>
              <li>
                <Link to="/agents" className="text-neutral-300 hover:text-white">Find an Agent</Link>
              </li>
              <li>
                <Link to="/news" className="text-neutral-300 hover:text-white">Real Estate News</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-white">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/properties?category=apartment" className="text-neutral-300 hover:text-white">Apartments</Link>
              </li>
              <li>
                <Link to="/properties?category=house" className="text-neutral-300 hover:text-white">Houses & Villas</Link>
              </li>
              <li>
                <Link to="/properties?category=land" className="text-neutral-300 hover:text-white">Land</Link>
              </li>
              <li>
                <Link to="/properties?category=commercial" className="text-neutral-300 hover:text-white">Commercial Property</Link>
              </li>
              <li>
                <Link to="/properties?category=office" className="text-neutral-300 hover:text-white">Offices</Link>
              </li>
              <li>
                <Link to="/properties?category=retail" className="text-neutral-300 hover:text-white">Retail Shops</Link>
              </li>
            </ul>
          </div>

          {/* Popular Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Locations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/properties?location=ho-chi-minh" className="text-neutral-300 hover:text-white">Ho Chi Minh City</Link>
              </li>
              <li>
                <Link to="/properties?location=hanoi" className="text-neutral-300 hover:text-white">Hanoi</Link>
              </li>
              <li>
                <Link to="/properties?location=da-nang" className="text-neutral-300 hover:text-white">Da Nang</Link>
              </li>
              <li>
                <Link to="/properties?location=nha-trang" className="text-neutral-300 hover:text-white">Nha Trang</Link>
              </li>
              <li>
                <Link to="/properties?location=vung-tau" className="text-neutral-300 hover:text-white">Vung Tau</Link>
              </li>
              <li>
                <Link to="/properties?location=hai-phong" className="text-neutral-300 hover:text-white">Hai Phong</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-neutral-400 text-sm">
              &copy; {new Date().getFullYear()} BatDongSan Clone. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-neutral-400 hover:text-white text-sm">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-neutral-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link to="/sitemap" className="text-neutral-400 hover:text-white text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;