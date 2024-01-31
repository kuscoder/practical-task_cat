import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import 'styles/fonts.scss'
import 'styles/normalize.scss'
import 'styles/main.scss'
import 'styles/common.scss'

import { store } from 'common/store'
import { Router } from 'components/app/Router'

export const App: FC = () => (
   <Provider store={store}>
      <BrowserRouter>
         <Router />
      </BrowserRouter>
   </Provider>
)
