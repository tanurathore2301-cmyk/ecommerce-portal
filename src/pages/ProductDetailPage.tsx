import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiShoppingCart, FiHeart, FiShare2 } from 'react-icons/fi';
import { MOCK_PRODUCTS } from '@data/mockProducts';
import { ProductGrid } from '@components/products';
import { Button, Rating } from '@components/common';
import { useAppDispatch, useAppSelector } from '@hooks/useRedux';
import { addToCart } from '@store/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '@store/slices/wishlistSlice';
import { useToast } from '@hooks/useToast';
import { formatPrice } from '@utils/productUtils';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { showToast } = useToast();
  
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  const wishlistItems = useAppSelector(state => state.wishlist.items);
  const isWishlisted = product ? wishlistItems.some(item => item.id === product.id) : false;
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => navigate('/products')}>Back to Products</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product));
    }
    showToast(`Added ${quantity} item(s) to cart!`, 'success');
    setQuantity(1);
  };

  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id));
      showToast('Removed from wishlist', 'info');
    } else {
      dispatch(addToWishlist(product));
      showToast('Added to wishlist', 'success');
    }
  };

  const images = product.images || [product.image];
  const relatedProducts = MOCK_PRODUCTS.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex gap-2 text-sm mb-8 text-gray-600 dark:text-gray-400"
        >
          <button onClick={() => navigate('/')} className="hover:text-primary-600">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/products')} className="hover:text-primary-600">Products</button>
          <span>/</span>
          <span>{product.name}</span>
        </motion.nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full aspect-square object-cover rounded"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-16 h-16 rounded border-2 transition-colors ${
                    selectedImage === idx
                      ? 'border-primary-600'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover rounded" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              
              <Rating rating={product.rating} reviewCount={product.reviewCount} size="lg" />

              <div className="flex items-center gap-4 my-6 py-4 border-y border-gray-200 dark:border-gray-700">
                <div>
                  <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through ml-2">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                {product.inStock ? (
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded font-medium text-sm">
                    In Stock
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded font-medium text-sm">
                    Out of Stock
                  </span>
                )}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">{product.description}</p>

              {product.features && (
                <div className="mb-6">
                  <h3 className="font-bold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-primary-600">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quantity & Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-medium">Quantity:</span>
                  <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <FiChevronLeft />
                    </button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <FiChevronRight />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="gap-2"
                  >
                    <FiShoppingCart /> Add to Cart
                  </Button>
                  <Button
                    variant={isWishlisted ? 'primary' : 'outline'}
                    size="lg"
                    onClick={handleWishlist}
                    className="gap-2"
                  >
                    <FiHeart fill={isWishlisted ? 'currentColor' : 'none'} /> Wishlist
                  </Button>
                </div>

                <Button variant="ghost" size="lg" className="w-full gap-2">
                  <FiShare2 /> Share Product
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Related Products</h2>
            <ProductGrid products={relatedProducts} columns={4} />
          </div>
        )}
      </div>
    </div>
  );
};
