import React,{useState,useEffect} from 'react'
// import { FaGithub } from "react-icons/fa";
import GlowingButton from './Glowingbutton';
import { IoMdMenu } from "react-icons/io";
import { ScrollSmoother } from 'gsap/ScrollSmoother';

const Navbar = () => {

  const[show,setshow] = useState(true);
  const[lastscrollY,setlastscrolly] = useState(0);

  const ControlNavbar = () => {
    if(window.scrollY > lastscrollY ){
      //hiding the navbar while scrolling down
      setshow(false);
    }
    else{
      //unhiding the navbar
      setshow(true);
    }
    setlastscrolly(window.scrollY);
  }

  useEffect(()=>{
    window.addEventListener("scroll",ControlNavbar);
    return () =>{
    window.removeEventListener("scroll",ControlNavbar)
    };
  },[lastscrollY])
 
 
  const handlescroll = (id) =>{
    const element = document.getElementById(id);
    if(element){
      const smoother = ScrollSmoother.get();
      if(smoother){
           smoother.scrollTo(element,true);
      }
      else{
           element.scrollIntoView({behavior:'smooth'});
      }
      
     
    }

     
  
  };
 
  return (


        <div className={`fixed  xl:flex  xl:justfiy-center flex  justify-center  font-[Poppins] text-white  z-50 right-0 top-0 left-0  items-center h-16 md:h-18 w-full  ${show ? "opacity-100 translate-y-0":"opacity-0 invisible"}   nav-style text-2xl   p-5 md:p-4 lg:p-4 xl:p-4 `}>
            {/* <p className='text-[var(--foreground)] flex items-start  font-bold opacity-100 transition duration-300'>ROHIT DUBEY</p> */}
            
            <nav className={` justify-center border-sky-300 border  lg:flex   items-center flex   rounded-4xl px-5 backdrop-blur-3xl duration-400 transfrom-transition  py-2 z-50 ${ show ? " translate-y-0   ": " -translate-y-full   " }`} > 

            <ul className=' text-base flex  lg:flex   justify-between  xl:text-xl lg:text-xl left-0 items-center gap-2 md:gap-6  '>

                <li className="bg-gradient-to-b hover:text-[#0ea5e9] cursor-pointer transition duration-300 " onClick={()=>handlescroll('Home')}  >
                Home</li>
 
                <li className="bg-gradient-to-b hover:text-[#0ea5e9] cursor-pointer  transition   duration-300 " onClick={()=>handlescroll('Skills')} >
                Skills</li>
                   <li className="bg-gradient-to-b hover:text-[#0ea5e9]  transition cursor-pointer   duration-300"  onClick={()=>handlescroll('Contact')} >
                  Contact</li>
                   <li className="bg-gradient-to-b hover:text-[#0ea5e9]  transition cursor-pointer   duration-300"  onClick={()=>handlescroll('Projects')} >
                  Projects</li>
                 

             
            </ul>
              </nav>
           
           
            
        </div>


         
         
  )

}

export default Navbar
