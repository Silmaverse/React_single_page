import React from 'react'
import { Link } from 'react-router'
import Logo from '../assets/images/logo.png'
import { IoMdArrowDropup } from "react-icons/io";

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
            dropdown: [
                {
                    dropContent: 'google Maps',
                    dropLink:'/'
                },
                {
                    dropContent: 'Phone',
                    dropLink: '/'

                },
            ]
             
        },
     
     ]
  return (
      <>
          <nav id='Navbar' className='pt-[22px] hidden lg:block '>
              <div className="container ">
                  <div className="navRow flex justify-between">
                      <Link to='/' className="logo_col">
                          <img src={Logo } alt='logo' />
                      </Link>
                      <div className="menu_items flex  gap-[35px]  ">
                          {
                              navItems.map((item, idx) => {
                                  return (
                                      <ul >
                                          <li className='relative group'>
                                          
                                              <Link to={item.navpath} className=' text-xl font-normal text-primary font-Dm'>{item.navContent}</Link>
                                              {
                                            item.dropdown &&
                                                  <div className='w-[300px] p-3 rounded-[5px] bg-white absolute top-8 invisible opacity-0 group-hover:visible group-hover:opacity-100'>
                                                          <IoMdArrowDropup className='text-3xl text-white absolute top-[-18px] left-2'/>
                                                          <ul>
                                                              {item.dropdown.map((item) => {
                                                                  
                                                                  return <li ><Link className='text-lg mb-5 inline-block font-Dm' to={item.dropLink}>{ item.dropContent}</Link></li>
                                                            })}
                                                  </ul>
                                              </div>
                                             }
                                          </li>
                                      </ul>
                                  )
                              })
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