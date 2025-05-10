import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Bed, Bath, Square, Maximize, Tag, Heart, Share2, Phone, Mail, User } from 'lucide-react';
import { featuredProperties, allProperties } from '../data/mockData';
import PropertyCard from '../components/properties/PropertyCard';

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Find the property by ID
  const property = allProperties.find((p) => p.id.toString() === id);
  
  // Related properties (excluding current property)
  const relatedProperties = allProperties
    .filter((p) => p.id.toString() !== id && p.category === property?.category)
    .slice(0, 3);
  
  if (!property) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-bold text-neutral-900 mb-4">Property Not Found</h1>
        <p className="text-neutral-600 mb-6">The property you are looking for does not exist or has been removed.</p>
        <Link to="/properties" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700">
          Browse All Properties
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Property Header */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-neutral-900 mb-2">{property.title}</h1>
              <div className="flex items-center mb-2">
                <MapPin className="h-5 w-5 text-primary-600 mr-1" />
                <span className="text-neutral-600">{property.location}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="text-3xl font-bold text-primary-600">${property.price.toLocaleString()}</span>
              {property.type === 'rent' && <span className="text-lg text-neutral-500">/month</span>}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center text-neutral-600">
              <Calendar className="h-5 w-5 mr-1 text-primary-600" />
              <span>Listed on {new Date(property.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center text-neutral-600">
              <Tag className="h-5 w-5 mr-1 text-primary-600" />
              <span>{property.category.charAt(0).toUpperCase() + property.category.slice(1)}</span>
            </div>
            <div className="flex items-center text-neutral-600">
              <Bed className="h-5 w-5 mr-1 text-primary-600" />
              <span>{property.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center text-neutral-600">
              <Bath className="h-5 w-5 mr-1 text-primary-600" />
              <span>{property.bathrooms} Bathrooms</span>
            </div>
            <div className="flex items-center text-neutral-600">
              <Square className="h-5 w-5 mr-1 text-primary-600" />
              <span>{property.area}m²</span>
            </div>
          </div>
        </div>
        
        {/* Property Images Gallery */}
        <div className="mb-8">
          <div className="relative rounded-lg overflow-hidden h-96">
            <img 
              src={property.images[currentImageIndex]} 
              alt={`Property view ${currentImageIndex + 1}`} 
              className="w-full h-full object-cover"
            />
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-neutral-700 hover:text-primary-600"
              onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? property.images.length - 1 : prevIndex - 1))}
            >
              &lt;
            </button>
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-neutral-700 hover:text-primary-600"
              onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex === property.images.length - 1 ? 0 : prevIndex + 1))}
            >
              &gt;
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full ${currentImageIndex === index ? 'bg-primary-600' : 'bg-white'}`}
                  onClick={() => setCurrentImageIndex(index)}
                ></button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-5 gap-2 mt-2">
            {property.images.map((image, index) => (
              <button
                key={index}
                className={`h-20 overflow-hidden rounded-md ${currentImageIndex === index ? 'ring-2 ring-primary-600' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img 
                  src={image} 
                  alt={`Property view ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700">
            <Phone className="h-4 w-4 mr-2" />
            Call Agent
          </button>
          <button className="flex items-center px-4 py-2 border border-primary-600 rounded-md shadow-sm text-sm font-medium text-primary-600 bg-white hover:bg-primary-50">
            <Mail className="h-4 w-4 mr-2" />
            Email Agent
          </button>
          <button className="flex items-center px-4 py-2 border border-neutral-300 rounded-md shadow-sm text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50">
            <Heart className="h-4 w-4 mr-2" />
            Save Property
          </button>
          <button className="flex items-center px-4 py-2 border border-neutral-300 rounded-md shadow-sm text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </button>
        </div>
        
        {/* Content Tabs */}
        <div className="mb-8">
          <div className="border-b border-neutral-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'overview'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('details')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'details'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
                }`}
              >
                Details & Features
              </button>
              <button
                onClick={() => setActiveTab('photos')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'photos'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
                }`}
              >
                Photos
              </button>
              <button
                onClick={() => setActiveTab('map')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'map'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
                }`}
              >
                Map
              </button>
            </nav>
          </div>
          
          <div className="py-6">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-xl font-bold text-neutral-900 mb-4">Property Description</h2>
                <div className="prose max-w-none text-neutral-700">
                  <p className="mb-4">{property.description}</p>
                  <p>This stunning property offers modern living in a convenient location. Close to shops, restaurants, and public transportation. Don't miss this opportunity to own a piece of paradise.</p>
                </div>
                
                <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">Property Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary-600 mr-2"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'details' && (
              <div>
                <h2 className="text-xl font-bold text-neutral-900 mb-4">Property Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Basic Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-neutral-600">Property ID</span>
                        <span className="font-medium">{property.id}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-neutral-600">Property Type</span>
                        <span className="font-medium">{property.category.charAt(0).toUpperCase() + property.category.slice(1)}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-neutral-600">Property Status</span>
                        <span className="font-medium">{property.type === 'sale' ? 'For Sale' : 'For Rent'}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-neutral-600">Property Price</span>
                        <span className="font-medium">${property.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-neutral-600">Property Size</span>
                        <span className="font-medium">{property.area}m²</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-neutral-600">Year Built</span>
                        <span className="font-medium">2020</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Additional Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-neutral-600">Bedrooms</span>
                        <span className="font-medium">{property.bedrooms}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-neutral-600">Bathrooms</span>
                        <span className="font-medium">{property.bathrooms}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-neutral-600">Garage</span>
                        <span className="font-medium">2</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-neutral-600">Property Condition</span>
                        <span className="font-medium">Excellent</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-neutral-600">Furnished</span>
                        <span className="font-medium">Yes</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-neutral-600">Pet Friendly</span>
                        <span className="font-medium">Yes</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mt-8 mb-3">Amenities & Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="h-4 w-4 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                        <div className="h-2 w-2 rounded-full bg-primary-600"></div>
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'photos' && (
              <div>
                <h2 className="text-xl font-bold text-neutral-900 mb-4">Property Photos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {property.images.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <img 
                        src={image} 
                        alt={`Property view ${index + 1}`} 
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'map' && (
              <div>
                <h2 className="text-xl font-bold text-neutral-900 mb-4">Property Location</h2>
                <div className="bg-neutral-100 h-96 flex items-center justify-center rounded-lg">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                    <p className="text-neutral-600">Map integration would be here with property location</p>
                    <p className="text-neutral-600">{property.location}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Agent Information */}
        <div className="mb-12 bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-md">
          <div className="p-6">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">Property Agent</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <img 
                  src="https://images.pexels.com/photos/5989068/pexels-photo-5989068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Agent" 
                  className="h-32 w-32 rounded-full object-cover border-4 border-neutral-100"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">Sarah Johnson</h3>
                <p className="text-neutral-600 mb-3">Real Estate Agent</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-primary-600 mr-2" />
                    <span className="text-neutral-600">+84 123 456 789</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-primary-600 mr-2" />
                    <span className="text-neutral-600">sarah.johnson@example.com</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700">
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </button>
                  <button className="flex items-center px-4 py-2 border border-primary-600 rounded-md shadow-sm text-sm font-medium text-primary-600 bg-white hover:bg-primary-50">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </button>
                </div>
              </div>
              <div className="md:w-1/3 bg-neutral-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Contact Agent</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-600 focus:border-primary-600"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-600 focus:border-primary-600"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-600 focus:border-primary-600"
                      placeholder="I'm interested in this property"
                      defaultValue="I'm interested in this property"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Properties */}
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;