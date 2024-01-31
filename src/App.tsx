import { FC } from 'react'

import 'styles/fonts.scss'
import 'styles/normalize.scss'
import 'styles/main.scss'
import 'styles/common.scss'

import css from './App.module.scss'

export const App: FC = () => (
   <div className={css.container}>
      <h1>Hello World!</h1>
   </div>
)
