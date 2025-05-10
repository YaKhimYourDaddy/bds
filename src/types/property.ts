export interface Property {
  id: number;
  title: string;
  description: string;
  type: 'sale' | 'rent';
  category: string;
  price: number;
  location: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  features: string[];
  images: string[];
  createdAt: string;
  agent: number;
}

export interface PropertyType {
  id: number;
  name: string;
  slug: string;
  icon: string;
  count: number;
}

export interface Agent {
  id: number;
  name: string;
  role: string;
  phone: string;
  email: string;
  listings: number;
  experience: number;
  avatar: string;
}