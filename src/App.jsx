
import React from "react"
import Home from "./components/Home"
import Navbar from "./components/sections/Navbar"
import About from "./components/sections/About"
import MySkills from "./components/sections/MySkills"
import Projects from "./components/sections/Projects"
import Cursor from "./components/sections/Cursor"

import Resume from "./components/sections/Resume"

import Footer from "./components/sections/Footer"
import Contact from "./components/sections/Contact"
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"


function App() {

  return (
    <> 
    
      <Router>

    <main className="relative min-h-screen  justify-center text-white bg-[var(--background)] overflow-hidden">
       {/* <Cursor /> */}
       <Cursor />
       <Routes>
{/* 
      <Route path="/" element={<Navbar />} className={`text-[var(--foreground)]`}  />      
      <Route path={`Home`} element={<Home />} />      
      <Route path="/" element={<About />} />      
      <Route path="/" element={<MySkills />} />      
      <Route path="/" element={<Projects />} />      
      <Route path="/" element={<Resume />} />      
      <Route path="/" element={<Contact />} />      
      <Route path="/" element={<Footer />} />      

      */}
      
      <Route path="/" element={
       <>

       <div>

       <Navbar className={`text-[var(--foreground)`} />
       
       <Home />
       <About />
       <MySkills />
       <Projects />
       <Resume />
       <Contact />
       <Footer />
       </div>
       </>
      }/>

      
       </Routes>
 
    </main>
      </Router>
    </>
  ) 
}

export default App
