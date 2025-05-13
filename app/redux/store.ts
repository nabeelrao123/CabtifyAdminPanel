// app/store.ts
import { configureStore, UnknownAction } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import colorReducer from './colorSlice'; 


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    color: colorReducer,
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


