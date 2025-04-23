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
 
  return (
        <nav className="fixed backdrop-blur-3xl xl:flex  xl:justfiy-between flex  justify-between bg-gradient-to-b font-Poppins w-full z-30 top-0 left-0  items-center  nav-style text-2xl   p-3 ">
            <p className='text-white flex items-start  font-bold opacity-100 transition duration-300'>ROHIT DUBEY</p>
            
            
            <ul className=' hidden md:flex md:flex-row  justify-between md:text-2xl lg:text-2xl left-0 items-center  gap-16  '>
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
              
              <BiAlignRight className=' cursor-pointer '/>
              </button>
             </div>
             <div className={`fixed   text-2xl z-10 backdrop-blur-2xl bg-white/30   flex flex-col   p-6 h-screen  top-8 right-4 duration-300 text-center items-center border transform transition-transform  ${Menu ? "opacity-100 scale-100 ":" opacity-0 hidden invisible"}`}>
              <ul className='flex flex-col '>
              <li className="bg-gradient-to-b my-2 duration-300 text-2xl"><a href="/Home">Home</a></li>
              <li className="bg-gradient-to-b my-2 duration-300 text-2xl"><a href="/Contact">Contact</a></li>
              <li className="bg-gradient-to-b my-2 duration-300  text-2xl"><a href="/About">About</a></li>
             
            
                </ul>       
             </div>
        </nav>


         
         
  )

}

export default Navbar
