import { FC } from 'react'
import { Select } from 'components/shared/Select'
import { useCurrencies } from './useCurrencies'
import { useOptionsFromCurrenciesList } from './useCurrenciesOptions'
import Kitten from 'public/assets/Kitten.png'
import css from './Home.module.scss'

const Home: FC = () => {
   const { currencies, choose } = useCurrencies()
   const options = useOptionsFromCurrenciesList()
   const choosed = currencies.list.find(currency => currency.id === currencies.choosedId)

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
                     setValue={choose}
                     options={options}
                  />
               </div>

               <div className={css.image}>
                  <img src={Kitten} alt="Логотип" />
               </div>
            </div>
         </div>

         <div className={css.footer}>
            <div className={css.content}>
               <p>{choosed ? choosed.name : 'Probably nothing...'}</p>
            </div>
         </div>
      </div>
   )
}

export default Home
