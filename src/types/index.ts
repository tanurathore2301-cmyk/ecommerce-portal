export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  rating: number;
  reviewCount: number;
  category: 'Electronics' | 'Fashion' | 'Home & Living' | 'Sports' | 'Beauty';
  description: string;
  features?: string[];
  inStock: boolean;
  badge?: 'Sale' | 'New' | 'Featured' | 'Trending';
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface WishlistItem {
  id: string;
  product: Product;
  addedAt: Date;
}

export interface SearchFilter {
  query: string;
  category?: string;
  priceRange?: [number, number];
  rating?: number;
  sortBy?: 'price-low' | 'price-high' | 'newest' | 'popularity' | 'rating';
}

export interface CategoryType {
  id: string;
  name: 'Electronics' | 'Fashion' | 'Home & Living' | 'Sports' | 'Beauty';
  icon: string;
  color: string;
  productCount: number;
}

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
