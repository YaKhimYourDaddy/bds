import apiClient from './api';

// Types
export interface Project {
  _id: string;
  name: string;
  description: string;
  developer: string;
  status: string;
  type: string;
  propertyTypes: string[];
  startDate?: string;
  completionDate?: string;
  address: string;
  province: string;
  district: string;
  ward: string;
  location?: {
    type: string;
    coordinates: number[];
  };
  totalArea: number;
  buildingCount?: number;
  floorCount?: number;
  unitCount?: number;
  priceMin?: number;
  priceMax?: number;
  priceUnit?: string;
  images: string[];
  videos?: string[];
  masterplan?: string;
  amenities?: string[];
  features?: string[];
  owner: string;
  isVerified: boolean;
  isPromoted: boolean;
  promotionExpiry?: string;
  views: number;
  website?: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectFilters {
  type?: string;
  status?: string;
  priceMin?: number;
  priceMax?: number;
  province?: string;
  district?: string;
  ward?: string;
  keyword?: string;
  page?: number;
  limit?: number;
  sort?: string;
}

// Get all projects with optional filters
export const getProjects = async (filters: ProjectFilters = {}) => {
  try {
    const response = await apiClient.get('/projects', { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

// Get featured projects
export const getFeaturedProjects = async (limit: number = 3) => {
  try {
    const response = await apiClient.get('/projects/featured', { params: { limit } });
    return response.data;
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    throw error;
  }
};

// Get project by ID
export const getProjectById = async (id: string) => {
  try {
    const response = await apiClient.get(`/projects/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching project with ID ${id}:`, error);
    throw error;
  }
};

// Get properties in a project
export const getProjectProperties = async (projectId: string, limit: number = 8) => {
  try {
    const response = await apiClient.get(`/projects/${projectId}/properties`, { 
      params: { limit }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching properties for project ID ${projectId}:`, error);
    throw error;
  }
};

// Create new project
export const createProject = async (projectData: Omit<Project, '_id' | 'isVerified' | 'isPromoted' | 'views' | 'createdAt' | 'updatedAt'>) => {
  try {
    const response = await apiClient.post('/projects', projectData);
    return response.data;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

// Update project
export const updateProject = async (id: string, projectData: Partial<Project>) => {
  try {
    const response = await apiClient.put(`/projects/${id}`, projectData);
    return response.data;
  } catch (error) {
    console.error(`Error updating project with ID ${id}:`, error);
    throw error;
  }
};

// Delete project
export const deleteProject = async (id: string) => {
  try {
    const response = await apiClient.delete(`/projects/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting project with ID ${id}:`, error);
    throw error;
  }
};
