import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Filter, Search, MapPin, ArrowUpDown } from 'lucide-react';
import PropertyCard from '../components/properties/PropertyCard';
import { allProperties } from '../data/mockData';

const PropertyListPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  const [showFilters, setShowFilters] = useState(false);
  const [propertyType, setPropertyType] = useState(queryParams.get('type') || 'all');
  const [selectedCategory, setSelectedCategory] = useState(queryParams.get('category') || '');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
  const [bedrooms, setBedrooms] = useState<number | ''>('');
  const [bathrooms, setBathrooms] = useState<number | ''>('');
  const [sortBy, setSortBy] = useState('recent');

  // Filter and sort properties based on current filter settings
  const filteredProperties = allProperties.filter((property) => {
    // Filter by property type (sale or rent)
    if (propertyType !== 'all' && property.type !== propertyType) {
      return false;
    }
    
    // Filter by category (apartment, house, land, etc.)
    if (selectedCategory && property.category !== selectedCategory) {
      return false;
    }
    
    // Filter by price range
    if (property.price < priceRange[0] || property.price > priceRange[1]) {
      return false;
    }
    
    // Filter by bedrooms
    if (bedrooms !== '' && property.bedrooms < bedrooms) {
      return false;
    }
    
    // Filter by bathrooms
    if (bathrooms !== '' && property.bathrooms < bathrooms) {
      return false;
    }
    
    return true;
  }).sort((a, b) => {
    // Sort based on selected sorting option
    switch (sortBy) {
      case 'price-low-high':
        return a.price - b.price;
      case 'price-high-low':
        return b.price - a.price;
      case 'recent':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      default:
        return 0;
    }
  });

  // Update URL with current filter selections
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (propertyType !== 'all') {
      params.set('type', propertyType);
    }
    
    if (selectedCategory) {
      params.set('category', selectedCategory);
    }
    
    if (bedrooms !== '') {
      params.set('bedrooms', bedrooms.toString());
    }
    
    if (bathrooms !== '') {
      params.set('bathrooms', bathrooms.toString());
    }
    
    navigate({ pathname: location.pathname, search: params.toString() }, { replace: true });
  }, [propertyType, selectedCategory, bedrooms, bathrooms, navigate, location.pathname]);

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">
            {propertyType === 'rent' ? 'Properties for Rent' : propertyType === 'sale' ? 'Properties for Sale' : 'All Properties'}
          </h1>
          <p className="text-lg text-neutral-600">
            {filteredProperties.length} properties found
          </p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="relative w-full lg:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md leading-5 bg-white placeholder-neutral-500 focus:outline-none focus:placeholder-neutral-400 focus:ring-1 focus:ring-primary-600 focus:border-primary-600 sm:text-sm"
                type="search"
                placeholder="Search by location, keywords..."
              />
            </div>
            
            <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-neutral-400 mr-2" />
                <select className="block pl-2 pr-8 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-600 focus:border-primary-600 sm:text-sm rounded-md">
                  <option value="">All Locations</option>
                  <option value="ho-chi-minh">Ho Chi Minh</option>
                  <option value="hanoi">Hanoi</option>
                  <option value="da-nang">Da Nang</option>
                </select>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="inline-flex items-center px-4 py-2 border border-neutral-300 rounded-md shadow-sm text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </button>
                
                <div className="relative">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-neutral-300 rounded-md shadow-sm text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50"
                  >
                    <ArrowUpDown className="h-4 w-4 mr-2" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    >
                      <option value="recent">Most Recent</option>
                      <option value="price-low-high">Price: Low to High</option>
                      <option value="price-high-low">Price: High to Low</option>
                    </select>
                    {sortBy === 'recent' && 'Most Recent'}
                    {sortBy === 'price-low-high' && 'Price: Low to High'}
                    {sortBy === 'price-high-low' && 'Price: High to Low'}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-neutral-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Property Type</label>
                  <div className="flex space-x-2">
                    <button
                      className={`px-4 py-2 text-sm font-medium rounded-md ${
                        propertyType === 'all' ? 'bg-primary-600 text-white' : 'bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50'
                      }`}
                      onClick={() => setPropertyType('all')}
                    >
                      All
                    </button>
                    <button
                      className={`px-4 py-2 text-sm font-medium rounded-md ${
                        propertyType === 'sale' ? 'bg-primary-600 text-white' : 'bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50'
                      }`}
                      onClick={() => setPropertyType('sale')}
                    >
                      For Sale
                    </button>
                    <button
                      className={`px-4 py-2 text-sm font-medium rounded-md ${
                        propertyType === 'rent' ? 'bg-primary-600 text-white' : 'bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50'
                      }`}
                      onClick={() => setPropertyType('rent')}
                    >
                      For Rent
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-600 focus:border-primary-600 sm:text-sm rounded-md"
                  >
                    <option value="">All Categories</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="villa">Villa</option>
                    <option value="land">Land</option>
                    <option value="office">Office</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Bedrooms</label>
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value === '' ? '' : Number(e.target.value))}
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-600 focus:border-primary-600 sm:text-sm rounded-md"
                  >
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Bathrooms</label>
                  <select
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value === '' ? '' : Number(e.target.value))}
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-600 focus:border-primary-600 sm:text-sm rounded-md"
                  >
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-neutral-700">Price Range</label>
                  <span className="text-sm text-neutral-500">
                    ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10000000"
                  step="100000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => {
                    setPropertyType('all');
                    setSelectedCategory('');
                    setPriceRange([0, 10000000]);
                    setBedrooms('');
                    setBathrooms('');
                  }}
                  className="mr-2 px-4 py-2 border border-neutral-300 rounded-md shadow-sm text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50"
                >
                  Reset Filters
                </button>
                <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700">
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Property Listings */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">No properties found</h3>
            <p className="text-neutral-600 mb-4">Try adjusting your search criteria or filters</p>
            <button
              onClick={() => {
                setPropertyType('all');
                setSelectedCategory('');
                setPriceRange([0, 10000000]);
                setBedrooms('');
                setBathrooms('');
              }}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
            >
              Reset Filters
            </button>
          </div>
        )}
        
        {/* Pagination */}
        {filteredProperties.length > 0 && (
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center">
              <button className="px-3 py-2 border border-neutral-300 rounded-l-md text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50">
                Previous
              </button>
              <button className="px-3 py-2 border border-neutral-300 text-sm font-medium text-white bg-primary-600">
                1
              </button>
              <button className="px-3 py-2 border border-neutral-300 text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50">
                2
              </button>
              <button className="px-3 py-2 border border-neutral-300 text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50">
                3
              </button>
              <span className="px-3 py-2 border border-neutral-300 text-sm text-neutral-700 bg-white">...</span>
              <button className="px-3 py-2 border border-neutral-300 text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50">
                10
              </button>
              <button className="px-3 py-2 border border-neutral-300 rounded-r-md text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50">
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyListPage;