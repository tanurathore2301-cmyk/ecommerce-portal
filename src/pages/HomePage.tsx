import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiTrendingUp, FiStar, FiGift } from 'react-icons/fi';
import { MOCK_PRODUCTS, CATEGORIES } from '@data/mockProducts';
import { ProductGrid } from '@components/products';
import { Button } from '@components/common';

export const HomePage: React.FC = () => {
  const featuredProducts = MOCK_PRODUCTS.slice(0, 4);
  const bestSellers = MOCK_PRODUCTS.slice(5, 9);
  const newArrivals = MOCK_PRODUCTS.slice(10, 14);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-900 dark:to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Welcome to ShopHub
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-6">
                Discover amazing products at unbeatable prices. Shop electronics, fashion, home essentials, and more!
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/products">
                  <Button variant="secondary" size="lg" className="gap-2">
                    Start Shopping <FiArrowRight />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block"
            >
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&q=80"
                alt="Shopping"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Shop by Category</h2>
            <p className="text-gray-600 dark:text-gray-400">Browse our wide selection of categories</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/products?category=${category.name}`}>
                  <div className={`bg-gradient-to-br ${category.color} text-white p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer text-center`}>
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <h3 className="font-bold mb-1">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.productCount} products</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
                <FiStar /> Featured Products
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Hand-picked items just for you</p>
            </div>
            <Link to="/products" className="text-primary-600 dark:text-primary-400 hover:gap-2 font-medium flex items-center gap-1 transition-all">
              View All <FiArrowRight />
            </Link>
          </motion.div>
          <ProductGrid products={featuredProducts} columns={4} />
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 bg-gradient-to-r from-secondary-600 to-secondary-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <FiGift className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Limited Time Offer</h2>
            <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
              Get 25% OFF on selected items! Use code SAVE25 at checkout.
            </p>
            <Link to="/products">
              <Button variant="secondary" size="lg">
                Shop Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
              <FiTrendingUp /> Best Sellers
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Our most popular products</p>
          </motion.div>
          <ProductGrid products={bestSellers} columns={4} />
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">New Arrivals</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Check out our latest collection</p>
          </motion.div>
          <ProductGrid products={newArrivals} columns={4} />
        </div>
      </section>

      {/* Why Shop with Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Why Shop with Us?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚚',
                title: 'Free Shipping',
                description: 'Free shipping on orders over $100. Get your products delivered quickly.',
              },
              {
                icon: '💯',
                title: '100% Authentic',
                description: 'All products are genuine and sourced directly from trusted suppliers.',
              },
              {
                icon: '🔄',
                title: 'Easy Returns',
                description: '30-day return policy. Shop with confidence knowing you can easily return items.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card text-center p-6"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
