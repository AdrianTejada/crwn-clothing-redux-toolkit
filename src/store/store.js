import {rootReducer} from './root-reducer';

import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);


// RTK by default comes with thunk & serializable check & immutable
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(middleWares) 
});


// how to disable a specifice middleware while adding our own
// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
//     serializableCheck: false
//   }).concat(middleWares) 
// });

// how to add our own middleware and remove default middleware
// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: middleWares
// });