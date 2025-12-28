import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-black text-white'>
      <div className=' flex justify-between '>
        <div className='flex p-3 m-0'>Blog</div>
          <ul className='bg-black text-white m-0  flex [&>*]:flex'>
            <li className=' '><NavLink className='p-3' to="#">Home</NavLink></li>
        <li className=''><NavLink className='p-3' to="/About">About</NavLink></li>
        <li className=''><NavLink className='p-3' to="/Service">Service</NavLink></li>
        <li className=''><NavLink className='p-3' to="/Contact">Contact</NavLink></li>
        </ul></div>
    </nav>
  )
}

export default Navbar

