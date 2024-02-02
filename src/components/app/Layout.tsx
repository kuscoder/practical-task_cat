import { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const Layout: FC = () => (
   <Suspense fallback={'Loading...'}>
      <Outlet />
   </Suspense>
)
