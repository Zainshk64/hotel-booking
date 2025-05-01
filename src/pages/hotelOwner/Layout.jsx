import React from 'react'
import Nav from '../../components/hotelowner/Nav'
import SideBar from '../../components/hotelowner/SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='h-screen flex flex-col '>
        <Nav/>
        <div className='flex h-full' > 
            <SideBar/>
            <div className='flex-1 h-full md:px-6 '>
                <Outlet/>
            </div>
        </div>
      
    </div>
  )
}

export default Layout
