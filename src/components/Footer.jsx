import React from 'react'
import {AiOutlineInstagram, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <div>
        <div className='max-w-[1200px] sm:h-[150px] p-12 md:flex md:justify-between mx-auto md:items-center inline-block text-center'>
            <span className='primary-color'>Julian T <br/>Wiley</span>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white mt-3 md:mt-0">
                <a href="https://www.instagram.com/sthiwar_17/" target="_blank" rel="noreferrer"><AiOutlineInstagram className='contact-shadow'/></a>
                <a href="https://www.linkedin.com/in/sergio-ardila-alvarado-550b40152/" target="_blank" rel="noreferrer"><AiFillLinkedin className='contact-shadow'/></a>
                <a href="https://github.com/Stroyer210" target="_blank" rel="noreferrer"><AiFillGithub className='contact-shadow'/></a>
            </div>
            <p className='text-gray-600 mt-3 md:mt-0'>jtwiley1996@gmail.com <br/> Let's work together </p>    
        </div>
    </div>
  )
}

export default Footer;