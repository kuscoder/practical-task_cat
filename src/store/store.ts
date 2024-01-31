import { configureStore } from '@reduxjs/toolkit'
import { currenciesSlice } from './currencies'

export const store = configureStore({
   reducer: {
      currencies: currenciesSlice.reducer
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
