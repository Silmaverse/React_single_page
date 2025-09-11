import React from 'react'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Process from '../components/Process'
import ShowCase from '../components/ShowCase'
import Genuine from '../components/Genuine'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'


const Home = () => {
  return (
      <>
      <Banner /> 
      <Services/>
      <AboutUs/>
      <Process/>
      <ShowCase/>
      <Genuine/>
      <Footer/>
      </>
  )
}

export default Home