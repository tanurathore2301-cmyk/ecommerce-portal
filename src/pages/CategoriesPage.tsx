import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CATEGORIES, MOCK_PRODUCTS } from '@data/mockProducts';

export const CategoriesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-2 text-center"
        >
          Shop by Category
        </motion.h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Browse through our diverse collection of products carefully curated for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((category, index) => {
            const categoryProducts = MOCK_PRODUCTS.filter(p => p.category === category.name);
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="cursor-pointer"
                onClick={() => navigate(`/products?category=${category.name}`)}
              >
                <div className={`bg-gradient-to-br ${category.color} text-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow h-96 flex flex-col justify-between p-8`}>
                  <div>
                    <div className="text-6xl mb-4">{category.icon}</div>
                    <h2 className="text-3xl font-bold mb-2">{category.name}</h2>
                  </div>
                  <div>
                    <p className="text-xl opacity-90 font-semibold">{categoryProducts.length} Products</p>
                    <p className="text-sm opacity-75 mt-2">Click to explore →</p>
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
