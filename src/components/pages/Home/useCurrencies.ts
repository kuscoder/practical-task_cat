import { useCallback, useEffect } from 'react'
import { currenciesService } from 'common/services/currencies'
import { useTypedSelector, useTypedDispatch } from 'common/store'
import { currenciesSlice, Currency, CurrenciesState } from 'common/store/currencies'

interface UseCurrenciesResponse {
   currencies: CurrenciesState
   choose: (value: Currency['id']) => void
}

export function useCurrencies(): UseCurrenciesResponse {
   const currencies = useTypedSelector(state => state.currencies)
   const dispatch = useTypedDispatch()

   const choose = useCallback(
      (value: string) => {
         dispatch(currenciesSlice.actions.choose(value))
      },
      [dispatch]
   )

   useEffect(() => {
      currenciesService
         .list()
         .then(res => {
            const list = res.data.data.map(({ id, name }) => ({ id, name }))
            dispatch(currenciesSlice.actions.initialize(list))
         })
         .catch(err => console.error(err))
   }, [dispatch])

   return {
      currencies,
      choose
   }
}
