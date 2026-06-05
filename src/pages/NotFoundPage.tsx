import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiHome } from 'react-icons/fi';
import { Button } from '@components/common';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 to-primary-800 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-white"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-9xl font-bold mb-4 drop-shadow-lg"
        >
          404
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold mb-2">Page Not Found</h1>
        <p className="text-xl text-gray-200 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <FiHome /> Go Home
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate(-1)}
            className="gap-2"
          >
            <FiArrowLeft /> Go Back
          </Button>
        </div>

        <motion.div
          animate={{ float: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-12 text-6xl"
        >
          🛍️
        </motion.div>
      </motion.div>
    </div>
  );
};
