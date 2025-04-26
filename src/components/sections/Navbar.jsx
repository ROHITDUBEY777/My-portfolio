import React,{useState} from 'react'
import { FaGithub } from "react-icons/fa";
import GlowingButton from './Glowingbutton';
import { BiAlignRight } from "react-icons/bi";

const Navbar = () => {
 
 
  const [Menu,Setmenu] = useState(false);
  const handlescroll = (id) =>{
    const element = document.getElementById(id);
    if(element){
      element.scrollIntoView({behavior:'smooth'});
     
    }

     
  
  }
 
  const handlescroll2 = (id) =>{
    const element = document.getElementById(id);
    if(element){
      element.scrollIntoView({behavior:'smooth'});
     
    }

     
    Setmenu(!Menu)
    
  }
 
   
  return (


        <nav className="fixed backdrop-blur-3xl xl:flex  xl:justfiy-between flex  justify-between bg-gradient-to-b font-Poppins w-full z-50 right-0 top-0 left-0  items-center  nav-style text-2xl   p-3 ">
            <p className='text-white flex items-start  font-bold opacity-100 transition duration-300'>ROHIT DUBEY</p>
            
            
            <ul className=' hidden md:flex md:flex-row  justify-between md:text-3xl lg:text-3xl left-0 items-center  gap-16  '>
                <li className="bg-gradient-to-b cursor-pointer opacity-70 hover:opacity-100 transition duration-300 " onClick={()=>handlescroll('Home')}  >
                Home</li>
                
                <li className="bg-gradient-to-b opacity-70 cursor-pointer hover:opacity-100 transition   duration-300 " onClick={()=>handlescroll('Skills')} >
                Skills</li>
                   <li className="bg-gradient-to-b opacity-70 hover:opacity-100 transition cursor-pointer   duration-300"  onClick={()=>handlescroll('Contact')} >
                  Contact</li>
                 

             
            </ul>
            <div  className='hidden md:flex justify-between items-center gap-4 mr-4 '>
            <div className='flex justify-center items-center  scale-100'>
              <a href="https://github.com/ROHITDUBEY777" >
             <FaGithub className='scale-150 opacity-60 hover:opacity-100 ' />
             </a>
             </div>
        
            <GlowingButton href="https://www.linkedin.com/in/rohit-dubey-637a8627a/"
             className="cursor-pointer   md:hidden lg:scale-100  opacity-70 hover:opacity-100 " />
             </div>
             <div className=' block xl:hidden cursor-pointer '
           >
              <button className='flex md:hidden  lg:hidden opacity-70 hover:opacity-100  cursor-pointer  flex-col justify-between '
               onClick={()=>
                Setmenu(!Menu)
              }>
              
              <BiAlignRight className='border scale-124 cursor-pointer '/>
              </button>
             </div>
             <div   className={`absolute  bg-[#020617] text-2xl  z-50   backdrop-blur-2xl  flex-col  p-6 h-screen  top-10 right-4 duration-300 text-center items-center transform transition-transform   ${Menu ? "opacity-100 scale-100 ":" opacity-0 scale-95 hidden invisible"}`}>
              <ul className='flex flex-col '>
              <li  onClick={()=>handlescroll2('Home')} className={`  my-2 cursor-pointer opacity-70 hover:opacity-100    duration-300 text-2xl`}>Home</li>
              <li onClick={()=>handlescroll2('Skills')} className=" my-2 cursor-pointer  opacity-70 hover:opacity-100  duration-300 mb-2 text-2xl">Skills</li>
              <li onClick={()=>handlescroll2('Contact')} className=" my-2 cursor-pointer opacity-70 hover:opacity-100   duration-300 text-2xl">Contact</li>
              <GlowingButton href="https://www.linkedin.com/in/rohit-dubey-637a8627a/"
             className="cursor-pointer   md:hidden lg:scale-100  opacity-70 hover:opacity-100 " /> 
            
                </ul>       
             </div>
        </nav>


         
         
  )

}

export default Navbar
