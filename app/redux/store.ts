// app/store.ts
import { configureStore, UnknownAction } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import colorReducer from './colorSlice'; 
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, colorReducer);

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // color: colorReducer,

    //code after prisist
    color: persistedReducer,
   
  },
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(apiSlice.middleware),

  // code after presist
  getDefaultMiddleware({
    serializableCheck:{
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
  }).concat(apiSlice.middleware),



});


export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


