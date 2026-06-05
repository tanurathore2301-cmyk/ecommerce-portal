# ShopHub E-Commerce Frontend - Setup and Development Guide

## Project Overview

This is a production-ready, fully responsive e-commerce frontend application built with React.js + Vite + TypeScript + Tailwind CSS. It features 10+ pages, advanced product filtering, shopping cart with persistence, wishlist, dark mode, animations, and more.

## Installation & Setup

### Prerequisites
- Node.js 16.0+
- npm 8.0+

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React 18.2
- Vite 5.0
- TypeScript
- Tailwind CSS
- Redux Toolkit
- Framer Motion
- React Router DOM
- React Icons

### Step 2: Start Development Server

```bash
npm run dev
```

The application will open automatically at `http://localhost:5173`

### Step 3: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Project Structure

```
e-commerce/
├── src/
│   ├── components/
│   │   ├── common/                    # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Skeleton.tsx
│   │   │   ├── Toast.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Rating.tsx
│   │   │   └── index.ts
│   │   ├── layout/                    # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   └── products/                  # Product components
│   │       ├── ProductCard.tsx
│   │       ├── ProductGrid.tsx
│   │       └── index.ts
│   ├── pages/                         # Page components
│   │   ├── HomePage.tsx
│   │   ├── ProductsPage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   ├── CartPage.tsx
│   │   ├── WishlistPage.tsx
│   │   ├── CategoriesPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── NotFoundPage.tsx
│   │   └── index.ts
│   ├── store/                         # Redux store
│   │   ├── slices/
│   │   │   ├── cartSlice.ts
│   │   │   ├── wishlistSlice.ts
│   │   │   ├── filterSlice.ts
│   │   │   ├── themeSlice.ts
│   │   │   └── notificationSlice.ts
│   │   └── index.ts
│   ├── hooks/                         # Custom hooks
│   │   ├── useRedux.ts
│   │   ├── useToast.ts
│   │   └── index.ts
│   ├── utils/                         # Utility functions
│   │   └── productUtils.ts
│   ├── types/                         # TypeScript types
│   │   └── index.ts
│   ├── data/                          # Mock data
│   │   └── mockProducts.ts
│   ├── styles/                        # Global styles
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── .eslintrc.cjs
├── .gitignore
└── README.md
```

## Available Pages

1. **Home Page** (`/`)
   - Hero banner with call-to-action
   - Featured products showcase
   - Category browsing
   - Best sellers section
   - New arrivals section
   - Promotional banners
   - Why shop with us section

2. **Products Page** (`/products`)
   - Advanced product filtering (category, price, rating)
   - Multi-option sorting
   - Search functionality
   - Product grid with responsive layout
   - Filter persistence

3. **Product Details Page** (`/products/:id`)
   - Large product image gallery
   - Detailed product information
   - Customer reviews and ratings
   - Quantity selector
   - Add to cart and wishlist buttons
   - Related products section

4. **Cart Page** (`/cart`)
   - View all cart items
   - Update quantities
   - Remove items
   - Order summary with shipping and tax calculation
   - Checkout button
   - Proceed to checkout

5. **Wishlist Page** (`/wishlist`)
   - View saved products
   - Move items to cart
   - Remove items
   - Continue shopping

6. **Categories Page** (`/categories`)
   - Browse all product categories
   - Category statistics
   - Quick category navigation

7. **About Page** (`/about`)
   - Company mission and values
   - Company statistics
   - Why choose us section

8. **Contact Page** (`/contact`)
   - Contact information
   - Contact form
   - Location, phone, email

9. **404 Page** (`/not-found`)
   - Elegant not-found page
   - Navigation back to home

## Key Features

### 1. Advanced Shopping Cart
- Add/remove products
- Update quantities
- Real-time price calculation
- Automatic shipping calculation (free over $100)
- Tax calculation (8%)
- localStorage persistence (survives page refresh)
- Cart item counter in header

### 2. Product Filtering & Sorting
- Filter by category (Electronics, Fashion, Home & Living, Sports, Beauty)
- Filter by price range (with slider)
- Filter by minimum rating
- Sort options:
  - Popularity (default)
  - Price Low to High
  - Price High to Low
  - Newest
  - Rating

### 3. Wishlist Management
- Add/remove products to wishlist
- Move items from wishlist to cart
- Wishlist item counter in header
- localStorage persistence

### 4. Dark Mode
- Toggle dark/light mode in header
- System preference detection
- localStorage persistence
- Smooth theme transitions
- Tailwind dark mode CSS

### 5. Responsive Design
- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px, 1440px
- CSS Grid for layouts
- Flexbox for components
- Touch-friendly UI elements
- Adaptive navigation (hamburger menu on mobile)

### 6. State Management (Redux Toolkit)
- **Cart Slice**: Manages shopping cart state
- **Wishlist Slice**: Manages wishlist items
- **Filter Slice**: Manages search and product filters
- **Theme Slice**: Manages dark/light mode
- **Notification Slice**: Manages toast notifications

### 7. User Feedback
- Toast notifications for:
  - Added to cart
  - Added to wishlist
  - Removed from cart
  - Form submissions
- Custom useToast hook for easy integration

### 8. Animations
- Page transitions
- Component entrance animations
- Smooth hover effects
- Loading skeletons
- Floating animations
- Shimmer effects

## Configuration Guide

### Customize Brand Name

Find and replace "ShopHub" throughout:
- `src/App.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `index.html`
- `tailwind.config.js`

### Update Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        // ... modify these colors
      },
      secondary: {
        // ... modify these colors
      },
    },
  },
},
```

### Add New Products

Edit `src/data/mockProducts.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  price: 99.99,
  originalPrice: 129.99,
  image: 'https://...',
  rating: 4.5,
  reviewCount: 123,
  category: 'Electronics', // or 'Fashion', 'Home & Living', 'Sports', 'Beauty'
  description: 'Product description',
  inStock: true,
}
```

### Modify Categories

Edit `src/data/mockProducts.ts` CATEGORIES array to add or modify categories.

## API Integration Guide

Currently, the app uses mock data. To integrate with a backend API:

1. Install axios (already included):
```bash
npm install axios
```

2. Create an API service in `src/utils/api.ts`:
```typescript
import axios from 'axios';

const API_BASE_URL = 'https://your-api.com';

export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};
```

3. Replace mock data with API calls in pages/components using the `useEffect` hook.

## Performance Optimization Tips

1. **Code Splitting**: Pages are automatically code-split by Vite
2. **Image Optimization**: Consider using Cloudinary or similar for image optimization
3. **Lazy Loading**: Implement React.lazy() for pages
4. **State Optimization**: Use Redux selectors to prevent unnecessary re-renders
5. **Build Optimization**: Vite provides excellent production builds with tree-shaking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Workflow

### Add a New Page

1. Create component in `src/pages/NewPage.tsx`
2. Export it from `src/pages/index.ts`
3. Add route in `src/App.tsx`
4. Update navigation in Header if needed

### Add a New Component

1. Create in `src/components/common/NewComponent.tsx`
2. Export from `src/components/common/index.ts`
3. Use in pages or other components

### Add Redux State

1. Create slice in `src/store/slices/newSlice.ts`
2. Add to store in `src/store/index.ts`
3. Use hooks in components

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Module Not Found
Clear `node_modules` and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Check TypeScript errors:
```bash
npm run type-check
```

## Deployment

### Build
```bash
npm run build
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
1. Run `npm run build`
2. Connect your git repository to Netlify
3. Set build command to `npm run build`
4. Set publish directory to `dist`

### Deploy to GitHub Pages
Update `vite.config.ts` with your repository name and build:
```bash
npm run build
npm i -g gh-pages
gh-pages -d dist
```

## Scripts Cheatsheet

- `npm run dev` - Start dev server (port 5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Check code quality
- `npm run type-check` - Check TypeScript types

## Environment Variables

Create `.env` file for API endpoints:

```
VITE_API_URL=https://api.example.com
VITE_APP_NAME=ShopHub
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Contributing

When contributing:
1. Follow the existing code structure
2. Use TypeScript
3. Add comments for complex logic
4. Test responsive design
5. Test dark mode
6. Ensure TypeScript compilation passes

## Future Enhancements

- [ ] User authentication
- [ ] Product reviews and ratings system
- [ ] Order history
- [ ] Multiple payment methods
- [ ] Checkout process
- [ ] Email notifications
- [ ] Product recommendations
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Analytics tracking

## Support & Issues

For issues or questions:
1. Check existing documentation
2. Review the code comments
3. Check browser console for errors
4. Ensure Node.js version is 16+

## License

MIT License - Free to use and modify

## Contact

- Website: https://shophub.example.com
- Email: support@shophub.com
- Phone: +1 (555) 123-4567

---

**Built with ❤️ using React, Vite, and Tailwind CSS**

Last Updated: June 2024
