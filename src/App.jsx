
import React from "react"
import Home from "./components/Home"
import Navbar from "./components/sections/Navbar"
import About from "./components/sections/About"
import MySkills from "./components/sections/MySkills"
import Projects from "./components/sections/Projects"

import Resume from "./components/sections/Resume"

import Footer from "./components/sections/Footer"
import Contact from "./components/sections/Contact"

function App() {

  return (
    <> 
    <main className="relative min-h-screen  justify-center text-white bg-[var(--background)] overflow-hidden">
      <Navbar className="text-[var(--foreground)]"  />
      <Home/>
      <About />
      <MySkills />
      <Projects />
      <Resume />
      <Contact />
    </main>
    <Footer  />
    </>
  ) 
}

export default App
