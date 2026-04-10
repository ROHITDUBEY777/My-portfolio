import React from "react";
import Image from "../assets/full-stack.png";
import Contactform from "./contactform";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="Contact" className="relative py-24 px-6 md:px-20 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400 mb-6">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Reach out to me below and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">Send a Message</h3>
            <p className="text-gray-400 mb-8">Fill out the form to start a conversation.</p>
            <Contactform />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img src={Image} alt="Development Illustration" className="w-full max-w-md drop-shadow-[0_0_30px_rgba(6,182,212,0.3)] animate-[pulse_4s_ease-in-out_infinite]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;