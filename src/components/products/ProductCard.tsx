import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiShoppingCart, FiEye } from 'react-icons/fi';
import { Product } from '@types/index';
import { Badge, Rating, SafeImage } from '@components/common';
import { formatPrice, calculateDiscount } from '@utils/productUtils';
import { getProductImageSources } from '@utils/productImages';
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

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
    showToast(`${product.name} added to cart!`, 'success');
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
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
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="h-full"
    >
      <Link to={`/products/${product.id}`} className="block h-full group">
        <div className="h-full flex flex-col bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-gray-800 p-2.5 shadow-sm hover:shadow-glow-pink hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-purple-900 aspect-square mb-2.5">
            <SafeImage
              sources={getProductImageSources(product)}
              fallbackLabel={product.name}
              alt={product.name}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3 gap-2 pointer-events-none">
              <span className="flex items-center gap-1 text-white text-xs font-medium bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <FiEye size={12} /> Quick View
              </span>
            </div>

            {product.badge && (
              <div className="absolute top-1.5 right-1.5">
                <Badge label={product.badge} variant="primary" />
              </div>
            )}

            {product.originalPrice && (
              <div className="absolute top-1.5 left-1.5 bg-gradient-to-r from-accent-rose to-accent-orange text-white px-1.5 py-0.5 rounded-full text-[10px] font-bold shadow">
                -{calculateDiscount(product.originalPrice, product.price)}%
              </div>
            )}

            <button
              onClick={handleWishlist}
              className={`absolute bottom-1.5 right-1.5 p-1.5 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 ${
                isWishlisted
                  ? 'bg-red-500 text-white opacity-100'
                  : 'bg-white/90 text-gray-700 hover:bg-red-50'
              }`}
            >
              <FiHeart size={14} fill={isWishlisted ? 'currentColor' : 'none'} />
            </button>

            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-xs font-bold">Out of Stock</span>
              </div>
            )}
          </div>

          <div className="flex flex-col flex-grow px-0.5">
            <span className="text-[10px] font-semibold text-primary-500 uppercase tracking-wider mb-0.5">
              {product.category}
            </span>
            <h3 className="text-xs font-semibold text-gray-900 dark:text-white line-clamp-2 mb-1.5 leading-tight min-h-[2rem] group-hover:text-primary-600 transition-colors">
              {product.name}
            </h3>

            <div className="mb-1.5">
              <Rating rating={product.rating} reviewCount={product.reviewCount} size="sm" />
            </div>

            <div className="flex items-center justify-between gap-1 mt-auto">
              <div className="flex items-baseline gap-1 min-w-0">
                <span className="text-sm font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-[10px] text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="shrink-0 p-1.5 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-glow-pink hover:scale-110 transition-all disabled:opacity-40 disabled:hover:scale-100"
                aria-label="Add to cart"
              >
                <FiShoppingCart size={14} />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
