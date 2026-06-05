import React from 'react';
import clsx from 'clsx';

interface RatingProps {
  rating: number;
  reviewCount: number;
  size?: 'sm' | 'md' | 'lg';
}

export const Rating: React.FC<RatingProps> = ({ rating, reviewCount, size = 'md' }) => {
  const sizeStyles = {
    sm: 'text-xs gap-0.5',
    md: 'text-sm gap-1',
    lg: 'text-base gap-1.5',
  };

  return (
    <div className={clsx('flex items-center', sizeStyles[size])}>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}
          >
            ★
          </span>
        ))}
      </div>
      <span className="text-gray-600 dark:text-gray-400">
        {rating} ({reviewCount})
      </span>
    </div>
  );
};
