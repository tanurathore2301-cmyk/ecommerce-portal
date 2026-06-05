import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks/useRedux';
import { setTheme } from './store/slices/themeSlice';
import { Header, Footer } from './components/layout';
import { ToastContainer } from './components/common';
import {
  HomePage,
  ProductsPage,
  ProductDetailPage,
  CartPage,
  WishlistPage,
  CategoriesPage,
  AboutPage,
  ContactPage,
  NotFoundPage,
} from './pages/index';

function App() {
  const dispatch = useAppDispatch();
  const isDark = useAppSelector(state => state.theme.isDark);

  useEffect(() => {
    // Set initial theme
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Router>
      <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
        <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
          <Header />
          <main className="pt-0">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
