import React from 'react'
// import Model1 from './spline/Model1'

const Home = () => {
  return (
    <div id='Home'> 

    <div className='flex flex-col text-center

overflow-hidden
break-words
object-cover w-full h-auto justify-center items-center min-h-screen relative'>
      {/* <div className="md:flex justify-center scale-0 hidden absolute  smooth lg:scale-100 md:scale-100  ">
        <Model1 />
      </div> */}
      <div className="overlay-model absolute w-full h-full lg:h-[150vh]  pointer-events-none z-10"></div>
      <div className="absolute flex flex-col z-30 text-center px-4">
        <h1 className="metalic-text text-4xl md:text-8xl font-Roboto pb-5">Frontend Developer</h1>
        <p className="text-white text-lg md:text-2xl opacity-80">
          Crafting sleek, responsive web applications with modern technologies.
        </p>
      </div>
    </div> 
    </div>
  )
}

export default Home

