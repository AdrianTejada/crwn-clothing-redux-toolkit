import { combineReducers } from '@reduxjs/toolkit';


import { userReducer } from './user/user.slice';
import { categoriesReducer } from './categories/category.slice';
import { cartReducer } from './cart/cart.slice';
import { productsApi } from './api/api.slice';

export const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
