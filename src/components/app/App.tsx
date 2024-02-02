import { FC } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from 'common/store'

import 'styles/fonts.scss'
import 'styles/normalize.scss'
import 'styles/main.scss'
import 'styles/common.scss'

import Home from 'components/pages/Home'
import { Layout } from './Layout'

// Router is ready for pages lazy-loading
export const App: FC = () => (
   <Provider store={store}>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index={true} element={<Home />} />
               <Route path="*" element={<Navigate to="/" replace={true} />} />
            </Route>
         </Routes>
      </BrowserRouter>
   </Provider>
)
