import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
function Layout() {
  return (
    <div className='min-h-screen flex flex-col'>
    <Header/>
   
    <Outlet/>
  
    <Footer/>
    </div>
  )
}

export default Layout