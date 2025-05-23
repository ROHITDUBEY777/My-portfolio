import React,{useState} from 'react'
import { FaGithub } from "react-icons/fa";
import GlowingButton from './Glowingbutton';
import { IoMdMenu } from "react-icons/io";


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

  function controlmenu (){

    Setmenu(!Menu)
  }

  function closePopup () {
    Setmenu(false); 
  }
  return (


        <nav className="fixed backdrop-blur-3xl xl:flex  xl:justfiy-between flex  justify-between bg-gradient-to-b font-[Poppins] w-full z-50 right-0 top-0 left-0  items-center  nav-style text-2xl   p-3 ">
            <p className='text-[var(--foreground)] flex items-start  font-bold opacity-100 transition duration-300'>ROHIT DUBEY</p>
            
            
            <ul className=' hidden md:hidden lg:flex   justify-between  xl:text-3xl lg:text-2xl left-0 items-center  gap-16  '>
                <li className="bg-gradient-to-b cursor-pointer opacity-60 hover:opacity-100 transition duration-300 " onClick={()=>handlescroll('Home')}  >
                Home</li>

                <li className="bg-gradient-to-b opacity-60 cursor-pointer hover:opacity-100 transition   duration-300 " onClick={()=>handlescroll('Skills')} >
                Skills</li>
                   <li className="bg-gradient-to-b opacity-60 hover:opacity-100 transition cursor-pointer   duration-300"  onClick={()=>handlescroll('Contact')} >
                  Contact</li>
                 

             
            </ul>
            <div  className='hidden lg:flex justify-evenly  items-center  md:relative gap-8 md:gap-10  relative md:hidden   '>
            <div className='flex justify-center items-center  scale-100'>
              <a href="https://github.com/ROHITDUBEY777" >
             <FaGithub className=' scale-150 opacity-60 hover:opacity-100 ' />
             </a>
             </div>
        
            <GlowingButton href="https://www.linkedin.com/in/rohit-dubey-637a8627a/"
             className="cursor-pointer   md:hidden lg:scale-100 py-2 opacity-70 hover:opacity-100 " />
             </div>
             <div className=' block xl:hidden cursor-pointer '
           >
              

              <button className='flex md:flex  lg:hidden opacity-70 hover:opacity-100  scale-150 px-2 cursor-pointer  flex-col justify-between ' 
              onClick={()=>{
                 controlmenu();
              }}>
                <IoMdMenu classname = ' cursor-pointer opacity-70 hover:opacity-100' />
              </button>

              
             </div>
             <div   className={`absolute text-2xl    bg-[#18181b] flex flex-col w-fit p-6 h-screen top-0 right-0 text-center items-center transform transition-transform duration-300 ${Menu ? "opacity-100 scale-100 ":" opacity-0 scale-95 hidden invisible"}`}>
                 
              <button onClick={()=>
                closePopup()
              } class="absolute  cursor-pointer  scale-125 top-4 left-4 text-white opacity-60 hover:opacity-100  transition duration-300">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>    
              </button>
              <ul className='flex flex-col mt-[4vh] gap-2'>
              <li  onClick={()=>handlescroll2('Home')} className={`  my-2 cursor-pointer opacity-60 hover:opacity-100    duration-300 text-2xl`}>Home</li>
              <li onClick={()=>handlescroll2('Skills')} className=" my-2 cursor-pointer  opacity-60 hover:opacity-100  duration-300 mb-2 text-2xl">Skills</li>
              <li onClick={()=>handlescroll2('Contact')} className=" my-2 cursor-pointer opacity-60 hover:opacity-100   duration-300 text-2xl">Contact</li>
              <GlowingButton href="https://www.linkedin.com/in/rohit-dubey-637a8627a/"
             className="cursor-pointer   md:hidden lg:scale-100  opacity-70 hover:opacity-100 " /> 
            
                </ul>       
             </div>
        </nav>


         
         
  )

}

export default Navbar
