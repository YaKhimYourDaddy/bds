import { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string, rememberMe?: boolean) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  updateUserProfile: (userData: UpdateUserData) => Promise<boolean>;
}

interface User {
  _id: string;
  fullName: string;
  email: string;
  phone?: string;
  role: string;
  avatar?: string;
  address?: string;
  company?: string;
  bio?: string;
}

interface RegisterData {
  fullName: string;
  email: string;
  password: string;
  phone?: string;
}

interface UpdateUserData {
  fullName?: string;
  email?: string;
  password?: string;
  phone?: string;
  address?: string;
  company?: string;
  bio?: string;
  avatar?: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

const API_URL = 'http://localhost:5000/api';

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  loading: true,
  error: null,
  login: async () => false,
  register: async () => {},
  logout: () => {},
  updateUserProfile: async () => false,
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Check if user is logged in from localStorage token
    const checkAuth = async () => {
      try {
        // Check both localStorage and sessionStorage for token
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        
        if (!token) {
          setLoading(false);
          return;
        }
        
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        
        const { data } = await axios.get(`${API_URL}/auth/profile`, config);
        
        setUser(data);
        setIsAuthenticated(true);
        setLoading(false);
      } catch (error) {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
    
    checkAuth();
  }, []);
  
  const login = async (email: string, password: string, rememberMe?: boolean) => {
    try {
      setLoading(true);
      setError(null);
      
      const { data } = await axios.post(`${API_URL}/auth/login`, { email, password });
      
      // If rememberMe is true, store the token in localStorage, otherwise in sessionStorage
      if (rememberMe) {
        localStorage.setItem('token', data.token);
      } else {
        sessionStorage.setItem('token', data.token);
      }
      
      setUser(data);
      setIsAuthenticated(true);
      return true;
    } catch (error: any) {
      setError(error.response?.data?.message || 'Login failed');
      return false;
    } finally {
      setLoading(false);
    }
  };
  
  const register = async (userData: RegisterData) => {
    try {
      setLoading(true);
      setError(null);
      
      const { data } = await axios.post(`${API_URL}/auth/register`, userData);
      
      // Store token in localStorage for persistence
      localStorage.setItem('token', data.token);
      
      setUser(data);
      setIsAuthenticated(true);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };
  
  const logout = () => {
    // Clear token from both storage locations
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
  };
  
  const updateUserProfile = async (userData: UpdateUserData) => {
    try {
      setLoading(true);
      setError(null);
      
      // Check both localStorage and sessionStorage for token
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      
      if (!token) {
        setError('Not authenticated');
        setLoading(false);
        return false;
      }
      
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      
      const { data } = await axios.put(`${API_URL}/auth/profile`, userData, config);
      
      setUser(data);
      return true;
    } catch (error: any) {
      setError(error.response?.data?.message || 'Update profile failed');
      return false;
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        error,
        login,
        register,
        logout,
        updateUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
