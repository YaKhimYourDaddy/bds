import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Building, Home, Warehouse, Building2, PanelTop } from 'lucide-react';
import PropertyCard from '../components/properties/PropertyCard';
import FeaturedAgents from '../components/agents/FeaturedAgents';
import { featuredProperties, latestProperties, propertyTypes } from '../data/mockData';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[500px] bg-cover bg-center flex items-center" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Find Your Dream Property</h1>
            <p className="text-xl text-white mb-8">Search from thousands of properties for sale and rent across Vietnam</p>
            
            {/* Search Tabs */}
            <div className="max-w-4xl mx-auto bg-white rounded-t-lg">
              <div className="flex">
                <button className="flex-1 py-3 font-medium text-white bg-primary-600 rounded-tl-lg">For Sale</button>
                <button className="flex-1 py-3 font-medium text-neutral-600 bg-neutral-100 hover:bg-neutral-200">For Rent</button>
                <button className="flex-1 py-3 font-medium text-neutral-600 bg-neutral-100 hover:bg-neutral-200 rounded-tr-lg">Projects</button>
              </div>
              
              {/* Search Form */}
              <div className="p-4 bg-white rounded-b-lg shadow-lg">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input
                      className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md leading-5 bg-white placeholder-neutral-500 focus:outline-none focus:placeholder-neutral-400 focus:ring-1 focus:ring-primary-600 focus:border-primary-600 sm:text-sm"
                      type="text"
                      placeholder="Location"
                    />
                  </div>
                  <select className="block w-full py-2 px-3 border border-neutral-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-600 focus:border-primary-600 sm:text-sm">
                    <option value="">All Property Types</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="villa">Villa</option>
                    <option value="land">Land</option>
                    <option value="office">Office</option>
                  </select>
                  <select className="block w-full py-2 px-3 border border-neutral-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-600 focus:border-primary-600 sm:text-sm">
                    <option value="">Any Price</option>
                    <option value="0-500">$0 - $500,000</option>
                    <option value="500-1000">$500,000 - $1,000,000</option>
                    <option value="1000-2000">$1,000,000 - $2,000,000</option>
                    <option value="2000+">$2,000,000+</option>
                  </select>
                  <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700">
                    <Search className="h-5 w-5 mr-2" />
                    Search
                  </button>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="px-3 py-1 text-xs font-medium rounded-full border border-neutral-300 text-neutral-600 hover:bg-neutral-100">
                    2+ Bedrooms
                  </button>
                  <button className="px-3 py-1 text-xs font-medium rounded-full border border-neutral-300 text-neutral-600 hover:bg-neutral-100">
                    Near Schools
                  </button>
                  <button className="px-3 py-1 text-xs font-medium rounded-full border border-neutral-300 text-neutral-600 hover:bg-neutral-100">
                    Swimming Pool
                  </button>
                  <button className="px-3 py-1 text-xs font-medium rounded-full border border-neutral-300 text-neutral-600 hover:bg-neutral-100">
                    Furnished
                  </button>
                  <button className="px-3 py-1 text-xs font-medium rounded-full border border-neutral-300 text-neutral-600 hover:bg-neutral-100">
                    Pet Friendly
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900">Browse by Property Type</h2>
            <p className="mt-2 text-lg text-neutral-600">Find the perfect property based on your needs</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {propertyTypes.map((type) => (
              <Link key={type.id} to={`/properties?category=${type.slug}`}>
                <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600 mb-4">
                    {type.icon === 'apartment' && <Building className="h-6 w-6" />}
                    {type.icon === 'house' && <Home className="h-6 w-6" />}
                    {type.icon === 'land' && <MapPin className="h-6 w-6" />}
                    {type.icon === 'commercial' && <Building2 className="h-6 w-6" />}
                    {type.icon === 'office' && <PanelTop className="h-6 w-6" />}
                    {type.icon === 'industrial' && <Warehouse className="h-6 w-6" />}
                  </div>
                  <h3 className="text-lg font-medium text-neutral-900">{type.name}</h3>
                  <p className="mt-1 text-sm text-neutral-500">{type.count} properties</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900">Featured Properties</h2>
              <p className="mt-2 text-lg text-neutral-600">Handpicked properties for you to explore</p>
            </div>
            <Link to="/properties" className="text-primary-600 hover:text-primary-700 font-medium">
              View All Properties
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose Us</h2>
            <p className="mt-2 text-lg opacity-90">We are Vietnam's leading real estate marketplace</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Largest Selection</h3>
              <p className="opacity-90">Access thousands of property listings across Vietnam</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
              <p className="opacity-90">Every property listing is verified by our expert team</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Agents</h3>
              <p className="opacity-90">Connect with professional real estate agents</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Market Insights</h3>
              <p className="opacity-90">Stay updated with the latest real estate trends and news</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Properties Section */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900">Latest Properties</h2>
              <p className="mt-2 text-lg text-neutral-600">Fresh on the market and ready for viewing</p>
            </div>
            <Link to="/properties" className="text-primary-600 hover:text-primary-700 font-medium">
              View All Properties
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Agents Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900">Featured Agents</h2>
              <p className="mt-2 text-lg text-neutral-600">Meet our top performing real estate agents</p>
            </div>
            <Link to="/agents" className="text-primary-600 hover:text-primary-700 font-medium">
              View All Agents
            </Link>
          </div>
          
          <FeaturedAgents />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Stay updated with the latest property listings, market insights, and real estate news</p>
          
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 text-neutral-800"
                placeholder="Your email address"
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;