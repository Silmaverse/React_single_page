import React from 'react'
import { HiOutlineLightBulb } from "react-icons/hi2";


const ProcessCard = ({processIcon , processHead , processText}) => {
  return (
    <>
     
        <div >

        <div className='flex items-center gap-5 lg:gap-[29px] lg:ml-[22px]'>
           <div className='w-[50px] lg:w-[82px] h-[50px] lg:h-[82px] rounded-full bg-secondary flex justify-center items-center'>
              {processIcon}
           </div>
              <h2 className='text-[16px] lg:text-[30px] font-roboto font-semibold  text-secondary'>{processHead}</h2>
        </div>
            <p className='text-[12px] lg:text-base font-Dm font-normal w-[181px] mt-[32px]'>
               {processText}
            </p>
        </div>

        
    </>
  )
}

export default ProcessCard