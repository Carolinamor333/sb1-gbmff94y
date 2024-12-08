export interface Coach {
  id: string;
  name: string;
  title: string;
  specializations: string[];
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  imageUrl: string;
  location: string;
  description: string;
  availability?: {
    [key: string]: string[];
  };
}

export interface SearchFilters {
  specialization: string;
  priceRange: [number, number];
  location: string;
  availability: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'client' | 'coach' | 'admin';
  profileImage?: string;
}