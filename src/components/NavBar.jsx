import React from 'react'
import { Link } from 'react-router'
import Logo from '../assets/images/logo.png'

const NavBar = () => {
    const navItems = [
     {
        navContent:'Home',
        navpath:'/'
        },
        {
            navContent: 'About',
            navpath: '/'
        },
        {
            navContent: 'Contact Us',
            navpath: '/',
            dropdown:(<div className='p-5 rounded-[5px] bg-primary  left-2 flex-col gap-5 absolute top-10 hidden group-hover:flex' >
                              <a href="tel:56878980090">56878980090</a>
                              <hr />
                              <a href='mailto:jjksdkak@gmail.com'>jjksdkak@gmail.com</a>
                          </div>)
        },
     
     ]
  return (
      <>
          <nav id='Navbar' className='pt-[22px] '>
              <div className="container ">
                  <div className="navRow flex justify-between">
                      <div className="logo_col">
                          <img src={Logo } alt='logo' />
                      </div>
                      <div className="menu_items flex  gap-[35px]  ">
                          {
                              navItems.map((item ,idx) => (
                                  <div key={idx} className={item.dropdown ? "relative group" : ""}>
                                  
                                      <Link to={item.navpath} className=' text-xl font-normal text-primary font-Dm'>{item.navContent}</Link>
                                      
                                      { item.dropdown}
                            </div>
                              ))
                          }
                          

                      </div>
                      <button className='menu_buttons w-[140px] h-[47px] rounded-[23px] bg-primary font-Dm font-normal text-[#0C0C0C] text-lg hover:bg-gray-400 hover:text-amber-50'>Get in touch</button>
                  </div>
              </div>
          </nav>  
      </>
  )
}

export default NavBar