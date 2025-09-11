import React from 'react'

const CommonHead = ({commonContent1, commonContent2}) => {
  return (
      <>
          <h3 className='font-roboto text-xl lg:text-[30px] font-semibold text-brand text-center'>{ commonContent1}</h3>
          <h2 className='lg:text-[64px] text-[29px]  font-roboto font-semibold  text-[#0C0C0C]  lg:w-[695px]  m-auto text-center'>
             {commonContent2}
          </h2>
          
    </>
  )
}

export default CommonHead