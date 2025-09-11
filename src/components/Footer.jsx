import React from 'react'
import { Link } from 'react-router'
import Logo from '../assets/images/logo.png'
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";




const Footer = () => {
  return (
    <>
    <section id='footer' className='bg-secondary pt-[100px] pb-[60px] mt-[111px]'>
       <div className="container">
         <div className='flex flex-wrap justify-between'>

            <div className="mb-[20px] lg:mb-0 logo">
                  <Link to='/' className="logo_col">
                          <img src={Logo } alt='logo' />
                  </Link>
                  <p className='w-full  lg:w-[300px] text-[12px] lg:text-base font-Dm font-normal text-white mt-[24px]'>We’re a team of strategic creator and digital innovator, 
                    united focus in our pursuit of mastery and joyful.</p>
            </div>

            <div className="pages">
                <h2 className='text-[14px] lg:text-[20px] font-roboto font-semibold text-white mb-[24px]'>Pages </h2>
                <div>
                    <p className='text-[12px] lg:text-base font-Dm font-norm text-[#F4F4F4]' >Home</p>
                    <p className='text-[12px] lg:text-base font-Dm font-norm text-[#F4F4F4]'>Home 2</p>
                    <p className='text-[12px] lg:text-base font-Dm font-norm text-[#F4F4F4]'>About</p>
                    <p className='text-[12px] lg:text-base font-Dm font-norm text-[#F4F4F4]'>Conatct Us </p>
                    <p className='text-[12px] lg:text-base font-Dm font-norm text-[#F4F4F4]'>Portfolio</p>
                    <p className='text-[12px] lg:text-base font-Dm font-norm text-[#F4F4F4]'>Portfolio Single</p>
                </div>
            </div>

            <div className="utility">
                <h2 className='text-[14px] lg:text-[20px] font-roboto font-semibold text-white mb-[24px]'>Utility Pages  </h2>
                <div>
                    <p className='text-[12px] lg:text-base font-Dm font-norm text-[#F4F4F4]' >Home</p>
                    <p className='text-[12px] lg:text-base font-Dm font-norm text-[#F4F4F4]'>Home 2</p>
                    <p className='text-[12px] lg:text-base font-Dm font-norm text-[#F4F4F4]'>About</p>
                    <p className='text-[12px] lg:text-base font-Dm font-norm text-[#F4F4F4]'>Conatct Us </p>
                    <p className='text-[12px] lg:text-base font-Dm font-norm text-[#F4F4F4]'>Portfolio</p>
                    <p className='text-[12px] lg:text-base font-Dm font-norm text-[#F4F4F4]'>Portfolio Single</p>
                </div>

            </div>

            <div className="mt-[20px] lg:mt-0">
                <h2 className='text-[14px] lg:text-[20px] font-roboto font-semibold text-white mb-[19px]'>Subscribe</h2>
                <div className='relative'>
                    <input className="text-[12px] lg:text-[18px]  w-[250px] h-[50px] lg:w-[433px] lg:h-[67px] rounded-[20px]
                     font-Dm font-normal bg-[#FFFFFF] pl-[23px] py-[22px] " type='text' placeholder='Enter your email here'/>
                    <button className='text-[12px] lg:text-[18px] w-[100px] h-[35px] lg:w-[119px] lg:h-[47px] rounded-[20px] font-Dm font-normal bg-secondary text-[#FBFBFB] absolute top-[10px] right-[9px]'>Subscribe</button>
                </div>
            </div>


         </div>

         <div className="mt-[100px] lg:mt-[131px] flex flex-wrap justify-between items-center">
            <div className="w-full h-[1px] bg-[#F4F4F4] mb-[29px]"></div>

            <div >
                <h2 className='text-[14px] lg:text-[20px] font-roboto font-semibold text-[#F4F4F4] '>Copyright by</h2>
                <h3 className='text-[12px]  lg:text-base font-dm font-normal text-[#F4F4F4]'>Designed by Iconstica.com</h3>
            </div>

             <div >
                <h2 className='text-[14px] lg:text-[20px] font-roboto font-semibold text-[#F4F4F4] '>Contact Us</h2>
                <h3 className='text-[12px]  lg:text-base font-dm font-normal text-[#F4F4F4]'>+0 12 457 4578</h3>
            </div>

             <div className="mt-[30px] lg:mt-0">
                <h2 className='text-[14px] lg:text-[20px] font-roboto font-semibold text-[#F4F4F4] '>Address</h2>
                <h3 className='text-[12px]  lg:text-base font-dm font-normal text-[#F4F4F4]'>119 Tanglewood Lane Gulfport, MS 39503</h3>
            </div>
  
            <div className="mt-[30px] lg:mt-0 flex flex-wrap gap-[29px] items-center">
                <div className="w-[35px] lg:w-[50px] h-[35px] lg:h-[50px] rounded-full bg-[#F4F4F4] flex justify-center items-center text-[20px] lg:text-[30px]"><FiFacebook /></div>
                <div className="w-[35px] lg:w-[50px] h-[35px] lg:h-[50px] rounded-full bg-[#F4F4F4]  flex justify-center items-center text-[20px] lg:text-[30px] "><IoLogoInstagram /></div>
                <div className="w-[35px] lg:w-[50px] h-[35px] lg:h-[50px] rounded-full bg-[#F4F4F4]  flex justify-center items-center text-[20px] lg:text-[30px]"><CiLinkedin /></div>
            </div>
         </div>


       </div>
    </section>
    </>
  )
}

export default Footer