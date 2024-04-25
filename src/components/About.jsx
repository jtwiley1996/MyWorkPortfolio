import React from 'react'
import me from '../assets/me.jpeg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id="about">
      
        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>
                        About Me
                    </h2>
                    <p className='text-base lg:text-xl mt-5'>
                    Hello, I'm Julian Wiley, a 27-year-old web developer originally from Milwaukee, WI. Previously, I worked in sales, but my passion for technology and problem-solving led me to transition into the world of web development. Recently, I completed the UW Full Stack Development coding bootcamp, where I honed my skills in front-end and back-end development. I'm excited to apply my newfound knowledge and creativity to build innovative digital solutions.
                    </p>
                </div>
            </div>

            <img className=" mx-auto rounded-3xl py-8 md:py-0 shadow-pic" src={me} alt="me" width={300} height={300} />
        </div>

    </div>
  )
}

export default About