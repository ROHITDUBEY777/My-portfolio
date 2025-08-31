import React from "react";
import projectsobj from "../INFO/projects";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="flex flex-col justify-center min-h-screen mt-32 px-6"
    >
      {/* Title */}
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-lg">
        Projects 
      </h1>

      {/* Subtitle */}
      <p className="text-center mt-3 text-gray-400 text-sm md:text-lg">
        Check out some of the projects I've built — I’d love to hear what you
        think!
      </p>

      {/* Projects Grid */}
      <div className="flex flex-wrap justify-center gap-12 py-12">
        {projectsobj.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-72 md:w-80 lg:w-96 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-2"
          >
            {/* Project Title */}
            <p className="text-center text-lg lg:text-2xl font-semibold text-cyan-400 mt-6">
              {item.projname}
            </p>

            {/* Image */}
            <img
              src={item.backgroundUrl}
              alt="project preview"
              className="w-full h-fit object-cover rounded-lg mt-4 px-4"
            />

            {/* Live Link Button */}
            <div className="flex flex-row gap-6 justify-center mt-4">
              <a
                href={item.livelink}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 border border-cyan-400 text-cyan-300 rounded-xl hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                🔗 Live Link
              </a>
              <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 border border-cyan-400 text-cyan-300 rounded-xl hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                Github
              </a>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 text-center px-6 py-6">
              {item.progdesc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
