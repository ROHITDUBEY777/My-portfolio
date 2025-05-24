import React, { useState } from "react";
import Image from "../assets/full-stack.png";
import Contactform from "./contactform";

const Contact = () => {
  return (
    <>
      <div id="Contact" >
        <p className="flex flex-col   text-base  px-6 md:px-10 md:text-base lg:text-xl xl:text-xl  mt-52">
          Feel free to contact me if you have any questions or just want to
          connect with me.{" "}
        </p>
        <div className="   md:justify-between px-6 md:px-10 mb-10 items-center  flex   flex-col md:flex-col lg:flex-row xl:flex-row    mt-4  gap-5         ">
          <div className=" md:h-fit    md:max-h-fit rounded-2xl lg:w-1/3 xl:w-1/3    h-fit bg-gradient-to-r from-zinc-900 to-zinc-900 justify-center md:w-2/3  bg-[var(--bg)] px-4 py-6">
            <p className="text-[var(--foreground)]  md:text-3xl lg:text-4xl xl:text-4xl text-2xl font-[Poppins] mb-2">
              Contact Me
            </p>
            <p className="text-base md:text-base lg:text-xl xl:text-xl   mb-6">
              Looking for a developer to bring your ideas to life?
            </p>
            <div  >

             <Contactform   />
            </div>
          </div>

          <div className="">
            <img src={Image} alt="" className=" w-full" />
          </div>
        </div>
      </div>
    </>
  );
};


export default Contact;
