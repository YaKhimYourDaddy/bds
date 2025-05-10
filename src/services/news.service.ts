import apiClient from './api';

// Types
export interface News {
  _id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  slug: string;
  categories: string[];
  tags: string[];
  author: string;
  views: number;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface NewsFilters {
  category?: string;
  tag?: string;
  keyword?: string;
  page?: number;
  limit?: number;
  sort?: string;
}

// Get all news articles with optional filters
export const getNews = async (filters: NewsFilters = {}) => {
  try {
    const response = await apiClient.get('/news', { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

// Get latest news
export const getLatestNews = async (limit: number = 3) => {
  try {
    const response = await apiClient.get('/news/latest', { params: { limit } });
    return response.data;
  } catch (error) {
    console.error('Error fetching latest news:', error);
    throw error;
  }
};

// Get news article by ID or slug
export const getNewsById = async (idOrSlug: string) => {
  try {
    const response = await apiClient.get(`/news/${idOrSlug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching news with ID/slug ${idOrSlug}:`, error);
    throw error;
  }
};

// Get related news
export const getRelatedNews = async (idOrSlug: string, limit: number = 4) => {
  try {
    const response = await apiClient.get(`/news/${idOrSlug}/related`, { 
      params: { limit }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching related news for ID/slug ${idOrSlug}:`, error);
    throw error;
  }
};
