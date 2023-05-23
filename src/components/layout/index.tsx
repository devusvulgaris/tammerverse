import type { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

import Navigation from '../navigation'

const Layout = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
