import React from 'react'
import CommonHead from './common/CommonHead'
import SingeleServiceCard from './SingeleServiceCard'
import { GoPencil } from "react-icons/go";
import { LiaPenNibSolid } from "react-icons/lia";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BiUserVoice } from "react-icons/bi";
import { TbDiamond } from "react-icons/tb";






const Services = () => {
  return (
      <>
          <div className="container my-[100px] ">
              <CommonHead commonContent1={'Our Services '} commonContent2={'High-impact services for your business'}/>
              <div className='flex flex-wrap items-center justify-center lg:gap-[66px]  gap-5 mt-20'>
                  <SingeleServiceCard cardIcon={<GoPencil className='text-4xl text-[#FBFBFB] group-hover:text-[#0c0c0c]' />}
                      cardHeading={'Content Marketing '} cardPara={'Our team creates engaging and shareable content that resonates with your audience, drives organic traffic'} />
                  
                  <SingeleServiceCard cardIcon={<LiaPenNibSolid className='text-5xl text-[#FBFBFB] group-hover:text-[#0c0c0c]' />} cardHeading={'Content Marketing '} cardPara={'Our team creates engaging and shareable content that resonates with your audience, drives organic traffic'} />
                  
                  <SingeleServiceCard cardIcon={<HiOutlineSpeakerphone className='text-4xl text-[#FBFBFB] group-hover:text-[#0c0c0c]' />} cardHeading={'Content Marketing '} cardPara={'Our team creates engaging and shareable content that resonates with your audience, drives organic traffic'} />

                  <SingeleServiceCard cardIcon={<IoColorPaletteOutline className='text-4xl text-[#FBFBFB] group-hover:text-[#0c0c0c]' />} cardHeading={'Content Marketing '} cardPara={'Our team creates engaging and shareable content that resonates with your audience, drives organic traffic'} />

                  <SingeleServiceCard cardIcon={<BiUserVoice className='text-4xl text-[#FBFBFB] group-hover:text-[#0c0c0c]' />} cardHeading={'Content Marketing '} cardPara={'Our team creates engaging and shareable content that resonates with your audience, drives organic traffic'} />

                  <SingeleServiceCard cardIcon={<TbDiamond className='text-4xl text-[#FBFBFB] group-hover:text-[#0c0c0c]' />} cardHeading={'Content Marketing '} cardPara={'Our team creates engaging and shareable content that resonates with your audience, drives organic traffic'} />
            </div>
          </div>
      </>
  )
}

export default Services