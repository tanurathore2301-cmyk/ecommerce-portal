import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CATEGORIES, MOCK_PRODUCTS } from '@data/mockProducts';

export const CategoriesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-2 text-center text-gradient"
        >
          Shop by Category
        </motion.h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Explore our three curated collections — clothes, footwear, and beauty.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((category, index) => {
            const categoryProducts = MOCK_PRODUCTS.filter(p => p.category === category.name);
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="cursor-pointer group"
                onClick={() => navigate(`/products?category=${category.name}`)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-glow-purple transition-all duration-300 h-[420px]">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70 group-hover:opacity-80 transition-opacity`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                    <span className="text-4xl mb-3">{category.icon}</span>
                    <h2 className="text-3xl font-bold mb-1">{category.name}</h2>
                    <p className="text-lg opacity-90 font-medium">{categoryProducts.length} Products</p>
                    <p className="text-sm opacity-75 mt-2 group-hover:translate-x-1 transition-transform">
                      Explore collection →
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
