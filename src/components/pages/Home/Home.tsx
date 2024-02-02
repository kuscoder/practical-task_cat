import { FC } from 'react'
import { Select } from 'components/shared/Select'
import { useCurrencies } from './hooks/useCurrencies'
import { useOptionsFromCurrenciesList } from './hooks/useCurrenciesOptions'
import Kitten from 'public/assets/Kitten.png'
import css from './Home.module.scss'

const Home: FC = () => {
   const { currencies, chooseCurrency } = useCurrencies()
   const options = useOptionsFromCurrenciesList()

   const { list, choosedId } = currencies
   const choosedCurrency = list.find(currency => currency.id === choosedId)

   return (
      <div className={css.application}>
         <div className={css.header}>
            <div className={css.content}>
               <div className={css.container}>
                  <div className={css.title}>
                     <h1>CAT</h1>
                     <p>currencies academic terms</p>
                  </div>

                  <Select
                     className={css.select}
                     placeholder="Loading..."
                     value={currencies.choosedId}
                     setValue={chooseCurrency}
                     options={options}
                  />
               </div>

               <div className={css.image}>
                  <img
                     src={Kitten}
                     alt="Логотип"
                  />
               </div>
            </div>
         </div>

         <div className={css.footer}>
            <div className={css.content}>
               <p>{choosedCurrency ? choosedCurrency.name : 'Probably nothing...'}</p>
            </div>
         </div>
      </div>
   )
}

export default Home
