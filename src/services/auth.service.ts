import apiClient from './api';

// Types
export interface User {
  _id: string;
  fullName: string;
  email: string;
  phone?: string;
  address?: string;
  role: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  fullName: string;
  email: string;
  password: string;
  phone?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// Login user
export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  try {
    const response = await apiClient.post('/auth/login', credentials);
    
    // Store token and user in localStorage
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Register new user
export const register = async (userData: RegisterData): Promise<AuthResponse> => {
  try {
    const response = await apiClient.post('/auth/register', userData);
    
    // Store token and user in localStorage
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

// Logout user
export const logout = (): void => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// Get user profile
export const getUserProfile = async (): Promise<User> => {
  try {
    const response = await apiClient.get('/auth/profile');
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

// Update user profile
export const updateUserProfile = async (userData: Partial<User>): Promise<User> => {
  try {
    const response = await apiClient.put('/auth/profile', userData);
    
    // Update user in localStorage
    const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
    const updatedUser = { ...currentUser, ...response.data };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

// Change password
export const changePassword = async (
  currentPassword: string,
  newPassword: string
): Promise<{ message: string }> => {
  try {
    const response = await apiClient.put('/auth/change-password', {
      currentPassword,
      newPassword,
    });
    return response.data;
  } catch (error) {
    console.error('Error changing password:', error);
    throw error;
  }
};

// Request password reset
export const requestPasswordReset = async (
  email: string
): Promise<{ message: string }> => {
  try {
    const response = await apiClient.post('/auth/forgot-password', { email });
    return response.data;
  } catch (error) {
    console.error('Error requesting password reset:', error);
    throw error;
  }
};

// Reset password with token
export const resetPassword = async (
  token: string,
  newPassword: string
): Promise<{ message: string }> => {
  try {
    const response = await apiClient.post('/auth/reset-password', {
      token,
      newPassword,
    });
    return response.data;
  } catch (error) {
    console.error('Error resetting password:', error);
    throw error;
  }
};
