import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Currency, CurrenciesState } from './currencies.types'

const initialState: CurrenciesState = {
   list: [],
   choosedId: null
}

export const currenciesSlice = createSlice({
   name: 'currencies',
   initialState,
   reducers: {
      initialize(state, { payload }: PayloadAction<Currency[]>) {
         state.list = payload
         state.choosedId = payload[0]?.id ?? null
      },

      choose(state, { payload }: PayloadAction<Currency['id']>) {
         state.choosedId = payload
      }
   }
})
