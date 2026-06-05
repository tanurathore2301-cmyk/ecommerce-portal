import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiMapPin, FiPhone, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { useToast } from '@hooks/useToast';

export const Footer: React.FC = () => {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      showToast('Thanks for subscribing!', 'success');
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 mt-20">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-sm mb-4">Get exclusive deals and latest updates delivered to your inbox.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-2 bg-gray-800 dark:bg-gray-700 rounded-lg text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="bg-primary-600 text-white w-6 h-6 rounded flex items-center justify-center text-sm">
                🛍️
              </span>
              ShopHub
            </h4>
            <p className="text-sm mb-4">Your one-stop shop for quality products at great prices.</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <FiMapPin size={16} />
                <span>123 Shopping Street, NY 10001</span>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMail size={16} />
                <span>support@shophub.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-primary-400 transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-4 mb-4 md:mb-0">
            <a
              href="#"
              className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors"
              aria-label="Facebook"
            >
              <FiFacebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors"
              aria-label="Twitter"
            >
              <FiTwitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors"
              aria-label="Instagram"
            >
              <FiInstagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
          </div>

          <p className="text-sm text-gray-500">
            &copy; 2024 ShopHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
