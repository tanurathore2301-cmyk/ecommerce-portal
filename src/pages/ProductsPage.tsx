import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiFilter } from 'react-icons/fi';
import { MOCK_PRODUCTS, CATEGORIES, CATEGORY_ORDER } from '@data/mockProducts';
import { ProductGrid } from '@components/products';
import { useAppDispatch, useAppSelector } from '@hooks/useRedux';
import { setCategory, setPriceRange, setMinRating, setSortBy, resetFilters } from '@store/slices/filterSlice';
import { filterAndSortProducts } from '@utils/productUtils';
import { formatPrice } from '@utils/productUtils';
import { getImageSources } from '@utils/productImages';
import { Button, SafeImage } from '@components/common';

const CATEGORIES_LIST = ['Clothes', 'Footwear', 'Beauty'] as const;

export const ProductsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(state => state.filters);
  const [searchParams] = useSearchParams();
  const [expandedFilters, setExpandedFilters] = useState({ category: true, price: true, rating: true, sort: true });

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && CATEGORIES_LIST.includes(categoryParam as typeof CATEGORIES_LIST[number])) {
      dispatch(setCategory(categoryParam));
    }
  }, [searchParams, dispatch]);

  const filteredProducts = useMemo(
    () => filterAndSortProducts(MOCK_PRODUCTS, filters.filters),
    [filters.filters]
  );

  const showGroupedSections = !filters.selectedCategory;

  const toggleFilter = (filter: keyof typeof expandedFilters) => {
    setExpandedFilters(prev => ({ ...prev, [filter]: !prev[filter] }));
  };

  const getCategoryMeta = (name: string) => CATEGORIES.find(c => c.name === name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2 text-gradient">All Products</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredProducts.length} of {MOCK_PRODUCTS.length} products
            {filters.selectedCategory && (
              <span className="ml-1">in <strong>{filters.selectedCategory}</strong></span>
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
          {/* Filters Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:sticky lg:top-24"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-gray-200 dark:border-gray-700">
                <FiFilter className="text-primary-500" />
                <h3 className="text-lg font-bold">Filters</h3>
              </div>

              {/* Sort By */}
              <div className="mb-5">
                <button
                  onClick={() => toggleFilter('sort')}
                  className="flex justify-between items-center w-full font-semibold text-gray-900 dark:text-white mb-3 text-sm"
                >
                  Sort By
                  {expandedFilters.sort ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                </button>
                {expandedFilters.sort && (
                  <div className="space-y-2.5 pl-1">
                    {[
                      { label: 'Popularity', value: 'popularity' },
                      { label: 'Price: Low to High', value: 'price-low' },
                      { label: 'Price: High to Low', value: 'price-high' },
                      { label: 'Newest', value: 'newest' },
                      { label: 'Rating', value: 'rating' },
                    ].map(option => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="sort"
                          value={option.value}
                          checked={filters.sortBy === option.value}
                          onChange={e => dispatch(setSortBy(e.target.value as typeof filters.sortBy))}
                          className="w-4 h-4 accent-primary-500 cursor-pointer shrink-0"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-primary-600 transition-colors">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-5 pb-5 border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => toggleFilter('category')}
                  className="flex justify-between items-center w-full font-semibold text-gray-900 dark:text-white mb-3 text-sm"
                >
                  Category
                  {expandedFilters.category ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                </button>
                {expandedFilters.category && (
                  <div className="space-y-2">
                    <button
                      onClick={() => dispatch(setCategory(null))}
                      className={`w-full flex items-center gap-3 p-2.5 rounded-xl border-2 transition-all text-left ${
                        !filters.selectedCategory
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-950/30'
                          : 'border-gray-200 dark:border-gray-700 hover:border-primary-300'
                      }`}
                    >
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">All Categories</span>
                    </button>
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => dispatch(setCategory(cat.name))}
                        className={`w-full flex items-center gap-3 p-2.5 rounded-xl border-2 transition-all text-left ${
                          filters.selectedCategory === cat.name
                            ? 'border-primary-500 bg-primary-50 dark:bg-primary-950/30'
                            : 'border-gray-200 dark:border-gray-700 hover:border-primary-300'
                        }`}
                      >
                        <SafeImage
                          sources={getImageSources(cat.image, cat.name, cat.name)}
                          fallbackLabel={cat.name}
                          alt={cat.name}
                          className="w-10 h-10 rounded-lg object-cover shrink-0"
                        />
                        <div className="min-w-0">
                          <span className="text-sm font-medium text-gray-800 dark:text-gray-200 block">
                            {cat.name}
                          </span>
                          <span className="text-xs text-gray-500">{cat.productCount} items</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Filter */}
              <div className="mb-5 pb-5 border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => toggleFilter('price')}
                  className="flex justify-between items-center w-full font-semibold text-gray-900 dark:text-white mb-3 text-sm"
                >
                  Price Range
                  {expandedFilters.price ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                </button>
                {expandedFilters.price && (
                  <div className="space-y-4 px-1">
                    <div className="flex justify-between items-center text-xs font-medium text-gray-600 dark:text-gray-400">
                      <span>{formatPrice(filters.priceRange[0])}</span>
                      <span>{formatPrice(filters.priceRange[1])}</span>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 dark:text-gray-400 mb-1.5 block">Minimum</label>
                      <input
                        type="range"
                        min="0"
                        max="10000"
                        step="100"
                        value={filters.priceRange[0]}
                        onChange={e => dispatch(setPriceRange([Number(e.target.value), filters.priceRange[1]]))}
                        className="w-full h-2 accent-primary-500 cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 dark:text-gray-400 mb-1.5 block">Maximum</label>
                      <input
                        type="range"
                        min="0"
                        max="10000"
                        step="100"
                        value={filters.priceRange[1]}
                        onChange={e => dispatch(setPriceRange([filters.priceRange[0], Number(e.target.value)]))}
                        className="w-full h-2 accent-primary-500 cursor-pointer"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Rating Filter */}
              <div className="mb-5">
                <button
                  onClick={() => toggleFilter('rating')}
                  className="flex justify-between items-center w-full font-semibold text-gray-900 dark:text-white mb-3 text-sm"
                >
                  Min Rating
                  {expandedFilters.rating ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                </button>
                {expandedFilters.rating && (
                  <div className="space-y-2.5 pl-1">
                    {[0, 3, 4, 5].map(rating => (
                      <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="rating"
                          checked={filters.minRating === rating}
                          onChange={() => dispatch(setMinRating(rating))}
                          className="w-4 h-4 accent-primary-500 cursor-pointer shrink-0"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-primary-600 transition-colors">
                          {rating === 0 ? 'All Ratings' : `${rating}★ & Up`}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <Button
                variant="outline"
                onClick={() => dispatch(resetFilters())}
                className="w-full"
              >
                Reset Filters
              </Button>
            </div>
          </motion.aside>

          {/* Products Area */}
          <div className="min-w-0">
            {filteredProducts.length > 0 ? (
              showGroupedSections ? (
                <div className="space-y-14">
                  {CATEGORY_ORDER.map(cat => {
                    const sectionProducts = filteredProducts.filter(p => p.category === cat);
                    if (sectionProducts.length === 0) return null;
                    const meta = getCategoryMeta(cat);
                    return (
                      <section key={cat}>
                        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                          {meta && (
                            <SafeImage
                              sources={getImageSources(meta.image, cat, cat)}
                              fallbackLabel={cat}
                              alt={cat}
                              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover shadow-md ring-2 ring-primary-200 dark:ring-primary-800 shrink-0"
                            />
                          )}
                          <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gradient">{cat}</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                              {sectionProducts.length} product{sectionProducts.length !== 1 ? 's' : ''}
                            </p>
                          </div>
                        </div>
                        <ProductGrid products={sectionProducts} columns={4} />
                      </section>
                    );
                  })}
                </div>
              ) : (
                <ProductGrid products={filteredProducts} columns={4} />
              )
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-white/60 dark:bg-gray-800/60 rounded-2xl"
              >
                <p className="text-gray-600 dark:text-gray-400 text-lg">No products found matching your filters.</p>
                <Button
                  variant="primary"
                  onClick={() => dispatch(resetFilters())}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
