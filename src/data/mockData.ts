import { Property, PropertyType, Agent } from '../types/property';

// Sample property data for the clone

export const propertyTypes: PropertyType[] = [
  {
    id: 1,
    name: 'Apartment',
    slug: 'apartment',
    icon: 'apartment',
    count: 234
  },
  {
    id: 2,
    name: 'House',
    slug: 'house',
    icon: 'house',
    count: 186
  },
  {
    id: 3,
    name: 'Land',
    slug: 'land',
    icon: 'land',
    count: 145
  },
  {
    id: 4,
    name: 'Commercial',
    slug: 'commercial',
    icon: 'commercial',
    count: 98
  },
  {
    id: 5,
    name: 'Office',
    slug: 'office',
    icon: 'office',
    count: 76
  },
  {
    id: 6,
    name: 'Industrial',
    slug: 'industrial',
    icon: 'industrial',
    count: 52
  }
];

export const featuredProperties: Property[] = [
  {
    id: 1,
    title: 'Modern Apartment with City View',
    description: 'Luxurious apartment with stunning city views, modern amenities, and prime location.',
    type: 'sale',
    category: 'apartment',
    price: 250000,
    location: 'District 1, Ho Chi Minh City',
    area: 85,
    bedrooms: 2,
    bathrooms: 2,
    features: ['Air Conditioning', 'Balcony', 'Gym', 'Swimming Pool', 'Security', 'Parking'],
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1643385/pexels-photo-1643385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    createdAt: '2023-04-10T08:30:00Z',
    agent: 1
  },
  {
    id: 2,
    title: 'Luxury Villa with Private Pool',
    description: 'Spacious villa with private pool, garden, and modern design in a quiet neighborhood.',
    type: 'sale',
    category: 'villa',
    price: 850000,
    location: 'Thao Dien, District 2, Ho Chi Minh City',
    area: 350,
    bedrooms: 5,
    bathrooms: 6,
    features: ['Garden', 'Swimming Pool', 'Smart Home', 'Security', 'Parking', 'Terrace'],
    images: [
      'https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    createdAt: '2023-03-15T10:45:00Z',
    agent: 2
  },
  {
    id: 3,
    title: 'Office Space in Business District',
    description: 'Modern office space with panoramic views, ideal for businesses looking for a central location.',
    type: 'rent',
    category: 'office',
    price: 3500,
    location: 'Bình Thạnh District, Ho Chi Minh City',
    area: 120,
    bedrooms: 0,
    bathrooms: 2,
    features: ['Meeting Rooms', 'Reception Area', 'High-speed Internet', 'Security', 'Parking', 'Central AC'],
    images: [
      'https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1743555/pexels-photo-1743555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    createdAt: '2023-04-05T14:20:00Z',
    agent: 3
  }
];

export const latestProperties: Property[] = [
  {
    id: 4,
    title: 'Riverfront Apartment',
    description: 'Stunning riverfront apartment with modern amenities and breathtaking views.',
    type: 'rent',
    category: 'apartment',
    price: 1200,
    location: 'Đa Kao, District 1, Ho Chi Minh City',
    area: 75,
    bedrooms: 2,
    bathrooms: 2,
    features: ['River View', 'Balcony', 'Gym', 'Swimming Pool', 'Security', 'Parking'],
    images: [
      'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    createdAt: '2023-04-20T09:15:00Z',
    agent: 1
  },
  {
    id: 5,
    title: 'Modern Townhouse in Gated Community',
    description: 'Beautiful townhouse with 3 bedrooms in a secure gated community with shared amenities.',
    type: 'sale',
    category: 'house',
    price: 320000,
    location: 'An Phú, District 2, Ho Chi Minh City',
    area: 150,
    bedrooms: 3,
    bathrooms: 3,
    features: ['Gated Community', 'Garden', 'Terrace', 'Security', 'Parking', 'Children\'s Playground'],
    images: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    createdAt: '2023-04-18T11:30:00Z',
    agent: 2
  },
  {
    id: 6,
    title: 'Commercial Space for Retail',
    description: 'Prime retail space in a high-traffic area, ideal for shops, restaurants, or cafes.',
    type: 'rent',
    category: 'commercial',
    price: 2800,
    location: 'District 3, Ho Chi Minh City',
    area: 90,
    bedrooms: 0,
    bathrooms: 1,
    features: ['High Foot Traffic', 'Display Windows', 'Storage Area', 'Air Conditioning', 'Security System'],
    images: [
      'https://images.pexels.com/photos/3389817/pexels-photo-3389817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3289569/pexels-photo-3289569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7078675/pexels-photo-7078675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    createdAt: '2023-04-15T16:45:00Z',
    agent: 3
  }
];

// Combine featured and latest properties
export const allProperties: Property[] = [
  ...featuredProperties,
  ...latestProperties,
  // Add more properties
  {
    id: 7,
    title: 'Beachfront Villa in Vung Tau',
    description: 'Exclusive beachfront villa with direct beach access and panoramic ocean views.',
    type: 'sale',
    category: 'villa',
    price: 950000,
    location: 'Vung Tau City, Ba Ria - Vung Tau Province',
    area: 400,
    bedrooms: 4,
    bathrooms: 5,
    features: ['Beachfront', 'Private Pool', 'Garden', 'Terrace', 'Security', 'Parking'],
    images: [
      'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2525598/pexels-photo-2525598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    createdAt: '2023-04-12T10:00:00Z',
    agent: 4
  },
  {
    id: 8,
    title: 'Modern Studio Apartment',
    description: 'Compact and stylish studio apartment perfect for young professionals or students.',
    type: 'rent',
    category: 'apartment',
    price: 500,
    location: 'Cau Giay District, Hanoi',
    area: 45,
    bedrooms: 1,
    bathrooms: 1,
    features: ['Fully Furnished', 'Air Conditioning', 'High-speed Internet', 'Security', 'Laundry Facilities'],
    images: [
      'https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    createdAt: '2023-04-08T14:30:00Z',
    agent: 1
  },
  {
    id: 9,
    title: 'Investment Land Plot',
    description: 'Large land plot ideal for development or investment in a rapidly growing area.',
    type: 'sale',
    category: 'land',
    price: 180000,
    location: 'Long An Province',
    area: 800,
    bedrooms: 0,
    bathrooms: 0,
    features: ['Clear Title', 'Road Access', 'Utilities Available', 'Rectangular Shape', 'Near Highway'],
    images: [
      'https://images.pexels.com/photos/93405/pexels-photo-93405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/12629097/pexels-photo-12629097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/34107/milky-way-stars-night-sky.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/175773/pexels-photo-175773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    createdAt: '2023-04-05T09:10:00Z',
    agent: 2
  }
];

export const agents: Agent[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Senior Real Estate Agent',
    phone: '+84 123 456 789',
    email: 'sarah.johnson@example.com',
    listings: 42,
    experience: 8,
    avatar: 'https://images.pexels.com/photos/5989068/pexels-photo-5989068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'David Nguyen',
    role: 'Luxury Property Specialist',
    phone: '+84 987 654 321',
    email: 'david.nguyen@example.com',
    listings: 35,
    experience: 10,
    avatar: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Linh Tran',
    role: 'Commercial Property Expert',
    phone: '+84 456 789 123',
    email: 'linh.tran@example.com',
    listings: 28,
    experience: 6,
    avatar: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Michael Wong',
    role: 'International Property Consultant',
    phone: '+84 789 123 456',
    email: 'michael.wong@example.com',
    listings: 31,
    experience: 12,
    avatar: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];