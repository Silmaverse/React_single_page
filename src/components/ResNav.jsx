import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router'
import { FaBars } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";


const ResNav = () => {
    const navItemes= [
        {
            navcontent: "Home",
            navpath:"/",
        },
        {
            
            navcontent: "About",
            navpath: "/about",
        }, {
            
            navcontent: "Contact Us",
            navpath: "/contactus",
        },
    ]
    const [shownav, setshownav] = useState(false);
  return (
      <>
          <nav className='lg:hidden px-2 py-3 absolute top-0 left-0 w-full h-screen z-20 overflow-x-hidden '>
              <div className="container ">
                  <div className="menu_row flex justify-between  ">
                      <Link to={'/'} className="logo inline-block w-[125px]">
                          <img src={logo} alt='logo'/>
                      </Link>
                      <button onClick={() => setshownav(!shownav)} className='text-xl text-white' ><FaBars /></button>
                  </div>
                  {
                      shownav && <div onClick={() => setshownav(!shownav)} className='w-full h-screen  absolute top-0 left-0'></div>
                  }

                      <div className={`w-[250px] h-screen bg-white  absolute top-0  ${shownav ? "right-0" : "right-[-100%]"} duration-150 flex flex-col justify-center items-center gap-5`}>
                          <ul className='flex flex-col gap-5'>
                              <button onClick={()=>setshownav(!shownav)}><CiCircleRemove className='text-2xl font-dm text-black absolute top-3 right-3' /></button>

                              {
                                  navItemes.map((item,idx) => {

                                      return <li key={idx}><Link className='text-xl font-Dm text-black' to={item.navpath}>{item.navcontent}</Link></li>
                                  })
                              }
                          </ul>
                          <Link to={'/'} className='py-2 px-6 bg-black text-white rounded-[5px] text-base font-Dm'>Get in touch</Link>
                      </div>
                </div>
             
          </nav>
             
              
      </>
  )
}

export default ResNav