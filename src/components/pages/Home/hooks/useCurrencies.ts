import { useCallback, useEffect } from 'react'
import { currenciesService } from 'common/services/currencies'
import { useTypedSelector, useTypedDispatch } from 'common/store'
import { currenciesSlice, Currency, CurrenciesState } from 'common/store/currencies'

interface UseCurrenciesReturns {
   currencies: CurrenciesState
   chooseCurrency: (value: Currency['id']) => void
}

// Gets and dispatchs currencies list from service to redux store
// Returns: func for choosing currency, currencies list from redux store
export function useCurrencies(): UseCurrenciesReturns {
   const currencies = useTypedSelector(state => state.currencies)
   const dispatch = useTypedDispatch()

   const chooseCurrency = useCallback(
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
      chooseCurrency
   }
}
