import React from "react";
import projects from "../INFO/projects";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <div className=" flex justify-center   min-h-screen mt-52   ">
      <h1 className="absolute flex flex-row items-center text-3xl   font-[Poppins] justify-center bg-none h-fit  md:text-6xl    ">
        My Projects
      </h1>
      <p className="absolute  md:absolute flex flex-col text-center mt-9 md:mt-22 text-base md:text-xl ">
        Check out some of the projects I've built - I’d love to hear what you
        think!
      </p>
      <div className="   items-center justify-evenly   m-auto md:w-screen   flex flex-col md:flex-row        flex-wrap">
        {projects.map((item) => (
          <div
            key={item.id}
            className="    bg-[var(--border)] mx-6 sm:h-[24rem] h-[24rem]  md:h-[28rem] xl:h-[28rem]   max-w-[22rem] md:gap-2.5 min-w-[16rem] md:block  my-24  bg-stroke-1 py-9 justify-center
                "
          >
            <ul className="flex flex-wrap       px-4">
              <li className=" xl:mx-6 flex flex-col text-2xl   md:py-2  ">
                <div className=" flex-row flex text-start   w-full  gap-4  justify-between ">
                  <p className=" flex  md:text-2xl text-xl  md:mb-6">
                    {" "}
                    {item.projname}{" "}
                  </p>
                  {/* <div className='absolute '> */}
                  {item.backgroundUrl && (
                    <img
                      src={item.backgroundUrl}
                      alt=""
                      className="pointer-events-none w-1/7    md:w-1/5  "
                    />
                  )}
                  {/* </div> */}
                </div>
                <div className="flex flex-col  mt-2 py-4">
                  <p className=" text-base  "> {item.progdesc}</p>
                  <a href={item.github}>
                    <p className="absolute      scale-125 opacity-60 hover:opacity-100 flex mt-3   ">
                      <FaGithub />
                    </p>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
