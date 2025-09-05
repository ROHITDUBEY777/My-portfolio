import React from 'react'
// import InfiniteScroll from "../components/InfiniteScroll";
import { FaFigma } from "react-icons/fa";

// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";


const NewSkills = () => {
  return (
    <div>
     
       <div className="flex mt-52 flex-wrap gap-10 md:ml-4  xl:ml-0 justify-center   "> 
        <p id="Skills" className=" flex  flex-col md:text-5xl lg:text-5xl xl:text-5xl text-3xl text-center font-bold     font-[Poppins]    text-[var(--foreground)]  w-full     "> Skills & Technologies </p>
     
         <p className="absolute flex flex-col text-center mt-9 mb-4 md:mt-16 text-base md:text-xl ">Explore the skills I've gained through my projects and experiences.</p>
        
        
      <div className="  w-full      pointer-events-none  rounded-md ">
          
            <div  className="  ">
              <div className="logo-div2 relative  py-5 h-full flex  gap-10 md:gap-20    items-center w-full overflow-hidden">
                {/* <div className="bg-gradient-to-r from-black to-transparent absolute left-0 top-0 bottom-0 z-20 h-full  md:w-1/6"></div>
                <div className="bg-gradient-to-l from-black to-transparent absolute right-0 top-0 bottom-0 z-20 h-full  md:w-1/6"></div> */}
                <div  className="logo-slide2  text-8xl items-center justify-center gap-6    md:gap-20 h-[8rem] md:h-[11rem]  flex w-full">
                 <FaJs />
                  <FaReact />
                  <FaFigma />
                <FaCss3Alt/>
                  <RiTailwindCssFill />
                  <FaHtml5 />
                  <FaGithub />
                  <FaJava />
                </div>
                <div  className="logo-slide2    text-8xl items-center justify-center gap-6  md:gap-20    md:h-[11rem]  flex w-full">
                <FaJs />
                  <FaReact />
                  <FaFigma />
                <FaCss3Alt/>
                  <RiTailwindCssFill />
                  <FaHtml5 />
                  <FaGithub />
                     <FaJava />
                </div>
              </div>
            </div>
          </div>
         
       
      </div>
   </div>
  )
}

export default NewSkills
