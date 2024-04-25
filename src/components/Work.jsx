import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import { AiFillGithub } from 'react-icons/ai';

const Work = () => {
    return (
      <div className='max-w-[1200px] mx-auto p-5' id="work"> 
          <div className='pb-8 text-center md:mt-10'>
              <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
              <p className='text-gray-400'>Check out some of my recent work</p>
          </div>
  
          <div className='grid sm:grid-cols-2  gap-4'>
  
              <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[300px] bg-cover relative'>
                  <img src={project1} alt="project1"/>
                  <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                      <span className='text-2xl md:text-3xl font-extrabold text-white tracking-wider'>Weather App</span>
                      <div className='pt-8 text-center flex flex-between'>
                          <a href="https://jtwiley1996.github.io/Weather-App/" target="_blank" rel="noreferrer">
                              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg work-live'>Live</button>
                          </a>
                          <a href="https://github.com/jtwiley1996/Weather-App" target="_blank" rel="noreferrer"><AiFillGithub className='text-6xl ml-5 text-white git-shadow'/></a>
                      </div>
                  </div>
              </div>
              <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[300px] bg-cover relative'>
                <img src={project2} alt="project2"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl md:text-3xl font-extrabold text-white tracking-wider'>RecipeHub</span>
                    <div className='pt-8 text-center flex flex-between'>
                        <a href="https://gwennr-t.github.io/RecipeHub/" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg work-live'>Live</button>
                        </a>
                        <a href="https://github.com/gwennr-t/RecipeHub" target="_blank" rel="noreferrer"><AiFillGithub className='text-6xl ml-5 text-white git-shadow '/></a>
                    </div>
                </div>
            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[300px] bg-cover relative'>
                <img src={project3} alt="project3"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl md:text-3xl font-extrabold text-white tracking-wider'>RecipeHub</span>
                    <div className='pt-8 text-center flex flex-between'>
                        <a href="https://jtwiley1996.github.io/advice-generator-app-main/" target="_blank" rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg work-live'>Live</button>
                        </a>
                        <a href="https://github.com/jtwiley1996/advice-generator-app-main" target="_blank" rel="noreferrer"><AiFillGithub className='text-6xl ml-5 text-white git-shadow '/></a>
                    </div>
                </div>
            </div>


        </div>
    </div>
    )}

    export default Work;