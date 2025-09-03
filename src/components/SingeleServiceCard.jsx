import React from 'react'





const SingeleServiceCard = ({cardIcon , cardHeading , cardPara}) => {
  return (
      <>
          <div className='w-full lg:w-[350px] rounded-[20px] bg-[#F4F4F4] p-[45px] hover:bg-[#0C0C0C] duration-[.4s] group'>
              <div className='w-20 h-20 rounded-full bg-[#0C0C0C] flex justify-center items-center group-hover:bg-[#F4F4F4] group-hover:text-[#0C0C0C]'>
                  { cardIcon}
              </div>
                  <div className="content mt-[62px] ">
                  <h2 className='font-roboto font-medium text-[25px] text-[#0C0C0C] group-hover:text-[#F4F4F4]'>{ cardHeading}</h2>
                  <p className='font-Dm font-normal text-[18px] text-[#0C0C0C] mt-[15px] group-hover:text-[#F4F4F4] tracking-[0.03em]'>
                      { cardPara}</p>
                  </div>
              
          </div>
      </>
  )
}

export default SingeleServiceCard