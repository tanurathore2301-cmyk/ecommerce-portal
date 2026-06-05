import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { MOCK_PRODUCTS } from '@data/mockProducts';
import { ProductGrid } from '@components/products';
import { useAppDispatch, useAppSelector } from '@hooks/useRedux';
import { setSearchQuery, setCategory, setPriceRange, setMinRating, setSortBy, resetFilters } from '@store/slices/filterSlice';
import { filterAndSortProducts } from '@utils/productUtils';
import { Button } from '@components/common';

export const ProductsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(state => state.filters);
  const [expandedFilters, setExpandedFilters] = useState({ category: true, price: true, rating: true, sort: true });

  const filteredProducts = useMemo(
    () => filterAndSortProducts(MOCK_PRODUCTS, filters.filters),
    [filters.filters]
  );

  const categories = ['Electronics', 'Fashion', 'Home & Living', 'Sports', 'Beauty'];

  const toggleFilter = (filter: keyof typeof expandedFilters) => {
    setExpandedFilters(prev => ({ ...prev, [filter]: !prev[filter] }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-2"
        >
          All Products
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Showing {filteredProducts.length} of {MOCK_PRODUCTS.length} products
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md sticky top-24">
              <h3 className="text-lg font-bold mb-4">Filters</h3>

              {/* Sort By */}
              <div className="mb-6">
                <button
                  onClick={() => toggleFilter('sort')}
                  className="flex justify-between items-center w-full font-semibold text-gray-900 dark:text-white mb-3"
                >
                  Sort By
                  {expandedFilters.sort ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {expandedFilters.sort && (
                  <div className="space-y-2">
                    {[
                      { label: 'Popularity', value: 'popularity' },
                      { label: 'Price: Low to High', value: 'price-low' },
                      { label: 'Price: High to Low', value: 'price-high' },
                      { label: 'Newest', value: 'newest' },
                      { label: 'Rating', value: 'rating' },
                    ].map(option => (
                      <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="sort"
                          value={option.value}
                          checked={filters.sortBy === option.value}
                          onChange={e => dispatch(setSortBy(e.target.value as any))}
                          className="cursor-pointer"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{option.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => toggleFilter('category')}
                  className="flex justify-between items-center w-full font-semibold text-gray-900 dark:text-white mb-3"
                >
                  Category
                  {expandedFilters.category ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {expandedFilters.category && (
                  <div className="space-y-2">
                    {categories.map(cat => (
                      <label key={cat} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.selectedCategory === cat}
                          onChange={e => dispatch(setCategory(e.target.checked ? cat : null))}
                          className="cursor-pointer"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{cat}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Filter */}
              <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => toggleFilter('price')}
                  className="flex justify-between items-center w-full font-semibold text-gray-900 dark:text-white mb-3"
                >
                  Price Range
                  {expandedFilters.price ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {expandedFilters.price && (
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-gray-600 dark:text-gray-400">Min: ${filters.priceRange[0]}</label>
                      <input
                        type="range"
                        min="0"
                        max="10000"
                        step="50"
                        value={filters.priceRange[0]}
                        onChange={e => dispatch(setPriceRange([Number(e.target.value), filters.priceRange[1]]))}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600 dark:text-gray-400">Max: ${filters.priceRange[1]}</label>
                      <input
                        type="range"
                        min="0"
                        max="10000"
                        step="50"
                        value={filters.priceRange[1]}
                        onChange={e => dispatch(setPriceRange([filters.priceRange[0], Number(e.target.value)]))}
                        className="w-full"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleFilter('rating')}
                  className="flex justify-between items-center w-full font-semibold text-gray-900 dark:text-white mb-3"
                >
                  Min Rating
                  {expandedFilters.rating ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {expandedFilters.rating && (
                  <div className="space-y-2">
                    {[0, 1, 2, 3, 4, 5].map(rating => (
                      <label key={rating} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="rating"
                          checked={filters.minRating === rating}
                          onChange={() => dispatch(setMinRating(rating))}
                          className="cursor-pointer"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {rating === 0 ? 'All Ratings' : `${rating}★ & Up`}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Reset Button */}
              <Button
                variant="outline"
                onClick={() => dispatch(resetFilters())}
                className="w-full"
              >
                Reset Filters
              </Button>
            </div>
          </motion.aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} columns={3} />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-600 dark:text-gray-400 text-lg">No products found matching your filters.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
