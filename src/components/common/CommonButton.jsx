import React from 'react'
import { Link } from 'react-router'
import { IoIosArrowDroprightCircle } from "react-icons/io";

const CommonButton = ({marginbottomvalue}) => {
  return (
    <>
     <div className={`flex justify-end ${marginbottomvalue}`}>

        <Link to='/' className=" w-[248px] h-[48px]  rounded-[23px] bg-secondary text-icon font-Dm text-xl font-normal flex justify-center items-center gap-[10px] ">
        <IoIosArrowDroprightCircle className='text-[28px]' />Start your Free Trial</Link>
     </div>
    </>
  )
}

export default CommonButton