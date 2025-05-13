'use client'

import { ReactNode } from 'react'
import { Provider } from 'react-redux'
// import { store } from '@/redux/store'
import {store} from '../app/redux/store'
import { Toaster } from 'react-hot-toast'

const ClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      {children}
      <Toaster />
    </Provider>
  )
}

export default ClientProvider
