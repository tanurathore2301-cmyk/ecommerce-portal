import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@store/index';

// Export pre-typed hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T extends (state: RootState) => unknown>(selector: T) => 
  useSelector(selector) as ReturnType<T>;
