import { Product, SearchFilter } from '@types/index';

export const filterAndSortProducts = (products: Product[], filter: SearchFilter): Product[] => {
  let filtered = [...products];

  // Search query
  if (filter.query) {
    const query = filter.query.toLowerCase();
    filtered = filtered.filter(
      p => p.name.toLowerCase().includes(query) || 
           p.description.toLowerCase().includes(query)
    );
  }

  // Category
  if (filter.category) {
    filtered = filtered.filter(p => p.category === filter.category);
  }

  // Price range
  if (filter.priceRange) {
    const [min, max] = filter.priceRange;
    filtered = filtered.filter(p => p.price >= min && p.price <= max);
  }

  // Rating
  if (filter.rating) {
    filtered = filtered.filter(p => p.rating >= filter.rating);
  }

  // Sorting
  if (filter.sortBy) {
    switch (filter.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // Assuming newer items come first in the original array
        filtered.reverse();
        break;
      case 'popularity':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }
  }

  return filtered;
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

export const calculateDiscount = (original: number, current: number): number => {
  return Math.round(((original - current) / original) * 100);
};

export const getShippingCost = (subtotal: number): number => {
  if (subtotal > 100) return 0;
  if (subtotal > 50) return 5;
  return 10;
};

export const calculateTax = (subtotal: number): number => {
  return Math.round(subtotal * 0.08 * 100) / 100; // 8% tax
};

export const generateSummary = (text: string, maxLength: number = 100): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const isProductInWishlist = (productId: string, wishlistIds: string[]): boolean => {
  return wishlistIds.includes(productId);
};

export const getProductsCount = (products: Product[]): { inStock: number; total: number } => {
  return {
    inStock: products.filter(p => p.inStock).length,
    total: products.length,
  };
};
