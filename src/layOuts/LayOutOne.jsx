import React from 'react'

import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'

const LayOutOne = () => {
  return (
      <>
          <NavBar/>
          <Outlet/>
          
      </>
  )
}

export default LayOutOne