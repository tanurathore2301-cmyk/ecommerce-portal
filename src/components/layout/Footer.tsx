import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiMapPin, FiPhone, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { useToast } from '@hooks/useToast';

const SOCIAL_LINKS = [
  {
    href: 'https://www.facebook.com/',
    label: 'Facebook',
    icon: FiFacebook,
    hoverClass: 'hover:bg-gradient-to-br hover:from-primary-500 hover:to-secondary-500',
  },
  {
    href: 'https://twitter.com/',
    label: 'Twitter',
    icon: FiTwitter,
    hoverClass: 'hover:bg-gradient-to-br hover:from-accent-cyan hover:to-blue-500',
  },
  {
    href: 'https://www.instagram.com/',
    label: 'Instagram',
    icon: FiInstagram,
    hoverClass: 'hover:bg-gradient-to-br hover:from-accent-rose hover:to-primary-500',
  },
  {
    href: 'https://www.linkedin.com/',
    label: 'LinkedIn',
    icon: FiLinkedin,
    hoverClass: 'hover:bg-gradient-to-br hover:from-secondary-500 hover:to-accent-cyan',
  },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', to: '/about#privacy-policy' },
  { label: 'Terms of Service', to: '/about#terms-of-service' },
  { label: 'Cookie Policy', to: '/about#cookie-policy' },
  { label: 'Contact Us', to: '/about#contact-us' },
];

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
    <footer className="bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 dark:from-black dark:via-purple-950 dark:to-black text-gray-300 dark:text-gray-400 mt-20">
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
                className="px-6 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white rounded-lg font-medium transition-all hover:shadow-glow-pink"
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
              <span className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white w-6 h-6 rounded flex items-center justify-center text-sm">
                ✨
              </span>
              Styla
            </h4>
            <p className="text-sm mb-4">Your vibrant destination for fashion, lifestyle & quality products.</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <FiMapPin size={16} className="shrink-0 mt-0.5" />
                <span>Bilaspur, Chhattisgarh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone size={16} className="shrink-0" />
                <a href="tel:+919876543210" className="hover:text-primary-400 transition-colors">
                  +91 987654321
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiMail size={16} className="shrink-0" />
                <span>support@styla.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-primary-400 transition-colors">Products</Link></li>
              <li><Link to="/categories" className="hover:text-primary-400 transition-colors">Categories</Link></li>
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about#terms-of-service" className="hover:text-primary-400 transition-colors">Shipping Information</Link></li>
              <li><Link to="/about#terms-of-service" className="hover:text-primary-400 transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/about#contact-us" className="hover:text-primary-400 transition-colors">FAQ</Link></li>
              <li><Link to="/about#contact-us" className="hover:text-primary-400 transition-colors">Track Order</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              {LEGAL_LINKS.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-4 mb-4 md:mb-0">
            {SOCIAL_LINKS.map(social => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 bg-gray-800 rounded-lg transition-all hover:scale-110 ${social.hoverClass}`}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-sm text-gray-500">
            &copy; 2024 Styla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
