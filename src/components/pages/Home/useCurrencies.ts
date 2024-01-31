import { useCallback, useEffect, useMemo } from 'react'
import { currenciesService } from 'common/services/currencies'
import { useTypedSelector, useTypedDispatch } from 'common/store'
import { currenciesSlice, Currency, CurrenciesState } from 'common/store/currencies'
import { Option } from 'components/shared/Select'

interface UseCurrenciesResponse {
   currencies: CurrenciesState
   choose: (value: Currency['id']) => void
   options: Option[]
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

   const options = useMemo<Option[]>(
      () => currencies.list.map(currency => ({ value: currency.id, label: currency.id })),
      [currencies.list]
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
      choose,
      options
   }
}
