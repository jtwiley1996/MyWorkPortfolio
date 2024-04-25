import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
   const [nav, setNav] = useState(false)
   const [currentPage] = useLocation().pathname;
   const handleNav = () => {
        setNav(!nav)
   }

   return (
    <div className='h-[100px] dark:bg-white text-gray-400 max-w-[1200px] mx-auto flex justify-between items-center'>
      
      <h1 className='text-3xl font-bold primary-color ml-4'>Julian T Wiley</h1>
      <ul className='hidden md:flex font-bold'>
          <li  className='p-5 text-shadow hover:font-bold'><Link to="/" className={currentPage === '/' ? 'nav-link active primary-color' : 'nav-link'}> Home</Link></li>
          <li className='p-5 text-shadow hover:font-bold'><Link to="/About" className={currentPage === '/About' ? 'nav-link active primary-color' : 'nav-link'}> About</Link></li>
          <li className='p-5 text-shadow hover:font-bold'><Link to="/Work" className={currentPage === '/Work' ? 'nav-link active primary-color' : 'nav-link'}>Work</Link></li>
          <li className='p-5 text-shadow hover:font-bold'><Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active primary-color' : 'nav-link'}>Contact</Link></li>
          <li className='p-5 text-shadow hover:font-bold'><Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active primary-color' : 'nav-link'}>Resume</Link></li>
      </ul>


      <div onClick={handleNav} className='block md:hidden mr-6'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>

      <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className='text-3xl font-bold primary-color m-4'>Julian T Wiley</h1>
          <ul className='p-8 text-2xl font-bold'>
              <li className='p-2 text-shadow hover:font-bold'><Link to="/" className={currentPage === '/' ? 'nav-link active primary-color' : 'nav-link'}>Home</Link></li>
              <li className='p-2 text-shadow hover:font-bold'><Link to="/About" className={currentPage === '/About' ? 'nav-link active primary-color' : 'nav-link'}>About</Link></li>
              <li className='p-2 text-shadow hover:font-bold'><Link to="/Work" className={currentPage === '/Work' ? 'nav-link active primary-color' : 'nav-link'}>Work</Link></li>
              <li className='p-2 text-shadow hover:font-bold'><Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active primary-color' : 'nav-link'}>Contact</Link></li>
              <li className='p-2 text-shadow hover:font-bold'><Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active primary-color' : 'nav-link'}>Resume</Link></li>

          </ul>
      </div>

    </div>
)
}


export default Navbar;