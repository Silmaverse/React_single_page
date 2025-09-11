import React from 'react'
import bannrerOverlay from '../assets/images/overlay.png'
import bannerpat from '../assets/images/BannerPattern.png'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-router'
import brand1 from '../assets/images/brand1.png'
import brand2 from '../assets/images/brand2.png'
import brand3 from '../assets/images/brand3.png'
import brand4 from '../assets/images/brand4.png'
import banner from '../assets/images/Banner.png'


const Banner = () => {
  return (
      <>
          <section className='bg-[#0C0C0C] pt-[102px] pb-[86px] relative z-[1] px-3 lg:px-0'>
              {/* overlay */}
              <div style={{
                  background: `url(${bannrerOverlay})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"
              ,backgroundPosition:'center'}} className='w-full h-full absolute top-0 left-0 z-[-1]'>
                  
              </div>
              {/* pattern */}
              <div className='pattern absolute left-0 top-[167px] w-[183px] hidden lg:block'>
                  <img src={bannerpat} alt='error' />
              </div>
              {/* container */}
              <div className="container">
                  <div className="banner_row lg:flex justify-between flex flex-wrap lg:flex-nowrap">
                      <div className="banner_text">
                          <h1 className='font-semibold text-[30px] lg:text-[64px] text-primary w-full lg:w-[608px] font-roboto'>
                              Ready to take your
                              <span className='text-brand block'>Business Growth</span>
                              to the next level?
                          </h1>
                          <p className='lg:w-[557px] w-full text-primary font-Dm text-sm lg:text-lg mt-6 mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada
                              viverra gravida libero cursus nulla leo pulvinar.</p>
                          <Link to='/' className=" w-[248px] h-[48px]  rounded-[23px] bg-[#FFFFFF] text-[#0C0C0C] font-Dm text-xl font-normal flex justify-center items-center gap-[10px] "><IoIosArrowDroprightCircle className='text-[28px]' />Start your Free Trial</Link>
                          <p className='text-brand font-semibold font-roboto text-xl  mt-[40px]  lg:mt-[181px] mb-[5px]'>Trusted by Leading Brands</p>
                          
                          <div className="brandImages lg:flex items-center flex flex-wrap lg:flex-nowrap">

                              <div className="brand1 w-[50px] lg:w-[147px]">
                                  <img src={ brand1} alt='brand1'/>
                              </div>
                              <div className="brand1 w-[50px] lg:w-[147px]">
                                  <img src={ brand2} alt='brand2' />
                              </div>
                              <div className="brand1 w-[50px] lg:w-[147px]">
                                  <img src={brand3} alt='brand3' />
                              </div>
                              <div className="brand1 w-[50px] lg:w-[221px]">
                                  <img src={ brand4} alt='brand4' />
                              </div>
                          </div>
                      </div>

                      <div className="bannerimage w-full lg:w-[805px] ">
                          <img src={ banner} alt='bannerimage'/>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Banner