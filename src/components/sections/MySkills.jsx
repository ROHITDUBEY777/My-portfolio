import React from "react";
import SkillObj from "../INFO/Skills";
import Section from "./Section";



const MySkills = () => {
  return (
      <div   >
        
      <Section>

      
      
       <div className="flex  flex-wrap gap-10 md:ml-4  xl:ml-0 justify-center   "> 
        <p id="Skills" className=" flex  flex-col md:text-4xl lg:text-5xl xl:text-5xl text-3xl text-center font-bold    font-[Poppins]    text-[var(--foreground)]  w-full     "> Skills & Technologies </p>
        
         <p className="absolute flex flex-col text-center mt-9 mb-4 md:mt-16 text-base md:text-xl ">Explore the skills I've gained through my projects and experiences.</p>
        
        
         
        {SkillObj.map((item)=>(
          <div className="block p-1 rounded-2xl mt-8  bg-no-repeat bg-[length:100%_100%] w-[24rem]  min-w-[18rem] bg-gradient-to-b from-indigo-600 via-teal-500 to-zinc-900 max-w-1/2 " key={item.id}  >
            <div className="flex rounded-2xl bg-black flex-col min-h-[16rem] md:min-h-[22rem]  items-center justify-center p-5  text-center">
              <h5 className="md:mb-6 mb-4 md:text-2xl text-xl  ">{item.title}</h5>
             
              <p className="text-base">{item.Text}</p>
            </div>
          </div>
        ) )}
     

      </div>
      </Section>
       </div>

   
  );
};

export default MySkills;
