import apiClient from './api';
import { User } from './auth.service';

// Types
export interface FavoriteProperty {
  _id: string;
  propertyId: string;
  userId: string;
  createdAt: string;
}

export interface SavedSearch {
  _id: string;
  userId: string;
  name: string;
  filters: Record<string, any>;
  createdAt: string;
}

// Get user favorites
export const getUserFavorites = async () => {
  try {
    const response = await apiClient.get('/users/favorites');
    return response.data;
  } catch (error) {
    console.error('Error fetching user favorites:', error);
    throw error;
  }
};

// Check if property is in favorites
export const isPropertyFavorite = async (propertyId: string) => {
  try {
    const response = await apiClient.get(`/users/favorites/check/${propertyId}`);
    return response.data.isFavorite;
  } catch (error) {
    console.error('Error checking favorite status:', error);
    return false;
  }
};

// Add property to favorites
export const addToFavorites = async (propertyId: string) => {
  try {
    const response = await apiClient.post('/users/favorites', { propertyId });
    return response.data;
  } catch (error) {
    console.error('Error adding to favorites:', error);
    throw error;
  }
};

// Remove property from favorites
export const removeFromFavorites = async (propertyId: string) => {
  try {
    const response = await apiClient.delete(`/users/favorites/${propertyId}`);
    return response.data;
  } catch (error) {
    console.error('Error removing from favorites:', error);
    throw error;
  }
};

// Get user saved searches
export const getSavedSearches = async () => {
  try {
    const response = await apiClient.get('/users/saved-searches');
    return response.data;
  } catch (error) {
    console.error('Error fetching saved searches:', error);
    throw error;
  }
};

// Save search
export const saveSearch = async (name: string, filters: Record<string, any>) => {
  try {
    const response = await apiClient.post('/users/saved-searches', { name, filters });
    return response.data;
  } catch (error) {
    console.error('Error saving search:', error);
    throw error;
  }
};

// Delete saved search
export const deleteSavedSearch = async (searchId: string) => {
  try {
    const response = await apiClient.delete(`/users/saved-searches/${searchId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting saved search:', error);
    throw error;
  }
};

// Toggle notifications for saved search
export const toggleSavedSearchNotifications = async (searchId: string, enabled: boolean) => {
  try {
    const response = await apiClient.put(`/users/saved-searches/${searchId}/notifications`, { enabled });
    return response.data;
  } catch (error) {
    console.error('Error toggling saved search notifications:', error);
    throw error;
  }
};

// Get user properties (listings created by user)
export const getUserProperties = async () => {
  try {
    const response = await apiClient.get('/users/properties');
    return response.data;
  } catch (error) {
    console.error('Error fetching user properties:', error);
    throw error;
  }
};

// Update user profile
export const updateUserProfile = async (userData: Partial<User>) => {
  try {
    const response = await apiClient.put('/users/profile', userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

// Send contact message
export const sendContactMessage = async (
  propertyId: string,
  message: string,
  contactInfo?: Record<string, string>
) => {
  try {
    const response = await apiClient.post('/users/contact', {
      propertyId,
      message,
      contactInfo
    });
    return response.data;
  } catch (error) {
    console.error('Error sending contact message:', error);
    throw error;
  }
};
