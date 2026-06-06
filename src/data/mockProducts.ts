import { Product } from '@types/index';
import { pexels } from '@utils/productImages';

export const MOCK_PRODUCTS: Product[] = [
  // ─── Clothes (10) ───
  {
    id: '1', name: 'Classic Cotton T-Shirt', price: 899, originalPrice: 1299,
    image: pexels(7671166),
    rating: 4.5, reviewCount: 428, category: 'Clothes',
    description: 'Comfortable 100% organic cotton t-shirt in vibrant colours.',
    features: ['Organic cotton', 'Multiple colours', 'Unisex fit'], inStock: true, badge: 'Sale',
  },
  {
    id: '2', name: 'Premium Denim Jeans', price: 2499, originalPrice: 3499,
    image: pexels(1598507),
    rating: 4.6, reviewCount: 567, category: 'Clothes',
    description: 'Premium stretch denim jeans with a perfect slim fit.', inStock: true, badge: 'Trending',
  },
  {
    id: '3', name: 'Floral Summer Dress', price: 1899,
    image: pexels(1462637),
    rating: 4.7, reviewCount: 312, category: 'Clothes',
    description: 'Light and elegant floral summer dress for any occasion.', inStock: true, badge: 'New',
  },
  {
    id: '4', name: 'Leather Biker Jacket', price: 4999,
    image: pexels(1124468),
    rating: 4.8, reviewCount: 245, category: 'Clothes',
    description: 'Stylish genuine leather jacket for all seasons.', inStock: true,
  },
  {
    id: '5', name: 'Casual Linen Shirt', price: 1599,
    image: pexels(297933),
    rating: 4.4, reviewCount: 189, category: 'Clothes',
    description: 'Breathable linen shirt perfect for warm weather styling.', inStock: true,
  },
  {
    id: '6', name: 'Cozy Wool Sweater', price: 2199, originalPrice: 2799,
    image: pexels(1182458),
    rating: 4.5, reviewCount: 334, category: 'Clothes',
    description: 'Soft merino wool sweater for chilly evenings.', inStock: true, badge: 'Sale',
  },
  {
    id: '7', name: 'Elegant Silk Saree', price: 5999,
    image: pexels(1089238),
    rating: 4.9, reviewCount: 178, category: 'Clothes',
    description: 'Handwoven silk saree with intricate border work.', inStock: true, badge: 'Trending',
  },
  {
    id: '8', name: 'Utility Cargo Pants', price: 1799,
    image: pexels(6311392),
    rating: 4.3, reviewCount: 256, category: 'Clothes',
    description: 'Relaxed-fit cargo pants with multiple pockets.', inStock: true,
  },
  {
    id: '9', name: 'Oversized Hoodie', price: 1499,
    image: pexels(4934198),
    rating: 4.6, reviewCount: 445, category: 'Clothes',
    description: 'Ultra-soft fleece hoodie in trendy oversized fit.', inStock: true, badge: 'New',
  },
  {
    id: '10', name: 'Formal Blazer', price: 3899,
    image: pexels(1043474),
    rating: 4.7, reviewCount: 198, category: 'Clothes',
    description: 'Tailored blazer for office and special occasions.', inStock: true,
  },

  // ─── Footwear (10) ───
  {
    id: '11', name: 'Classic White Sneakers', price: 2999, originalPrice: 3999,
    image: pexels(2529148),
    rating: 4.7, reviewCount: 892, category: 'Footwear',
    description: 'Comfortable everyday sneakers with cushioned sole.', inStock: true, badge: 'Sale',
  },
  {
    id: '12', name: 'Running Sports Shoes', price: 3499,
    image: pexels(2526875),
    rating: 4.6, reviewCount: 634, category: 'Footwear',
    description: 'Professional running shoes with superior grip.', inStock: true, badge: 'Trending',
  },
  {
    id: '13', name: 'Elegant High Heels', price: 2799,
    image: pexels(336372),
    rating: 4.5, reviewCount: 278, category: 'Footwear',
    description: 'Stunning high heels for parties and formal events.', inStock: true, badge: 'New',
  },
  {
    id: '14', name: 'Leather Ankle Boots', price: 4299,
    image: pexels(1121640),
    rating: 4.6, reviewCount: 356, category: 'Footwear',
    description: 'Premium leather ankle boots with durable sole.', inStock: true,
  },
  {
    id: '15', name: 'Summer Sandals', price: 1299,
    image: pexels(259550),
    rating: 4.3, reviewCount: 412, category: 'Footwear',
    description: 'Comfortable open-toe sandals for casual summer wear.', inStock: true,
  },
  {
    id: '16', name: 'Canvas Loafers', price: 1999, originalPrice: 2499,
    image: pexels(292999),
    rating: 4.4, reviewCount: 287, category: 'Footwear',
    description: 'Lightweight canvas loafers for smart-casual looks.', inStock: true, badge: 'Sale',
  },
  {
    id: '17', name: 'Sport Flip Flops', price: 699,
    image: pexels(321552),
    rating: 4.2, reviewCount: 523, category: 'Footwear',
    description: 'Cushioned flip flops for beach and poolside.', inStock: true,
  },
  {
    id: '18', name: 'Formal Oxford Shoes', price: 4599,
    image: pexels(33516853),
    rating: 4.8, reviewCount: 167, category: 'Footwear',
    description: 'Polished leather Oxford shoes for formal occasions.', inStock: true, badge: 'Trending',
  },
  {
    id: '19', name: 'Hiking Boots', price: 5299,
    image: pexels(1166638),
    rating: 4.7, reviewCount: 234, category: 'Footwear',
    description: 'Water-resistant hiking boots with ankle support.', inStock: true, badge: 'New',
  },
  {
    id: '20', name: 'Ballet Flats', price: 1699,
    image: pexels(2983464),
    rating: 4.5, reviewCount: 312, category: 'Footwear',
    description: 'Comfortable ballet flats for everyday elegance.', inStock: true,
  },

  // ─── Beauty (10) ───
  {
    id: '21', name: 'Vitamin C Face Serum', price: 899, originalPrice: 1299,
    image: pexels(4041392),
    rating: 4.6, reviewCount: 534, category: 'Beauty',
    description: 'Brightening vitamin C serum for radiant skin.', inStock: true, badge: 'Sale',
  },
  {
    id: '22', name: 'Luxury Lipstick Set', price: 1499,
    image: pexels(253326),
    rating: 4.7, reviewCount: 423, category: 'Beauty',
    description: 'Long-lasting matte lipstick collection in 6 shades.', inStock: true, badge: 'Trending',
  },
  {
    id: '23', name: 'Hydrating Face Moisturizer', price: 1199,
    image: pexels(3782117),
    rating: 4.5, reviewCount: 367, category: 'Beauty',
    description: 'Deep hydrating moisturizer for all skin types.', inStock: true, badge: 'New',
  },
  {
    id: '24', name: 'Rose Gold Perfume', price: 3499,
    image: pexels(1102601),
    rating: 4.8, reviewCount: 289, category: 'Beauty',
    description: 'Elegant floral fragrance with long-lasting notes.', inStock: true,
  },
  {
    id: '25', name: 'Professional Makeup Palette', price: 2199,
    image: pexels(2103800),
    rating: 4.6, reviewCount: 512, category: 'Beauty',
    description: '18-shade eyeshadow palette for every look.', inStock: true,
  },
  {
    id: '26', name: 'SPF 50 Sunscreen', price: 799, originalPrice: 999,
    image: pexels(4021772),
    rating: 4.5, reviewCount: 678, category: 'Beauty',
    description: 'Broad-spectrum sunscreen for daily UV protection.', inStock: true, badge: 'Sale',
  },
  {
    id: '27', name: 'Nail Polish Set', price: 999,
    image: pexels(2079438),
    rating: 4.4, reviewCount: 345, category: 'Beauty',
    description: '12 vibrant nail polish shades with glossy finish.', inStock: true, badge: 'Trending',
  },
  {
    id: '28', name: 'Ayurvedic Hair Oil', price: 649,
    image: pexels(3738349),
    rating: 4.6, reviewCount: 456, category: 'Beauty',
    description: 'Nourishing hair oil with natural herbs and coconut.', inStock: true,
  },
  {
    id: '29', name: 'Clay Face Mask', price: 549,
    image: pexels(4040550),
    rating: 4.3, reviewCount: 289, category: 'Beauty',
    description: 'Detoxifying clay mask for clear, smooth skin.', inStock: true, badge: 'New',
  },
  {
    id: '30', name: 'Volume Mascara', price: 899,
    image: pexels(3373716),
    rating: 4.7, reviewCount: 534, category: 'Beauty',
    description: 'Smudge-proof mascara for bold, voluminous lashes.', inStock: true,
  },
];

export const CATEGORY_ORDER = ['Clothes', 'Footwear', 'Beauty'] as const;

export const CATEGORIES = [
  {
    id: '1',
    name: 'Clothes' as const,
    icon: '👗',
    image: pexels(994523, 800, 600),
    color: 'from-pink-400 to-rose-600',
    productCount: MOCK_PRODUCTS.filter(p => p.category === 'Clothes').length,
  },
  {
    id: '2',
    name: 'Footwear' as const,
    icon: '👟',
    image: pexels(2529148, 800, 600),
    color: 'from-violet-400 to-purple-600',
    productCount: MOCK_PRODUCTS.filter(p => p.category === 'Footwear').length,
  },
  {
    id: '3',
    name: 'Beauty' as const,
    icon: '💄',
    image: pexels(4467687, 800, 600),
    color: 'from-fuchsia-400 to-pink-600',
    productCount: MOCK_PRODUCTS.filter(p => p.category === 'Beauty').length,
  },
];
