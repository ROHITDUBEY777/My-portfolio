import React from "react";
import photo from "../assets/photo.jpeg"
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";


const About = () => {
  return (
    <div id="About">
      {" "}
      <div className=" w-full  flex flex-col  text-center items-center mt-34  text-white        md:justify-between    " >
        
        <div className=" w-2xl    hover:scale-105 duration-400  rounded   text-center   py-4 ">

        <p className=" text-[var(--foreground)] mt-11   text-3xl font-bold    md:text-5xl lg:text-5xl xl:text-5xl   font-[Poppins] items-center ">
          {" "}
          About{" "}
        </p>
        <h1 className="roboto text-2xl  md:text-4xl     lg:text-4xl xl:text-4xl font-[Roboto] my-3  ">Hi, I'M ROHIT DUBEY</h1>
        <p className="opacity-80   text-sm px-40 md:px-0      md:text-xl text-center   ">
          I'm proficient in React-JS, Tailwind CSS, and CSS, with a strong
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
            <div></div>
          
          

       </div>
        {/* <div div className="items-end mr-4  border p-6 w-full   flex flex-col  cursor-pointer ">
        
          {ExportOBj.map((cards)=>(
              
           
            ))} */}
            <img src={photo}   className="rounded-full  flex flex-col md:w-1/4 w-1/3 "   />
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
