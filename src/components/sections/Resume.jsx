import React from 'react';
import { motion } from 'framer-motion';
import myresume from '../assets/NewResume.pdf';

export default function Resume() {
  return (
    <section id='Resume' className='relative py-32 px-6 md:px-20 overflow-hidden flex flex-col items-center text-center'>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl bg-white/5 border border-white/10 p-10 md:p-16 rounded-3xl backdrop-blur-sm"
      >
        <h2 className='text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6'>
          My <span className="text-cyan-400">Resume</span>
        </h2>
        <p className='text-gray-400 text-lg mb-10'>
          Interested in my full professional background, skills, and experience? Download my resume to learn more.
        </p>
        
        <a target='_blank' rel="noreferrer" href={myresume} className="inline-block">
          <button className="group relative px-8 py-3 bg-cyan-500 text-black rounded-full font-semibold overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:-translate-y-1 cursor-pointer">
            <span className="relative z-10 flex items-center gap-2">
              Download PDF
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>
          </button>
        </a>
      </motion.div>
    </section>
  );
}
