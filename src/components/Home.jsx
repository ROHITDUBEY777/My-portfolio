

const Home = () => {
  return (
    <div id='Home' className='flex  flex-col z-0  justify-center items-center  h-screen relative'>
      {/* <div className="overlay-model absolute w-full h-full lg:h-[150vh]  pointer-events-none z-10"></div> */}
      <div className="min-h-screen w-full opacity-40  bg-black relative">
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
  
</div>
    
      <div className="absolute flex flex-col z-40 text-center px-4">
        <h1 className="metalic-text text-4xl  md:text-6xl lg:text-7xl xl:text-9xl font-semibold font-[Roboto]  pb-5">Website  Developer</h1>
        <p className="text-white text-lg md:text-2xl opacity-80">
          Crafting sleek, responsive web applications with modern technologies.
        </p>
             <div className='flex   justify-center'>

            {/* <GlowingButton href="https://www.linkedin.com/in/rohit-dubey-637a8627a/"
             /> */}
              <a target='_blank' href='https://www.linkedin.com/in/rohit-dubey-637a8627a/' ><button  className='shadow-2xl  block border-3  duration-400 hover:-translate-y-2 hover:shadow-cyan-500/40  border-white  transition-all   hover:text-black hover:bg-cyan-400 justify-center items-center  cursor-pointer text-xl md:text-2xl font-[Poppins] mt-4 max-w-fit  px-4 py-2   h-16'>Let's Connect</button></a>
             </div>
             </div>
             {/* <div className=' block xl:hidden cursor-pointer '
           >
      </div> */}
    </div> 
  )
}

export default Home


