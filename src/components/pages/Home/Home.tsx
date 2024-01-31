import { FC } from 'react'

import { useTypedSelector, useTypedDispatch } from 'common/store'
import { currenciesSlice, Currency } from 'common/store/currencies'

import { Select } from 'components/shared/Select'

import Kitten from 'public/assets/Kitten.png'
import css from './Home.module.scss'

const Home: FC = () => {
   const currencies = useTypedSelector(state => state.currencies)
   const dispatch = useTypedDispatch()

   return (
      <div className={css.application}>
         <div className={css.header}>
            <div className={css.content}>
               <div className={css.container}>
                  <div className={css.title}>
                     <h1>CAT</h1>
                     <p>currencies academic terms</p>
                  </div>

                  <Select />
               </div>

               <div className={css.image}>
                  <img src={Kitten} alt="Логотип" />
               </div>
            </div>
         </div>

         <div className={css.footer}>
            <div className={css.content}>
               <p>Russian Ruble</p>
            </div>
         </div>
      </div>
   )
}

export default Home
