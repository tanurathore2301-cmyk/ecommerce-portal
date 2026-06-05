import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  width?: string;
  height?: string;
  variant?: 'text' | 'avatar' | 'card' | 'circular';
  count?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({ width, height, variant = 'text', count = 1 }) => {
  const variantStyles = {
    text: 'h-4 w-full',
    avatar: 'w-12 h-12 rounded-full',
    card: 'w-full h-48 rounded-lg',
    circular: 'w-16 h-16 rounded-full',
  };

  const skeletons = Array(count).fill(0).map((_, i) => (
    <motion.div
      key={i}
      className={`skeleton animate-shimmer ${variantStyles[variant]} ${width} ${height}`}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  ));

  return <div className="space-y-2">{skeletons}</div>;
};
