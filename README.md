# E-Commerce Frontend Application

A modern, fully responsive e-commerce platform built with React.js, Vite, TypeScript, and Tailwind CSS.

## Features

### Pages
- **Home Page**: Hero banner, featured products, best sellers, categories, promotions
- **Products Page**: Advanced filtering, sorting, search functionality
- **Product Details**: Large image gallery, product specifications, reviews, related products
- **Categories Page**: Browse products by category
- **Shopping Cart**: Cart management with quantity updates and price calculation
- **Wishlist**: Save favorite products for later
- **About Us**: Company information and values
- **Contact Us**: Contact form and information
- **404 Page**: Elegant not-found page

### Core Features
- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Product Filtering & Sorting
- ✅ Shopping Cart with localStorage persistence
- ✅ Wishlist functionality
- ✅ Search functionality
- ✅ Dark/Light mode toggle
- ✅ Toast notifications
- ✅ Redux state management
- ✅ Smooth animations (Framer Motion)
- ✅ Professional UI components
- ✅ Type-safe with TypeScript

## Tech Stack

- **Frontend**: React 18.2
- **Build Tool**: Vite 5.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: React Icons
- **HTTP Client**: Axios (ready for API integration)

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   ├── layout/          # Header, Footer
│   └── products/        # Product-specific components
├── pages/               # Page components
├── store/
│   └── slices/          # Redux slices (cart, wishlist, filters, theme, notifications)
├── hooks/               # Custom hooks
├── utils/               # Utility functions
├── types/               # TypeScript types
├── data/                # Mock data
├── styles/              # Global styles
└── App.tsx              # Main app component
```

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository
```bash
cd e-commerce
npm install
```

2. Start the development server
```bash
npm run dev
```

3. Build for production
```bash
npm run build
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types

## Features in Detail

### Shopping Cart
- Add/remove products
- Update quantities
- Real-time price calculation
- Free shipping for orders over $100
- Tax calculation (8%)
- localStorage persistence

### Product Filtering
- Filter by category
- Filter by price range
- Filter by minimum rating
- Sort by: Price, Rating, Newest, Popularity

### Responsive Design
- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px, 1440px
- CSS Grid & Flexbox layouts
- Touch-friendly interface

### Dark Mode
- System preference detection
- Toggle in header
- localStorage persistence
- Smooth transitions

### Performance
- Code splitting
- Image optimization ready
- Efficient re-renders
- localStorage caching

## Customization

### Update Brand Name
Replace "ShopHub" throughout the codebase with your brand name.

### Modify Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: { ... },
  secondary: { ... }
}
```

### Add Products
Update mock data in `src/data/mockProducts.ts`

### Integrate Backend API
Replace mock data fetching with Axios API calls in components.

## Future Enhancements

- [ ] User authentication
- [ ] Checkout process
- [ ] Payment integration
- [ ] Order tracking
- [ ] User reviews and ratings
- [ ] Product recommendations
- [ ] Admin dashboard
- [ ] Inventory management

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License

## Support

For support, email support@shophub.com or visit our contact page.

---

Built with ❤️ using React, Vite, and Tailwind CSS
