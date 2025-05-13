'use client'

import { ReactNode } from 'react'
import { Provider } from 'react-redux'
// import { store } from '@/redux/store'
// import {store} from '../app/redux/store'
import { Toaster } from 'react-hot-toast'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../app/redux/store';
const ClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      {children}
      </PersistGate>
      <Toaster />
    </Provider>
  )
}

export default ClientProvider
