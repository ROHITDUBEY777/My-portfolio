import React from 'react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { motion } from 'framer-motion';
import { FiAlignRight } from "react-icons/fi";
import { useState } from 'react';
const Navbar = () => {
  const [open,close] = useState(false);
  const handlescroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const smoother = ScrollSmoother.get();
      if (smoother) {
        smoother.scrollTo(element, true);
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    close(!open)
  };

  const togglemenu = () => {
      close(!open)
  } 
  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl  z-50 rounded-md border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white cursor-pointer" onClick={() => handlescroll('Home')}>
          Rohit Dubey 
        </p>
        <nav>
          <ul className="  space-x-8 hidden md:flex md:text-base font-medium text-white/70">
            <li className="hover:text-cyan-400 transition-colors cursor-pointer" onClick={() => handlescroll('Home')}>Home</li>
            <li className="hover:text-cyan-400 transition-colors cursor-pointer" onClick={() => handlescroll('Skills')}>Skills</li>
            <li className="hover:text-cyan-400 transition-colors cursor-pointer" onClick={() => handlescroll('Projects')}>Projects</li>
            {/* <li className="hover:text-cyan-400 transition-colors cursor-pointer" onClick={() => handlescroll('Certifications')}>Certifications</li> */}
            <li className="hover:text-cyan-400 transition-colors cursor-pointer" onClick={() => handlescroll('Resume')}>Resume</li>
            <li className="hover:text-cyan-400 transition-colors cursor-pointer" onClick={() => handlescroll('Contact')}>Contact</li>
          </ul>
          
        
        
        </nav>
         <button onClick={togglemenu} className='md:hidden text-white text-2xl hover:opacity-100 flex opacity-80'>
          <FiAlignRight />
          </button>
        </div>
       
         {open &&(
          <div className="   md:hidden flex flex-col text-start px-6 gap-4 mb-2  font-medium text-white/70">
            <p className="hover:text-cyan-400 transition-colors cursor-pointer" onClick={() => handlescroll('Home')}>Home</p>
            <p className="hover:text-cyan-400 transition-colors cursor-pointer" onClick={() => handlescroll('Skills')}>Skills</p>
            <p className="hover:text-cyan-400 transition-colors cursor-pointer" onClick={() => handlescroll('Projects')}>Projects</p>
            <p className="hover:text-cyan-400 transition-colors cursor-pointer" onClick={() => handlescroll('Resume')}>Resume</p>
            <p className="hover:text-cyan-400 transition-colors cursor-pointer" onClick={() => handlescroll('Contact')}>Contact</p>
          
          </div>
         )}
          
        
        
    </motion.div>
  );
};

export default Navbar;
