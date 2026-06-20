import React from "react";
import certifications from "../INFO/Certifications";

const Certifications = () => {
  return (
    <section
      id="Certifications"
      className="min-h-screen flex  flex-col items-center py-20 px-6"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Certifications &{" "}
        <span className="text-cyan-400">Achievements</span>
      </h1>

      <div className="container mx-auto grid grid-cols-1 px-25 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((item, index) => (
          <div
            key={index}
            className="border border-white/20 rounded-xl bg-black/10 p-4 hover:border-cyan-400 transition-all duration-300"
          >
            <h2 className="text-2xl  font-semibold text-center mb-4">
              {item.name}
            </h2>

            <img
              src={item.img}
              alt={item.name}
              className="w-full h-auto rounded-lg object-cover"
            />
             { item.link && (
    
              <button className="flex items-center gap-2 text-sm cursor-pointer font-medium mt-4 hover:-translate-y-1 duration-300 transition-transform text-white border border-white/20 px-8 py-2 rounded-full hover:bg-white hover:text-black " >
             <a target="blank" href={item.link} >
              <h1 className="cursor-pointer">Link </h1>
              </a> 
              </button>
              
             )}
             
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;