import React from 'react'
import CommonHead from './common/CommonHead'
import ProcessCard from './ProcessCard'
import { HiOutlineLightBulb } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { FaCheckDouble } from "react-icons/fa6";




const Process = () => {
  return (
    <>
      <section id='process' className='px-2 lg:px-0'>
        <div className="container">
                <CommonHead  commonContent1={"Process"} commonContent2={"Process that moves things forward"}/>
                <div className='flex flex-wrap lg:justify-between items-center gap-5 lg:gap-0  justify-center mt-[60px] lg:mt-[90px]'>
                    <ProcessCard  processIcon={<HiOutlineLightBulb className='text-xl lg:text-4xl text-icon'/>}
                     processHead={"Ideate"} processText={"The ideation process is a crucial phase in the design process where creative thinking and brainstorming"} 
                     />
                    <ProcessCard  processIcon={<MdOutlineMail className='text-xl lg:text-4xl text-icon'/>}
                     processHead={"Reserach"} processText={"Research is a critical component of the design process, helping designers understand the problem"}/>
                    <ProcessCard   processIcon={<VscSettings className='text-xl lg:text-4xl text-icon'/>}
                     processHead={"Create"} processText={"Designing a process involves several key steps to ensure clarity, efficiency, successfulimplementation"}/>
                    <ProcessCard  processIcon={<FaCheckDouble className='text-xl lg:text-4xl text-icon'/>}
                     processHead={"Testing"} 
                     processText={"Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements"}/>
                </div>
        </div>
      </section>
    </>
  )
}

export default Process