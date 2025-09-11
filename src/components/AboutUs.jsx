import React from 'react'
import aboutus from '../assets/images/aboutus.png'
import CommonHead from './common/CommonHead'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-router'
import CountUp from "react-countup";


const AboutUs = () => {
  return (
    <>
    <section id='aboutus' className='bg-secondary py-[100px] mb-[107px]'>
        <div className="container">
            <div className="flex flex-wrap justify-between">

                <div className="w-full lg:w-[744px]">
                    <img src={aboutus} alt='image-error'/>
                </div>

                <div className="mt-[79px]">
                    <CommonHead commonContent1={"About us "}/>
                    <h2 className='w-full lg:w-[586px] my-[25px] font-roboto font-semibold text-[16px] lg:text-[68px] text-[#FBFBFB]'>The core mission 
                        behind all our
                        work</h2>
                    <p className='w-full lg:w-[586px] text-[14px] lg:text-[18px] mb-[25px] font-Dm font-normal text-[#F4F4F4]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut
                        tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.</p>

                <div className="flex gap-[59px]">
                    <div >

                        <h2 className="text-[16px] lg:text-[45px] font-roboto font-semibold text-brand"><CountUp
                        
                        start={0}
                        end={330}
                        duration={10}
                        useEasing={true}
                        separator=","
                        /> +</h2>
                        <p className='text-[12px] lg:text-base font-dm  font-normal text-[#F4F4F4]'>Companies helped</p>
                    </div>

                    <div >

                        <h2 className="text-[16px] lg:text-[45px] font-roboto font-semibold text-brand">
                            <CountUp
                  
                    start={0}
                    end={230}
                    duration={10}
                    useEasing={true}
                    separator=","
                    />  +</h2>
                        <p className='text-[12px] lg:text-base font-dm  font-normal text-[#F4F4F4]'>Revenue generated</p>
                    </div>
                    

                          
                </div>
                    <Link to='/' className=" w-[248px] h-[48px] mt-[32px]  rounded-[23px] bg-[#FFFFFF] text-[#0C0C0C] font-Dm text-xl font-normal flex justify-center items-center gap-[10px] "><IoIosArrowDroprightCircle className='text-[28px]' />Start your Free Trial</Link>
                
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutUs