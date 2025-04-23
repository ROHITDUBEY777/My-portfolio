import React from "react";
import SkillObj from "../INFO/Skills";
import Section from "./Section";



const MySkills = () => {
  return (
      <div id="Skills">
        
      {/* <Section > */}

      
      
       <div className="flex  flex-wrap gap-10 md:ml-4  xl:ml-0 justify-center   "> 
        <p className=" flex  flex-col md:text-6xl text-3xl text-center  font-[Poppins]    text-[var(--foreground)]  w-full     ">My Skills</p>
         <p className="absolute flex flex-col text-center mt-9 md:mt-16 text-xl ">Explore the skills I've gained through my projects and experiences.</p>
        {SkillObj.map((item)=>(
          <div className="block p-0.5 mt-8  bg-no-repeat bg-[length:100%_100%] w-[24rem] min-w-[18rem]  max-w-1/2 " key={item.id} style={{backgroundImage:`url(${item.BackgroundUrl})`}}>
            <div className="flex flex-col min-h-[16rem] md:min-h-[22rem]  items-center justify-center p-5    text-center">
              <h5 className="md:mb-6 mb-4 md:text-2xl text-xl  ">{item.title}</h5>
             
              <p className="text-base">{item.Text}</p>
            </div>
          </div>
        ) )}
       </div>
    

      {/* </div> */}
 
  
      {/* </Section> */}
  
      </div>
  );
};

export default MySkills;
