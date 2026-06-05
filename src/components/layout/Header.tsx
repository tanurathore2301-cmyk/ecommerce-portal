import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSearch, FiHeart, FiShoppingCart, FiSun, FiMoon, FiLogOut } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '@hooks/useRedux';
import { setSearchQuery } from '@store/slices/filterSlice';
import { toggleTheme } from '@store/slices/themeSlice';
import { logout } from '@store/slices/authSlice';
import { Button } from '@components/common';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const cartItems = useAppSelector(state => state.cart.items);
  const wishlistItems = useAppSelector(state => state.wishlist.items);
  const isDark = useAppSelector(state => state.theme.isDark);
  const { user, isAuthenticated } = useAppSelector(state => state.auth);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlistItems.length;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      dispatch(setSearchQuery(searchInput));
      navigate(`/products?search=${searchInput}`);
      setSearchInput('');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Categories', href: '/categories' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-primary-200 dark:border-gray-800 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl md:text-2xl group shrink-0">
            <span className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white w-8 h-8 rounded-lg flex items-center justify-center shadow-glow-pink group-hover:animate-wiggle">
              ✨
            </span>
            <span className="text-gradient hidden sm:inline">Styla</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive(link.href)
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search Bar (Desktop) */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-1.5 flex-1 max-w-xs">
            <input
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              className="bg-transparent outline-none text-sm flex-1 min-w-0"
            />
            <button type="submit" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 shrink-0">
              <FiSearch size={16} />
            </button>
          </form>

          {/* Right Section */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Auth Buttons — Desktop */}
            <div className="hidden sm:flex items-center gap-2 mr-1">
              {isAuthenticated && user ? (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300 hidden md:inline max-w-[80px] truncate">
                    Hi, {user.name}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="p-1.5 text-gray-600 dark:text-gray-400 hover:text-red-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    title="Log out"
                  >
                    <FiLogOut size={16} />
                  </button>
                </div>
              ) : (
                <Link to="/login">
                  <Button variant="primary" size="sm" className="text-xs px-3 py-1.5 h-auto">
                    Log In
                  </Button>
                </Link>
              )}
            </div>

            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-1.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            <Link
              to="/wishlist"
              className="relative p-1.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <FiHeart size={18} />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              className="relative p-1.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <FiShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-primary-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-1.5 text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="md:hidden pb-3 flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-1.5">
          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            className="bg-transparent outline-none text-sm flex-1"
          />
          <button type="submit" className="text-gray-600 dark:text-gray-400">
            <FiSearch size={16} />
          </button>
        </form>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 dark:border-gray-800"
            >
              <div className="flex flex-col gap-1 py-3">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2 px-4 flex flex-col gap-2">
                  {isAuthenticated && user ? (
                    <>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Signed in as {user.name}</span>
                      <button
                        onClick={handleLogout}
                        className="text-sm font-medium text-red-500 text-left py-1"
                      >
                        Log Out
                      </button>
                    </>
                  ) : (
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="primary" size="sm" className="w-full text-xs">Log In</Button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
