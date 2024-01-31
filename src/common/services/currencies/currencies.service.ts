import axios from 'axios'
import type { ListResponse } from './currencies.types'

export const list = () => {
   return axios.get<ListResponse>('https://api.coinbase.com/v2/currencies')
}
