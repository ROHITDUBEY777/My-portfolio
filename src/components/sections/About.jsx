import React from "react";
import photo from "../assets/photo.jpeg"
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";


const About = () => {
  return (
    <div id="Home">
      {" "}
      <div className=" w-full  flex flex-col   justify-center  px-20  min-h-screen z-0 text-center items-center   text-white        md:justify-center    " >
        
        <div className=" w-2xl     duration-400  rounded   text-center   py-4 ">

        <p className=" text-[var(--foreground)] mt-11   text-3xl font-bold    md:text-5xl lg:text-5xl xl:text-5xl  items-center ">
          
          About Me
        </p>
        <h1 className="roboto text-2xl  md:text-4xl     lg:text-4xl xl:text-4xl font-[Roboto] my-3  ">Hi, I'M ROHIT DUBEY</h1>
        <p className="opacity-80   text-sm px-40 md:px-0      md:text-xl text-center   ">
         A Website Developer as I'm proficient in React-JS, Tailwind CSS,Node js and Express js [MERN STACK], with a strong
          passion for learning and exploring newer technologies. I enjoy
          building sleek, responsive web applications and constantly improving
          my skill set.
        </p>
        <div className=" flex  justify-center items-center my-5 left-2 relative gap-12  hover:shadow[0_0_15px_rgba(255,204,153,1)]   cursor-pointer   flex-row">
          <a href="https://github.com/ROHITDUBEY777">
            <FaGithub className="scale-175  opacity-70 hover:opacity-100 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/rohit-dubey-637a8627a/">
            <AiOutlineLinkedin className="scale-175 opacity-70 hover:opacity-100 transition duration-300 " />
          </a>
          <a href="https://x.com/rohit_dubey_07">
            <FaSquareXTwitter className="scale-175  opacity-70 hover:opacity-100 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/_rohit_dubey_07?igsh=MXMwbjFhdW5yZnRybg==">
            <IoLogoInstagram className="scale-175  opacity-70 hover:opacity-100 transition duration-300" />
          </a>
          
            </div>
            <div className="flex text-center items-center flex-col">
              <button className="shadow-2xl  block border-3  duration-400 hover:-translate-y-2 hover:shadow-cyan-500/40  border-white  transition-all   hover:text-black hover:bg-cyan-400  cursor-pointer md:text-2xl  mt-4 max-w-fit px-4 py-2 min-w-1/5  h-16 ">Let's Connect</button>
            </div>
            <div></div>
          
          

       </div>
        {/* <div div className="items-end mr-4  border p-6 w-full   flex flex-col  cursor-pointer ">
        
          {ExportOBj.map((cards)=>(
              
           
            ))} */}
            {/* <img src={photo}   className="rounded-full  flex flex-col md:w-1/4 w-1/1 "   /> */}
         </div>  
            {/* <div className=" flex flex-col border w-full md:scale-100 justify-between items-end ">

          <img 
           src={Image} width={240} height={240} 
            />
           </div> */}
      
    
    </div>
  );
};

export default About;
