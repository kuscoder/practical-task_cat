import 'styles/fonts.scss'
import 'styles/normalize.scss'
import 'styles/main.scss'
import 'styles/common.scss'

import { FC, useEffect } from 'react'
import { useTypedSelector, useTypedDispatch } from './store'
import { currenciesSlice, Currency } from './store/currencies'
import css from './App.module.scss'

export const App: FC = () => {
   const currencies = useTypedSelector(state => state.currencies)
   const dispatch = useTypedDispatch()

   useEffect(() => {
      const mock: Currency[] = [
         { id: 'AED', name: 'United Arab Emirates Dirham' },
         { id: 'RUB', name: 'Russian Ruble' }
      ]

      dispatch(currenciesSlice.actions.initialize(mock))
   }, [])

   return (
      <div className={css.container}>
         <h1>Hello World!</h1>

         <p>Choosed Id: {currencies.choosedId}</p>

         <ul>
            {currencies.list.map(item => (
               <li key={item.id}>
                  <button type="button" onClick={() => dispatch(currenciesSlice.actions.choose(item.id))}>
                     {item.id} - {item.name}
                  </button>
               </li>
            ))}
         </ul>
      </div>
   )
}
