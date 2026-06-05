import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { useAppSelector } from '@hooks/useRedux';
import { removeToast } from '@store/slices/notificationSlice';
import { useAppDispatch } from '@hooks/useRedux';

interface ToastProps {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ id, message, type, duration = 3000 }) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        dispatch(removeToast(id));
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [id, duration, dispatch]);

  const typeStyles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className={`${typeStyles[type]} text-white px-4 py-3 rounded-lg shadow-lg flex items-center justify-between gap-3`}
    >
      <span>{message}</span>
      <button
        onClick={() => dispatch(removeToast(id))}
        className="hover:bg-white/20 p-1 rounded transition-colors"
      >
        <FiX size={18} />
      </button>
    </motion.div>
  );
};

export const ToastContainer: React.FC = () => {
  const toasts = useAppSelector(state => state.notifications.toasts);

  return (
    <div className="fixed bottom-4 right-4 space-y-2 z-50 pointer-events-none">
      <AnimatePresence>
        {toasts.map(toast => (
          <div key={toast.id} className="pointer-events-auto">
            <Toast {...toast} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};
