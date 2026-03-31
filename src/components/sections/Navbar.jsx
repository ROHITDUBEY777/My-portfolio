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


    <div className={`fixed top-0 left-0 mt-2 space   xl:flex   flex-col  md:flex-row xl:justfiy-center w-full   border-white   flex justify-around z-50 font-[Poppins] text-white items-center h-21 md:h-18 nav-style   `}>
      <div className='w-fit  flex-col md:flex-row  py-3  md:gap-10     text-center items-center   my-auto rounded-4xl justify-between  px-5  backdrop-blur-md   border-white  flex  '>
      <p className='text-[var(--foreground)]  text-base  md:text-xl space  flex items-start  font-bold opacity-100 transition duration-300'>ROHIT DUBEY</p>

        <nav className="   lg:flex   items-center flex px-4    duration-400 transfrom-transition  " >

          <ul className='  flex  lg:flex   justify-between opacity-80  xl:text-xl lg:text-xl  left-0 items-center gap-3 md:gap-5   '>

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
