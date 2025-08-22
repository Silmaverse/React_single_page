import React from 'react'

import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'
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