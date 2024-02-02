import { FC } from 'react'
import { Select } from 'components/shared/Select'
import { useCurrencies } from './hooks/useCurrencies'
import { useOptionsFromCurrenciesList } from './hooks/useCurrenciesOptions'
import Kitten from 'public/assets/Kitten.png'
import css from './Home.module.scss'

import locales from './Home.locales.json'
const { header_title, header_subtext, select_loading, select_empty, footer_nothing } = locales

const Home: FC = () => {
   const { currencies, chooseCurrency } = useCurrencies()
   const options = useOptionsFromCurrenciesList()

   const { list, choosedId } = currencies
   const choosedCurrency = list.find(currency => currency.id === choosedId)

   return (
      <main className={css.home}>
         <header className={css.header}>
            <div className={css.content}>
               <section className={css.container}>
                  <div className={css.title}>
                     <h1>{header_title}</h1>
                     <p>{header_subtext}</p>
                  </div>

                  <Select
                     className={css.select}
                     placeholder={select_loading}
                     textIsEmpty={select_empty}
                     value={currencies.choosedId}
                     setValue={chooseCurrency}
                     options={options}
                  />
               </section>

               <section className={css.image}>
                  <img
                     src={Kitten}
                     alt="Kitten"
                  />
               </section>
            </div>
         </header>

         <footer className={css.footer}>
            <div className={css.content}>
               <h2>{choosedCurrency ? choosedCurrency.name : footer_nothing}</h2>
            </div>
         </footer>
      </main>
   )
}

export default Home
