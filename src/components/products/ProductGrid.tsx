import React from 'react';
import { Product } from '@types/index';
import { ProductCard } from './ProductCard';
import { motion } from 'framer-motion';

interface ProductGridProps {
  products: Product[];
  columns?: 1 | 2 | 3 | 4 | 5;
  isLoading?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, columns = 4, isLoading = false }) => {
  const colsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`grid ${colsClass[columns]} gap-4`}
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
};
