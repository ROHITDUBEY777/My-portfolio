import React from 'react'
import GlowingButton from './sections/Glowingbutton'
import Hero3D from './sections/Hero3D'

const Home = () => {
  return (
    <div id='Home' className='flex fixed flex-col  justify-center items-center  h-screen relative'>
      <div className="overlay-model absolute w-full h-full lg:h-[150vh]  pointer-events-none z-10"></div>
      <div className="min-h-screen w-full bg-black relative">
  Black Grid with White Dots Background
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#000000",
      backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
        radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)
      `,
      backgroundSize: "20px 20px, 20px 20px, 20px 20px",
      backgroundPosition: "0 0, 0 0, 0 0",
    }}
  />
  {/* Your Content/Components */}
</div>
      <Hero3D />
      <div className="absolute flex flex-col z-30 text-center px-4">
        <h1 className="metalic-text text-4xl  md:text-6xl lg:text-7xl xl:text-9xl font-[Roboto] pb-5">Frontend  Developer</h1>
        <p className="text-white text-lg md:text-2xl opacity-80">
          Crafting sleek, responsive web applications with modern technologies.
        </p>
             <div>

            <GlowingButton href="https://www.linkedin.com/in/rohit-dubey-637a8627a/"
             />
             </div>
             </div>
             <div className=' block xl:hidden cursor-pointer '
           >
      </div>
    </div> 
  )
}

export default Home


