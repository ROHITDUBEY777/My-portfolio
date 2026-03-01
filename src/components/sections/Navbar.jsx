import React from 'react'
import { ScrollSmoother } from 'gsap/ScrollSmoother';

const Navbar = () => {






  const handlescroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const smoother = ScrollSmoother.get();
      if (smoother) {
        smoother.scrollTo(element, true);
      }
      else {
        element.scrollIntoView({ behavior: 'smooth' });
      }


    }



  };

  return (


    <div className={`fixed top-0 left-0 w-full xl:flex flex-col md:flex-row xl:justfiy-center backdrop-blur-3xl flex justify-around z-50 font-[Poppins] text-white items-center h-21 md:h-18 nav-style text-2xl p-5 md:p-4 lg:p-4 xl:p-4 `}>
      <p className='text-[var(--foreground)] text-xl flex items-start  font-bold opacity-100 transition duration-300'>ROHIT DUBEY</p>
      <div>

        <nav className="justify-center   lg:flex   items-center flex   rounded-4xl px-5  duration-400 transfrom-transition  py-2 z-50 " >

          <ul className=' text-base flex  lg:flex mb-2  justify-between  xl:text-xl lg:text-xl left-0 items-center gap-2 md:gap-6  '>

            <li className="bg-gradient-to-b hover:text-[#0ea5e9] cursor-pointer transition duration-300 " onClick={() => handlescroll('Home')}  >
              Home</li>

            <li className="bg-gradient-to-b hover:text-[#0ea5e9] cursor-pointer  transition   duration-300 " onClick={() => handlescroll('Skills')} >
              Skills</li>
            <li className="bg-gradient-to-b hover:text-[#0ea5e9]  transition cursor-pointer   duration-300" onClick={() => handlescroll('Contact')} >
              Contact</li>
            <li className="bg-gradient-to-b hover:text-[#0ea5e9]  transition cursor-pointer   duration-300" onClick={() => handlescroll('Projects')} >
              Projects</li>



          </ul>
        </nav>

      </div>


    </div>




  )

}

export default Navbar
