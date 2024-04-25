import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import vite from '../assets/vite.svg'
import mongodb from '../assets/mongodb.svg'

const Skills = () => {
  return (
    <div className=' text-gray-400 md:h-[150px] max-w-[1200px] md:mx-auto grid grid-cols-5 place-items-center md:flex md:justify-between md:items-center mx-2'>

        <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'>
            My <br/> Tech <br/> Stack
        </h2>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img className="skill-shadow" src={html} alt="html" width={100} height={100}/>
            <p className='mt-2'>HTML</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img className="skill-shadow" src={css} alt="css" width={100} height={100}/>
            <p className='mt-2'>CSS</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img className="skill-shadow" src={javascript} alt="javascript" width={100} height={100}/>
            <p className='mt-2'>Javascript</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img className="skill-shadow" src={tailwind} alt="tailwind" width={100} height={100}/>
            <p className='mt-2'>Tailwind</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img className="skill-shadow" src={react} alt="react" width={100} height={100}/>
            <p className='mt-2'>React</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img className="skill-shadow" src={node} alt="node" width={100} height={100}/>
            <p className='mt-2'>Node</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img className="skill-shadow" src={mongodb} alt="mongodb" width={100} height={100}/>
            <p className='mt-2'>MongoDB</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img className="skill-shadow" src={vite} alt="Vite" width={100} height={100}/>
            <p className='mt-2'>Vite</p>
        </div>
      
    </div>
  )
}

export default Skills