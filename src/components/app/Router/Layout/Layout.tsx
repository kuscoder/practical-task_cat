import { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const Layout: FC = () => (
   <Suspense fallback={'Загрузка...'}>
      <Outlet />
   </Suspense>
)
