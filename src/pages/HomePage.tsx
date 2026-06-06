import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiTrendingUp, FiStar, FiGift, FiZap } from 'react-icons/fi';
import { MOCK_PRODUCTS, CATEGORIES } from '@data/mockProducts';
import { ProductGrid } from '@components/products';
import { HERO_IMAGE, getImageSources, getProductImageSources } from '@utils/productImages';
import { Button, SafeImage } from '@components/common';

export const HomePage: React.FC = () => {
  const clothesProducts = MOCK_PRODUCTS.filter(p => p.category === 'Clothes');
  const footwearProducts = MOCK_PRODUCTS.filter(p => p.category === 'Footwear');
  const beautyProducts = MOCK_PRODUCTS.filter(p => p.category === 'Beauty');
  const featuredProducts = [...clothesProducts.slice(0, 3), ...footwearProducts.slice(0, 3), ...beautyProducts.slice(0, 2)];
  const bestSellers = MOCK_PRODUCTS.filter(p => p.badge === 'Trending' || p.badge === 'Sale').slice(0, 8);
  const newArrivals = MOCK_PRODUCTS.filter(p => p.badge === 'New').slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Limited Time Offer — Top Banner */}
      <section className="offer-banner bg-gradient-to-r from-accent-orange via-primary-500 to-secondary-600 text-white py-3 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center sm:text-left"
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FiGift className="w-5 h-5 inline" />
            </motion.span>
            <p className="text-sm md:text-base font-semibold">
              <span className="inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-xs mr-2 animate-pulse">
                <FiZap className="w-3 h-3" /> LIMITED OFFER
              </span>
              Get 25% OFF on selected items! Use code <strong className="text-yellow-200">SAVE25</strong>
            </p>
            <Link to="/products">
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white/20 text-xs sm:text-sm">
                Grab Deal <FiArrowRight />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-cyan text-white py-24">
        <div className="blob w-72 h-72 bg-accent-yellow top-10 left-10 animate-float" />
        <div className="blob w-96 h-96 bg-accent-rose bottom-0 right-10 animate-float-delayed" />
        <div className="blob w-64 h-64 bg-accent-cyan top-1/2 left-1/3 animate-pulse-subtle" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-4"
              >
                ✨ New Season Collection
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Welcome to{' '}
                <span className="text-yellow-300 drop-shadow-lg">Styla</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                Discover vibrant fashion, stunning accessories & lifestyle essentials — curated for the bold & beautiful!
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/products">
                  <Button variant="secondary" size="lg" className="gap-2 shadow-glow-purple">
                    Start Shopping <FiArrowRight />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden md:block relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-rose rounded-2xl blur-xl opacity-40 animate-glow-pulse" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="rounded-2xl shadow-2xl relative z-10 border-4 border-white/30 overflow-hidden"
              >
                <SafeImage
                  sources={getImageSources(HERO_IMAGE, 'Styla Fashion')}
                  fallbackLabel="Styla"
                  alt="Shopping"
                  className="w-full h-full object-cover min-h-[320px]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">Browse by Category</h2>
            <p className="text-gray-600 dark:text-gray-400">Explore our colourful collection</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CATEGORIES.map((category, index) => {
              const categoryProducts = MOCK_PRODUCTS.filter(p => p.category === category.name).slice(0, 4);
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <Link to={`/products?category=${category.name}`}>
                    <div className="relative rounded-2xl overflow-hidden h-56 md:h-64 hover:shadow-glow-purple transition-all duration-300 group">
                      <SafeImage
                        sources={getImageSources(category.image, category.name, category.name)}
                        fallbackLabel={category.name}
                        alt={category.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                        <span className="text-3xl mb-1">{category.icon}</span>
                        <h3 className="font-bold text-xl mb-0.5">{category.name}</h3>
                        <p className="text-sm opacity-90">{category.productCount} products</p>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                        {categoryProducts.map(product => (
                          <SafeImage
                            key={product.id}
                            sources={getProductImageSources(product)}
                            fallbackLabel={product.name}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg border border-white/70 object-cover"
                          />
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
                <FiStar className="text-accent-yellow" /> Featured Products
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Hand-picked items just for you</p>
            </div>
            <Link to="/products" className="text-primary-600 dark:text-primary-400 hover:gap-2 font-medium flex items-center gap-1 transition-all hover:text-secondary-600">
              View All <FiArrowRight />
            </Link>
          </motion.div>
          <ProductGrid products={featuredProducts} columns={4} />
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
              <FiTrendingUp className="text-accent-cyan" /> Best Sellers
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Our most popular products</p>
          </motion.div>
          <ProductGrid products={bestSellers} columns={4} />
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 via-pink-50 to-cyan-50 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">New Arrivals</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Check out our latest collection</p>
          </motion.div>
          <ProductGrid products={newArrivals} columns={4} />
        </div>
      </section>

      {/* Why Styla Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient"
          >
            Why Choose Styla?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚚',
                title: 'Free Shipping',
                description: 'Free shipping on orders over ₹8,000. Get your products delivered quickly.',
                color: 'from-pink-500 to-rose-500',
              },
              {
                icon: '💯',
                title: '100% Authentic',
                description: 'All products are genuine and sourced directly from trusted suppliers.',
                color: 'from-violet-500 to-purple-500',
              },
              {
                icon: '🔄',
                title: 'Easy Returns',
                description: '30-day return policy. Shop with confidence knowing you can easily return items.',
                color: 'from-cyan-500 to-blue-500',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card text-center p-6 relative overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                <div className="text-4xl mb-4 group-hover:animate-bounce-slow">{item.icon}</div>
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
