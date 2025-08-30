import React from "react";

const GlowingButton = () => {
  return (
    <a href="https://www.linkedin.com/in/rohit-dubey-637a8627a/"><button  className="roboto font-[roboto] relative px-6 py-3 opacity-80 text-xl  hover:opacity-100 mt-4 cursor-pointer  font-bold  rounded-md border border-[rgba(240,237,234,0.98)] 
                       overflow-hidden  transition-all duration-300 bg-[#22d3ee] text-black  
                    ">
      <span className="relative z-10">Lets Connect</span>
      <span className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,204,153,0.7)_10%,_transparent_60%)] 
                      scale-0 transition-transform duration-300 group-hover:scale-150 opacity-60"></span>
    </button></a>
  );
};

export default GlowingButton;