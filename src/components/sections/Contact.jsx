import React, { useState } from "react";
import Image from "../assets/full-stack.png";
import Contactform from "./contactform";

const Contact = () => {
  return (
    <>
      <div  className="z-0  " onSubmit={(e)=>e.preventDefault()}>
        <div className="min-h-screen w-full  relative">
  {/* Black Grid with White Dots Background */}
  
  {/* Your Content/Components */}

   

        <p id="Contact" className="flex flex-col relative py-5  z-10  text-base  px-6 md:px-10 md:text-base lg:text-xl xl:text-xl  ">
          Feel free to contact me if you have any questions or just want to
          connect with me.{" "}
        </p>
        <div className="   md:justify-between px-6 md:px-10 mb-10 items-center  flex   flex-col md:flex-col lg:flex-row xl:flex-row    mt-4  gap-5         ">
          <div className=" md:h-fit  z-10   md:max-h-fit lg:w-1/3 xl:w-1/3     justify-center md:w-2/3  bg-[var(--bg)] px-4 py-6">
            <p className="text-[var(--foreground)] font-bold  md:text-3xl lg:text-4xl xl:text-4xl text-2xl font-[Poppins] mb-2">
              Contact Me
            </p>
            <p className="text-base md:text-base lg:text-xl xl:text-xl   mb-6">
              Looking for a developer to bring your ideas to life?
            </p>
            <div className="relative   z-10" >

             <Contactform   />
            </div>
          </div>

          <div className="z-10">
            <img src={Image} alt="" className=" w-full" />

            </div>
            <div
    className="absolute inset-0 opacity-70 z-0 "
    style={{
      background: "#000000",
      backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
        radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)
      `,
      backgroundSize: "20px 20px, 20px 20px, 20px 20px",
      backgroundPosition: "0 0, 0 0, 0 0",
    }}
  />
          </div>
          </div>
       </div>
    </>
  );
};


export default Contact;

 