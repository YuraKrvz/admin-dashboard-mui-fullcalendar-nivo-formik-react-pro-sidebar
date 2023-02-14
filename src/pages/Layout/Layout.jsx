import { Outlet } from 'react-router-dom'
import { TopBar } from './TopBar'
import { SideBar } from './SideBar'

export const Layout = () => {
  return (
    <>
      <div className='app'>
        <SideBar />
        <main className='content'>
          <TopBar />
          <Outlet />
        </main>
      </div>
    </>
  )
}
