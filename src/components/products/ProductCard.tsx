import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { Product } from '@types/index';
import { Badge, Rating } from '@components/common';
import { formatPrice, calculateDiscount } from '@utils/productUtils';
import { useAppDispatch, useAppSelector } from '@hooks/useRedux';
import { addToCart } from '@store/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '@store/slices/wishlistSlice';
import { useToast } from '@hooks/useToast';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { showToast } = useToast();
  const wishlistItems = useAppSelector(state => state.wishlist.items);
  const isWishlisted = wishlistItems.some(item => item.id === product.id);
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(addToCart(product));
    showToast(`${product.name} added to cart!`, 'success');
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id));
      showToast('Removed from wishlist', 'info');
    } else {
      dispatch(addToWishlist(product));
      showToast('Added to wishlist', 'success');
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="card-hover h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 aspect-square">
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-2 right-2">
            <Badge label={product.badge} variant="primary" />
          </div>
        )}

        {/* Discount Badge */}
        {product.originalPrice && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
            -{calculateDiscount(product.originalPrice, product.price)}%
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className={`absolute bottom-2 right-2 p-2 rounded-full transition-colors ${
            isWishlisted
              ? 'bg-red-500 text-white'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <FiHeart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
        </button>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-bold">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 mb-1">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mb-2">
          <Rating rating={product.rating} reviewCount={product.reviewCount} size="sm" />
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="mt-auto w-full btn btn-primary gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FiShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};
