import React from 'react'
import author from '../assets/images/Author.png'

const Genuine = () => {
  return (
    <>
    <section id='genuine' className='mt-[103px]'>

        <div className="container">
            <div className="bg-[#F4F4F4] rounded-[20px] p-[45px]">
                 <div className="w-[150px] h-[150px] rounded-full m-auto">
                    <img src={author} alt='image-error'/>
                 </div>
                 <h2 className='font-roboto font-bold text-base text-[16px] lg:text-[25px] text-secondary  
                 w-full lg:w-[1313px] m-auto mt-[35px]'>“Be genuine in your assessment, and provide constructive feedback to benefit 
                 both potential <span className='inline-block  w-full lg:w-[1300px] lg:text-center'>
                    customers and the company providing the product or service.” </span> </h2>
                <h2 className='text-[14px] lg:text-[20px] font-roboto font-semibold text-secondary mt-[35px] lg:text-center'>
                    Jacqueline Miller</h2>
                <h2 className='text-[14px] lg:text-base font-Dm font-normal text-secondary lg:text-center'>CEO of an eduport</h2>
            </div>
        </div>
    </section>
    </>
  )
}

export default Genuine