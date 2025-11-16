import React, { useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/sections/Navbar";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Resume from "./components/sections/Resume";
import Footer from "./components/sections/Footer";
import Contact from "./components/sections/Contact";
import NewSkills from "./components/sections/NewSkills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

function App() {
  useEffect(() => {
    
    ScrollTrigger.getAll().forEach((t) => t.kill());

    
    const smootherInstance = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });

    return () => {
   
      smootherInstance.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Router>
        <Navbar />

      
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="relative min-h-screen text-white bg-[var(--background)] overflow-hidden">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Home />
                      <About />
                      <NewSkills />
                      <Projects />
                      <Resume />
                      <Contact />
                      <Footer />
                    </>
                  }
                />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
