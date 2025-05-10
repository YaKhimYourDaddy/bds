import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, Settings, Heart, Building, LogOut, Edit, Eye, Upload, Camera } from 'lucide-react';

const UserProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img 
                    src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Profile" 
                    className="w-full h-full rounded-full object-cover"
                  />
                  <button className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-sm border border-neutral-200">
                    <Camera className="h-4 w-4 text-neutral-600" />
                  </button>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-1">John Doe</h3>
                <p className="text-neutral-600 text-sm mb-4">Joined April 2023</p>
                <Link
                  to="/edit-profile"
                  className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700"
                >
                  <Edit className="h-4 w-4 mr-1" />
                  Edit Profile
                </Link>
              </div>
              
              <div className="border-t border-neutral-200">
                <nav className="flex flex-col">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`flex items-center px-6 py-3 text-sm font-medium ${
                      activeTab === 'profile'
                        ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                        : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    <User className={`h-5 w-5 mr-3 ${activeTab === 'profile' ? 'text-primary-600' : 'text-neutral-500'}`} />
                    My Profile
                  </button>
                  <button
                    onClick={() => setActiveTab('favorites')}
                    className={`flex items-center px-6 py-3 text-sm font-medium ${
                      activeTab === 'favorites'
                        ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                        : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    <Heart className={`h-5 w-5 mr-3 ${activeTab === 'favorites' ? 'text-primary-600' : 'text-neutral-500'}`} />
                    Saved Properties
                  </button>
                  <button
                    onClick={() => setActiveTab('properties')}
                    className={`flex items-center px-6 py-3 text-sm font-medium ${
                      activeTab === 'properties'
                        ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                        : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    <Building className={`h-5 w-5 mr-3 ${activeTab === 'properties' ? 'text-primary-600' : 'text-neutral-500'}`} />
                    My Properties
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`flex items-center px-6 py-3 text-sm font-medium ${
                      activeTab === 'settings'
                        ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                        : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    <Settings className={`h-5 w-5 mr-3 ${activeTab === 'settings' ? 'text-primary-600' : 'text-neutral-500'}`} />
                    Account Settings
                  </button>
                  <button
                    className="flex items-center px-6 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
                  >
                    <LogOut className="h-5 w-5 mr-3 text-neutral-500" />
                    Logout
                  </button>
                </nav>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-neutral-900 mb-6">My Profile</h2>
                
                <div className="border-b border-neutral-200 pb-6 mb-6">
                  <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-neutral-500 mr-2" />
                        <span>John Doe</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-neutral-500 mr-2" />
                        <span>john.doe@example.com</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-neutral-500 mr-2" />
                        <span>+84 123 456 789</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">Account Type</label>
                      <div className="flex items-center">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-800">
                          Buyer/Renter
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Account Activity</h3>
                  <div className="space-y-4">
                    <div className="bg-neutral-50 p-4 rounded-md">
                      <div className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-3">
                          <Heart className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-neutral-900">Saved a property</h4>
                          <p className="text-sm text-neutral-500">You saved "Modern Apartment with City View" to your favorites</p>
                          <p className="text-xs text-neutral-400 mt-1">2 days ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-neutral-50 p-4 rounded-md">
                      <div className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-3">
                          <Eye className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-neutral-900">Viewed a property</h4>
                          <p className="text-sm text-neutral-500">You viewed "Luxury Villa with Private Pool"</p>
                          <p className="text-xs text-neutral-400 mt-1">3 days ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-neutral-50 p-4 rounded-md">
                      <div className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-3">
                          <Mail className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-neutral-900">Sent a message</h4>
                          <p className="text-sm text-neutral-500">You contacted an agent about "Commercial Space for Retail"</p>
                          <p className="text-xs text-neutral-400 mt-1">1 week ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'favorites' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-neutral-900 mb-6">Saved Properties</h2>
                
                <div className="space-y-4">
                  <div className="border border-neutral-200 rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 h-48 md:h-auto relative">
                        <img 
                          src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                          alt="Modern Apartment" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded">
                          For Sale
                        </div>
                      </div>
                      <div className="p-4 md:p-5 flex-1">
                        <div className="flex justify-between">
                          <h3 className="text-lg font-semibold text-neutral-900 mb-2">Modern Apartment with City View</h3>
                          <button className="text-neutral-400 hover:text-neutral-500">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                          </button>
                        </div>
                        <div className="flex items-center mb-3">
                          <MapPin className="h-4 w-4 text-neutral-500 mr-1" />
                          <span className="text-sm text-neutral-500">District 1, Ho Chi Minh City</span>
                        </div>
                        <div className="text-xl font-bold text-primary-600 mb-3">$250,000</div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center">
                            <Bed className="h-4 w-4 text-neutral-500 mr-1" />
                            <span className="text-sm">2 Beds</span>
                          </div>
                          <div className="flex items-center">
                            <Camera className="h-4 w-4 text-neutral-500 mr-1" />
                            <span className="text-sm">2 Baths</span>
                          </div>
                          <div className="flex items-center">
                            <Upload className="h-4 w-4 text-neutral-500 mr-1" />
                            <span className="text-sm">85m²</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Link
                            to="/properties/1"
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                          >
                            View Details
                          </Link>
                          <button className="inline-flex items-center px-3 py-1.5 border border-neutral-300 text-xs font-medium rounded text-neutral-700 bg-white hover:bg-neutral-50">
                            Contact Agent
                          </button>
                          <button className="inline-flex items-center px-3 py-1.5 border border-neutral-300 text-xs font-medium rounded text-neutral-700 bg-white hover:bg-neutral-50">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-neutral-200 rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 h-48 md:h-auto relative">
                        <img 
                          src="https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                          alt="Luxury Villa" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded">
                          For Sale
                        </div>
                      </div>
                      <div className="p-4 md:p-5 flex-1">
                        <div className="flex justify-between">
                          <h3 className="text-lg font-semibold text-neutral-900 mb-2">Luxury Villa with Private Pool</h3>
                          <button className="text-neutral-400 hover:text-neutral-500">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                          </button>
                        </div>
                        <div className="flex items-center mb-3">
                          <MapPin className="h-4 w-4 text-neutral-500 mr-1" />
                          <span className="text-sm text-neutral-500">Thao Dien, District 2, Ho Chi Minh City</span>
                        </div>
                        <div className="text-xl font-bold text-primary-600 mb-3">$850,000</div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center">
                            <Bed className="h-4 w-4 text-neutral-500 mr-1" />
                            <span className="text-sm">5 Beds</span>
                          </div>
                          <div className="flex items-center">
                            <Camera className="h-4 w-4 text-neutral-500 mr-1" />
                            <span className="text-sm">6 Baths</span>
                          </div>
                          <div className="flex items-center">
                            <Upload className="h-4 w-4 text-neutral-500 mr-1" />
                            <span className="text-sm">350m²</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Link
                            to="/properties/2"
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                          >
                            View Details
                          </Link>
                          <button className="inline-flex items-center px-3 py-1.5 border border-neutral-300 text-xs font-medium rounded text-neutral-700 bg-white hover:bg-neutral-50">
                            Contact Agent
                          </button>
                          <button className="inline-flex items-center px-3 py-1.5 border border-neutral-300 text-xs font-medium rounded text-neutral-700 bg-white hover:bg-neutral-50">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'properties' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-neutral-900">My Properties</h2>
                  <Link
                    to="/post-property"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
                  >
                    + Add New Property
                  </Link>
                </div>
                
                <div className="text-center py-8">
                  <div className="mx-auto w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-4">
                    <Building className="h-8 w-8 text-neutral-400" />
                  </div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-2">No Properties Yet</h3>
                  <p className="text-neutral-600 mb-6">You haven't posted any properties yet. Add your first property now!</p>
                  <Link
                    to="/post-property"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
                  >
                    Post a Property
                  </Link>
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-neutral-900 mb-6">Account Settings</h2>
                
                <div className="border-b border-neutral-200 pb-6 mb-6">
                  <h3 className="text-lg font-semibold mb-4">Email & Password</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        defaultValue="john.doe@example.com"
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-600 focus:border-primary-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="currentPassword" className="block text-sm font-medium text-neutral-700 mb-1">Current Password</label>
                      <input
                        id="currentPassword"
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-600 focus:border-primary-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="newPassword" className="block text-sm font-medium text-neutral-700 mb-1">New Password</label>
                      <input
                        id="newPassword"
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-600 focus:border-primary-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 mb-1">Confirm New Password</label>
                      <input
                        id="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-600 focus:border-primary-600"
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
                
                <div className="border-b border-neutral-200 pb-6 mb-6">
                  <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-neutral-900">Email Notifications</h4>
                        <p className="text-sm text-neutral-500">Receive updates about new properties and messages</p>
                      </div>
                      <label className="flex items-center cursor-pointer">
                        <div className="relative">
                          <input type="checkbox" className="sr-only" defaultChecked />
                          <div className="block bg-neutral-200 w-10 h-6 rounded-full"></div>
                          <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                        </div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-neutral-900">SMS Notifications</h4>
                        <p className="text-sm text-neutral-500">Receive text messages for important updates</p>
                      </div>
                      <label className="flex items-center cursor-pointer">
                        <div className="relative">
                          <input type="checkbox" className="sr-only" />
                          <div className="block bg-neutral-200 w-10 h-6 rounded-full"></div>
                          <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                        </div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-neutral-900">Marketing Emails</h4>
                        <p className="text-sm text-neutral-500">Receive promotional content and offers</p>
                      </div>
                      <label className="flex items-center cursor-pointer">
                        <div className="relative">
                          <input type="checkbox" className="sr-only" defaultChecked />
                          <div className="block bg-neutral-200 w-10 h-6 rounded-full"></div>
                          <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-red-600">Danger Zone</h3>
                  <div className="bg-neutral-50 p-4 rounded-md border border-neutral-200">
                    <h4 className="text-sm font-medium text-neutral-900 mb-2">Delete Account</h4>
                    <p className="text-sm text-neutral-500 mb-4">
                      Once you delete your account, all of your data will be permanently removed. This action cannot be undone.
                    </p>
                    <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;