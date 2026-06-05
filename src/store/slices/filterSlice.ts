import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchFilter } from '@types/index';

interface FilterState {
  searchQuery: string;
  selectedCategory: string | null;
  priceRange: [number, number];
  minRating: number;
  sortBy: 'price-low' | 'price-high' | 'newest' | 'popularity' | 'rating';
  filters: SearchFilter;
}

const initialState: FilterState = {
  searchQuery: '',
  selectedCategory: null,
  priceRange: [0, 10000],
  minRating: 0,
  sortBy: 'popularity',
  filters: {
    query: '',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.filters.query = action.payload;
    },

    setCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
      state.filters.category = action.payload || undefined;
    },

    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
      state.filters.priceRange = action.payload;
    },

    setMinRating: (state, action: PayloadAction<number>) => {
      state.minRating = action.payload;
      state.filters.rating = action.payload;
    },

    setSortBy: (state, action: PayloadAction<'price-low' | 'price-high' | 'newest' | 'popularity' | 'rating'>) => {
      state.sortBy = action.payload;
      state.filters.sortBy = action.payload;
    },

    resetFilters: (state) => {
      state.searchQuery = '';
      state.selectedCategory = null;
      state.priceRange = [0, 10000];
      state.minRating = 0;
      state.sortBy = 'popularity';
      state.filters = {
        query: '',
      };
    },
  },
});

export const { setSearchQuery, setCategory, setPriceRange, setMinRating, setSortBy, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
