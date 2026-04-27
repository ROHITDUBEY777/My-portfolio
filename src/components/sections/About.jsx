import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="Home" className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-20 text-white overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <motion.div 
        className="w-full max-w-4xl z-10 flex flex-col items-center text-center mt-16 md:mt-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm md:text-base font-medium tracking-wide text-cyan-300 backdrop-blur-md">
            Freelance Web Developer
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-6"
        >
          Hi, I'm <span className="text-cyan-400">Rohit Dubey</span>
        </motion.h1>

        <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-gray-400 font-medium mb-6">
           • <span className="text-cyan-400">MERN</span>  Stack Developer
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="text-gray-400 text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          MERN stack developer passionate about building impactful web applications. I enjoy solving real-world problems, shipping end-to-end features, and working in fast-paced environments where I can learn and contribute. Proficient in React, Tailwind CSS, Node.js, and Express.
        </motion.p>

        <motion.div variants={itemVariants} className="flex space-x-6 mb-10">
          <SocialLink href="https://github.com/ROHITDUBEY777" icon={<FaGithub className="text-2xl" />} />
          <SocialLink href="https://www.linkedin.com/in/rohit-dubey-637a8627a/" icon={<AiOutlineLinkedin className="text-2xl" />} />
          <SocialLink href="https://x.com/rohit_dubey_07" icon={<FaSquareXTwitter className="text-2xl" />} />
          <SocialLink href="https://www.instagram.com/_rohit_dubey_07?igsh=MXMwbjFhdW5yZnRybg==" icon={<IoLogoInstagram className="text-2xl" />} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <button className="group relative px-8 py-3 bg-cyan-500 text-white rounded-full font-medium overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:-translate-y-1 cursor-pointer">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>
            <span className="relative z-10 flex items-center gap-2">Let's Connect</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex justify-center items-center w-12 h-12 bg-white/5 border border-white/10 rounded-full text-white/70 hover:text-cyan-400 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 shadow-lg backdrop-blur-sm cursor-pointer"
  >
    {icon}
  </a>
);

export default About;

