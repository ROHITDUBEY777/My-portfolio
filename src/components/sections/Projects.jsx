import React from "react";
import projectsobj from "../INFO/projects";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="Projects" className="relative py-24 px-6 md:px-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Check out some of the projects I've built recently.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsobj.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-colors duration-500 backdrop-blur-sm shadow-xl flex flex-col"
            >
              <div className="w-full h-56 overflow-hidden bg-black/20">
                <img
                  src={item.backgroundUrl}
                  alt={item.projname}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.projname}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-1">
                  {item.progdesc}
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  {item.livelink && (
                    <a
                      href={item.livelink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-black bg-cyan-400 px-4 py-2 rounded-full hover:bg-cyan-300 transition-colors"
                    >
                      <FaExternalLinkAlt size={12} /> Live Demo
                    </a>
                  )}
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
                  >
                    <FaGithub size={14} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
