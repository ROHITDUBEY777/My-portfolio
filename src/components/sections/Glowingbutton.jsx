import React from "react";

const GlowingButton = () => {
  return (
    <a href="https://www.linkedin.com/in/rohit-dubey-637a8627a/"><button  className="relative px-5 py-2 opacity-90 hover:opacity-100 cursor-pointer font-bold text-lg rounded-full bg-black border border-[rgba(240,237,234,0.98)] 
                       overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,204,153,1)]
                    ">
      <span className="relative z-10">Get in Touch</span>
      <span className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,204,153,0.7)_10%,_transparent_60%)] 
                      scale-0 transition-transform duration-300 group-hover:scale-150 opacity-60"></span>
    </button></a>
  );
};

export default GlowingButton;