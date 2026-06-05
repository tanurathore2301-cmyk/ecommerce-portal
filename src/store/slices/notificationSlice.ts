import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToastMessage } from '@types/index';

interface NotificationState {
  toasts: ToastMessage[];
}

const initialState: NotificationState = {
  toasts: [],
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<Omit<ToastMessage, 'id'>>) => {
      const id = Math.random().toString(36).substr(2, 9);
      state.toasts.push({
        ...action.payload,
        id,
      });
    },

    removeToast: (state, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter(toast => toast.id !== action.payload);
    },

    clearToasts: (state) => {
      state.toasts = [];
    },
  },
});

export const { addToast, removeToast, clearToasts } = notificationSlice.actions;
export default notificationSlice.reducer;
