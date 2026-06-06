import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiTrash2, FiArrowLeft } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '@hooks/useRedux';
import { removeFromCart, updateQuantity, clearCart } from '@store/slices/cartSlice';
import { Button, SafeImage } from '@components/common';
import { getProductImageSources } from '@utils/productImages';
import { formatPrice, getShippingCost, calculateTax } from '@utils/productUtils';
import { useToast } from '@hooks/useToast';

export const CartPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const cartItems = useAppSelector(state => state.cart.items);
  const subtotal = useAppSelector(state => state.cart.totalPrice);
  
  const shipping = getShippingCost(subtotal);
  const tax = calculateTax(subtotal);
  const total = subtotal + shipping + tax;

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
    showToast('Item removed from cart', 'info');
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      dispatch(clearCart());
      showToast('Cart cleared', 'info');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold mb-2">Your Cart is Empty</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Add some products to get started!</p>
            <Button onClick={() => navigate('/products')} size="lg" className="gap-2">
              <FiArrowLeft /> Continue Shopping
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
          Shopping Cart ({cartItems.length} items)
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 flex gap-4"
                >
                  <SafeImage
                    sources={getProductImageSources(item.product)}
                    fallbackLabel={item.product.name}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded"
                  />

                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{item.product.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {formatPrice(item.product.price)} each
                    </p>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))
                        }
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                      >
                        −
                      </button>
                      <span className="px-4 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                        }
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-lg mb-4">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 p-2"
                    >
                      <FiTrash2 size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <Button
              variant="ghost"
              onClick={handleClearCart}
              className="mt-4 text-red-500 hover:text-red-700"
            >
              Clear Cart
            </Button>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="space-y-3 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'FREE' : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax</span>
                  <span className="font-medium">{formatPrice(tax)}</span>
                </div>
              </div>

              <div className="flex justify-between mb-6 text-lg font-bold">
                <span>Total</span>
                <span className="text-primary-600 dark:text-primary-400">{formatPrice(total)}</span>
              </div>

              <Button variant="primary" size="lg" className="w-full mb-2">
                Proceed to Checkout
              </Button>

              <Button
                variant="ghost"
                size="lg"
                onClick={() => navigate('/products')}
                className="w-full gap-2"
              >
                <FiArrowLeft /> Continue Shopping
              </Button>

              {shipping === 0 && (
                <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded text-sm">
                  🎉 You qualified for FREE shipping!
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
