import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiTrendingUp, FiGlobe } from 'react-icons/fi';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About ShopHub</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your trusted destination for quality products and exceptional shopping experiences.
          </p>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              At ShopHub, we believe that everyone deserves access to high-quality products at affordable prices.
              Our mission is to make online shopping convenient, trustworthy, and enjoyable for everyone.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We are committed to providing exceptional customer service and ensuring that every purchase
              exceeds your expectations.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80"
            alt="Mission"
            className="rounded-lg shadow-lg"
          />
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 bg-white dark:bg-gray-800 p-8 rounded-lg"
        >
          {[
            { icon: FiUsers, label: 'Happy Customers', value: '50K+' },
            { icon: FiTrendingUp, label: 'Products Sold', value: '100K+' },
            { icon: FiAward, label: 'Verified Sellers', value: '500+' },
            { icon: FiGlobe, label: 'Countries Served', value: '50+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-3 text-primary-600 dark:text-primary-400" />
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality',
                description: 'We only sell authentic, high-quality products from trusted suppliers.',
              },
              {
                title: 'Trust',
                description: 'Your satisfaction and trust are our top priorities. Transparent dealings always.',
              },
              {
                title: 'Innovation',
                description: 'We constantly improve our platform to provide the best shopping experience.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center"
              >
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};
