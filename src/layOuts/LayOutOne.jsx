import React from 'react'

import { Outlet } from 'react-router'
import ResNav from '../components/ResNav'
import Navbar from '../components/Navbar'


const LayOutOne = () => {
  return (
      <>
       <Navbar/>
      <ResNav/>
      <Outlet/>
          
      </>
  )
}

export default LayOutOne