import { useEffect } from 'react';
import { useAppDispatch } from './useRedux';
import { addToast, removeToast } from '@store/slices/notificationSlice';
import { ToastMessage } from '@types/index';

export const useToast = () => {
  const dispatch = useAppDispatch();

  const showToast = (message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info', duration = 3000) => {
    const id = Math.random().toString(36).substr(2, 9);
    dispatch(addToast({ message, type, duration, id }));

    if (duration > 0) {
      setTimeout(() => {
        dispatch(removeToast(id));
      }, duration);
    }
  };

  return { showToast };
};
