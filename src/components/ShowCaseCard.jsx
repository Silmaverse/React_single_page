import React from 'react'


const ShowCaseCard = ({showcaseimage ,showcaseheading , showcasepara , marginTopValue}) => {
  return (
    <>
    <div className={`${marginTopValue}`}>

      <div className='w-full lg:w-[663px] rounded-[20px]'>
        <img src={showcaseimage}  alt='image' />
        <h2 className='text-base lg:text-[30px] font-roboto font-semibold text-secondary'>{showcaseheading}</h2>
        <p className='text-[12px] lg:text-lg font-Dm font-normal text-secondary '>{showcasepara}</p>
      </div>

    </div>
    </>
  )
}

export default ShowCaseCard