import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiTrash2 } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '@hooks/useRedux';
import { removeFromWishlist, clearWishlist, addToWishlist } from '@store/slices/wishlistSlice';
import { addToCart } from '@store/slices/cartSlice';
import { Button, SafeImage } from '@components/common';
import { getProductImageSources } from '@utils/productImages';
import { formatPrice } from '@utils/productUtils';
import { useToast } from '@hooks/useToast';

export const WishlistPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const wishlistItems = useAppSelector(state => state.wishlist.items);

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromWishlist(id));
    showToast('Removed from wishlist', 'info');
  };

  const handleAddToCart = (id: string) => {
    const item = wishlistItems.find(w => w.id === id);
    if (item) {
      dispatch(addToCart(item.product));
      showToast(`${item.product.name} added to cart!`, 'success');
    }
  };

  const handleClearWishlist = () => {
    if (window.confirm('Are you sure you want to clear your wishlist?')) {
      dispatch(clearWishlist());
      showToast('Wishlist cleared', 'info');
    }
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold mb-2">Your Wishlist is Empty</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Add your favorite products to your wishlist!</p>
            <Button onClick={() => navigate('/products')} size="lg" className="gap-2">
              <FiArrowLeft /> Start Shopping
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8"
        >
          My Wishlist ({wishlistItems.length} items)
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {wishlistItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <SafeImage
                sources={getProductImageSources(item.product)}
                fallbackLabel={item.product.name}
                alt={item.product.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold text-sm mb-2 line-clamp-2">{item.product.name}</h3>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                    {formatPrice(item.product.price)}
                  </span>
                  {item.product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {formatPrice(item.product.originalPrice)}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleAddToCart(item.id)}
                    className="flex-1"
                  >
                    Add to Cart
                  </Button>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-100 dark:hover:bg-red-900 rounded"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 flex gap-4">
          <Button
            variant="ghost"
            onClick={handleClearWishlist}
            className="text-red-500 hover:text-red-700"
          >
            Clear Wishlist
          </Button>
          <Button onClick={() => navigate('/products')} className="gap-2">
            <FiArrowLeft /> Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};
