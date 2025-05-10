import apiClient from './api';

// Types
export interface Property {
  _id: string;
  title: string;
  description: string;
  type: string;
  status: string;
  price: number;
  priceUnit: string;
  area: number;
  address: string;
  province: string;
  district: string;
  ward: string;
  street?: string;
  location?: {
    type: string;
    coordinates: number[];
  };
  bedrooms: number;
  bathrooms: number;
  floors?: number;
  direction?: string;
  legalDocuments?: string;
  furniture?: string;
  features?: string[];
  amenities?: string[];
  images: string[];
  videos?: string[];
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  owner: string;
  isVerified: boolean;
  isPromoted: boolean;
  promotionExpiry?: string;
  views: number;
  expiryDate: string;
  projectId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PropertyFilters {
  type?: string;
  status?: string;
  priceMin?: number;
  priceMax?: number;
  areaMin?: number;
  areaMax?: number;
  province?: string;
  district?: string;
  ward?: string;
  bedrooms?: number;
  bathrooms?: number;
  keyword?: string;
  page?: number;
  limit?: number;
  sort?: string;
}

// Get all properties with optional filters
export const getProperties = async (filters: PropertyFilters = {}) => {
  try {
    const response = await apiClient.get('/properties', { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }
};

// Get featured properties
export const getFeaturedProperties = async (limit: number = 8) => {
  try {
    const response = await apiClient.get('/properties/featured', { params: { limit } });
    return response.data;
  } catch (error) {
    console.error('Error fetching featured properties:', error);
    throw error;
  }
};

// Get property by ID
export const getPropertyById = async (id: string) => {
  try {
    const response = await apiClient.get(`/properties/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching property with ID ${id}:`, error);
    throw error;
  }
};

// Get similar properties
export const getSimilarProperties = async (id: string, limit: number = 4) => {
  try {
    const response = await apiClient.get(`/properties/${id}/similar`, { params: { limit } });
    return response.data;
  } catch (error) {
    console.error(`Error fetching similar properties for ID ${id}:`, error);
    throw error;
  }
};

// Create new property listing
export const createProperty = async (propertyData: Omit<Property, '_id' | 'isVerified' | 'isPromoted' | 'views' | 'createdAt' | 'updatedAt'>) => {
  try {
    const response = await apiClient.post('/properties', propertyData);
    return response.data;
  } catch (error) {
    console.error('Error creating property:', error);
    throw error;
  }
};

// Update property
export const updateProperty = async (id: string, propertyData: Partial<Property>) => {
  try {
    const response = await apiClient.put(`/properties/${id}`, propertyData);
    return response.data;
  } catch (error) {
    console.error(`Error updating property with ID ${id}:`, error);
    throw error;
  }
};

// Delete property
export const deleteProperty = async (id: string) => {
  try {
    const response = await apiClient.delete(`/properties/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting property with ID ${id}:`, error);
    throw error;
  }
};

// Add property to favorites
export const addToFavorites = async (propertyId: string) => {
  try {
    const response = await apiClient.post('/users/favorites', { propertyId });
    return response.data;
  } catch (error) {
    console.error(`Error adding property ID ${propertyId} to favorites:`, error);
    throw error;
  }
};

// Remove property from favorites
export const removeFromFavorites = async (propertyId: string) => {
  try {
    const response = await apiClient.delete(`/users/favorites/${propertyId}`);
    return response.data;
  } catch (error) {
    console.error(`Error removing property ID ${propertyId} from favorites:`, error);
    throw error;
  }
};
