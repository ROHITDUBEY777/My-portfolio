import React from 'react';
import { motion } from 'framer-motion';
import { FaFigma, FaReact, FaCss3Alt, FaJs, FaHtml5, FaJava } from "react-icons/fa";
import { FaGithub, FaNodeJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import skills from "../INFO/skills";

const iconMap = {
  "React": <FaReact className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={40} />,
  "JavaScript": <FaJs className="text-yellow-400 group-hover:scale-110 transition-transform duration-300" size={40} />,
  "Node.js": <FaNodeJs className="text-green-500 group-hover:scale-110 transition-transform duration-300" size={40} />,
  "Express.js": <FaNodeJs className="text-gray-400 group-hover:scale-110 transition-transform duration-300" size={40} />,
  "Tailwind CSS": <RiTailwindCssFill className="text-cyan-300 group-hover:scale-110 transition-transform duration-300" size={40} />,
  "MongoDB": <DiMongodb className="text-green-400 group-hover:scale-110 transition-transform duration-300" size={40} />,
  "HTML5": <FaHtml5 className="text-orange-500 group-hover:scale-110 transition-transform duration-300" size={40} />,
  "CSS3": <FaCss3Alt className="text-blue-500 group-hover:scale-110 transition-transform duration-300" size={40} />,
  "Java": <FaJava className="text-red-500 group-hover:scale-110 transition-transform duration-300" size={40} />,
  "MySQL": <SiMysql className="text-blue-400 group-hover:scale-110 transition-transform duration-300" size={40} />,
  "GitHub": <FaGithub className="text-white group-hover:scale-110 transition-transform duration-300" size={40} />,
  "Figma": <FaFigma className="text-pink-400 group-hover:scale-110 transition-transform duration-300" size={40} />,
};

const NewSkills = () => {
  return (
    <section id="Skills" className="relative w-full py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60"
        >
          Skills & <span className="text-cyan-400">Technologies</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-center text-lg md:text-xl mb-16"
        >
          Tools and technologies I use to bring ideas to life.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm shadow-xl"
            >
              <div className="mb-4">
                {iconMap[skill.name] || <FaReact className="text-white group-hover:scale-110 transition-transform duration-300" size={40} />}
              </div>
              <p className="text-gray-300 font-medium text-sm md:text-base group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewSkills;
