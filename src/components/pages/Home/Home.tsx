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
      <main className={css.home}>
         <header className={css.header}>
            <div className={css.content}>
               <section className={css.container}>
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
               </section>

               <section className={css.image}>
                  <img
                     src={Kitten}
                     alt="Логотип"
                  />
               </section>
            </div>
         </header>

         <footer className={css.footer}>
            <div className={css.content}>
               {choosedCurrency ? choosedCurrency.name : 'Probably nothing...'}
            </div>
         </footer>
      </main>
   )
}

export default Home
