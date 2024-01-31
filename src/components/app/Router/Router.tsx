import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './Layout'
import Home from 'components/pages/Home'

// Ready for lazy pages imports
export const Router: FC = () => (
   <Routes>
      <Route path="/" element={<Layout />}>
         <Route index={true} element={<Home />} />
         <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Route>
   </Routes>
)
