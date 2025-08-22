import React from 'react'

import { Outlet } from 'react-router'
import NavBar from '../components/Navbar'
import ResNav from '../components/ResNav'


const LayOutOne = () => {
  return (
      <>
      <NavBar />
      <ResNav/>
      <Outlet/>
          
      </>
  )
}

export default LayOutOne