
import React from "react"
import Home from "./components/Home"
import Navbar from "./components/sections/Navbar"
import About from "./components/sections/About"
// import MySkills from "./components/sections/MySkills"
import Projects from "./components/sections/Projects"
import Cursor from "./components/sections/Cursor"

import Resume from "./components/sections/Resume"
import { useEffect } from "react"
import Footer from "./components/sections/Footer"
import Contact from "./components/sections/Contact"
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import NewSkills from "./components/sections/NewSkills"
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollSmoother,ScrollTrigger)
function App() {

  useEffect(()=>{
    if(!ScrollSmoother.get()){
      ScrollSmoother.create({
        wrapper:"#smooth-wrapper",
        content:"#smooth-content",
        smooth:2,
        effects:true,
      })
    }
  },[]);

  return (
    <> 
      
      <Router>
       <Cursor />
       <div id="smooth-wrapper">
       <div id="smooth-content">

    <main className="relative min-h-screen  justify-center text-white bg-[var(--background)] overflow-hidden">
      
     
       <Routes>
        

      <Route path="/" element={
        <>

     

       <Navbar  />
       
       <Home />
       <About />
       <NewSkills />
       <Projects />
       <Resume />
       <Contact />
       <Footer />
      
       </>
      }/>

      
       </Routes>

    
    </main>
      </div>
 
        </div>
      </Router>
    </>
  ) 
}

export default App
