import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null
};

export const getCategoriesMap = createAsyncThunk(
  'category/getCategoriesMap',
  async () => {
    return await getCategoriesAndDocuments('categories')
  }
)

const categoriesSlice = createSlice({
  name:'category',
  initialState: CATEGORIES_INITIAL_STATE,
  extraReducers: builder => {
    builder.addCase(getCategoriesMap.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getCategoriesMap.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
      state.error = null;
    })
    builder.addCase(getCategoriesMap.rejected, (state, action) => {
      state.isLoading = false; 
      state.categories = [];
      state.error = action.error.message;
    })
  }
});



export const categoriesReducer = categoriesSlice.reducer;