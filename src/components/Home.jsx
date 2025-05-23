import React from 'react'


const Home = () => {
  return (
    <div id='Home' className='flex flex-col  justify-center items-center mt-[9vh] h-screen relative'>
      <div className="overlay-model absolute w-full h-full lg:h-[150vh]  pointer-events-none z-10"></div>
      
      <div className="absolute flex flex-col z-30 text-center px-4">
        <h1 className="metalic-text text-4xl  md:text-6xl lg:text-7xl xl:text-8xl font-Roboto pb-5">Frontend Developer</h1>
        <p className="text-white text-lg md:text-2xl opacity-80">
          Crafting sleek, responsive web applications with modern technologies.
        </p>
      </div>
    </div> 
  )
}

export default Home


