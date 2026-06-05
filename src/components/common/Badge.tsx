import React from 'react';
import clsx from 'clsx';

interface BadgeProps {
  label: string;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info';
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = 'primary' }) => {
  const variantStyles = {
    primary: 'badge-primary',
    success: 'badge-success',
    warning: 'badge-warning',
    error: 'badge-error',
    info: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200',
  };

  return <span className={clsx('badge', variantStyles[variant])}>{label}</span>;
};
