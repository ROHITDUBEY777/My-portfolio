import React from "react";
import Image from "../assets/image.png";
import photo from "../assets/photo.jpeg"
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";


const About = () => {
  return (
    <div id="About">
      {" "}
      <div className=" w-full  flex items-center mt-64     px-10    justify-between  min-h-screen  " >
        
        <div className=" w-2xl ">

        <p className="  textColor  text-4xl    md:text-5xl font-[Poppins] items-center text-white">
          {" "}
          About{" "}
        </p>
        <h1 className="text-2xl  md:text-5xl  font-[Robot] my-3  ">Hi, I'M ROHIT DUBEY</h1>
        <p className="opacity-80 flex md:text-2xl   ">
          I'm proficient in React-JS, Tailwind CSS, and CSS, with a strong
          passion for learning and exploring newer technologies. I enjoy
          building sleek, responsive web applications and constantly improving
          my skill set.
        </p>
        <div className=" flex  justify-start items-center my-5 left-2 relative gap-12  hover:shadow[0_0_15px_rgba(255,204,153,1)]   cursor-pointer   flex-row">
          <a href="https://github.com/ROHITDUBEY777">
            <FaGithub className="scale-200 opacity-70 hover:opacity-100 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/rohit-dubey-637a8627a/">
            <AiOutlineLinkedin className="scale-200 opacity-70 hover:opacity-100 transition duration-300 " />
          </a>
          <a href="https://x.com/rohit_dubey_07">
            <FaSquareXTwitter className="scale-200 opacity-70 hover:opacity-100 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/_rohit_dubey_07?igsh=MXMwbjFhdW5yZnRybg==">
            <IoLogoInstagram className="scale-200 opacity-70 hover:opacity-100 transition duration-300" />
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
