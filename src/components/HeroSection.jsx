import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[#0a192f] flex items-center justify-center py-20 px-6 sm:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Column */}
        <motion.div 
          className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi all, I'm Aakash <span className="inline-block">👋</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
            A passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-bold">Full Stack Developer</span> 🚀 with experience building Web applications using JavaScript / React / Node.js / MongoDB and the MERN stack. Currently pursuing B.Tech in Computer Science at NIT Silchar with a knack for competitive programming and solving complex algorithmic problems.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mb-10 justify-center lg:justify-start">
            <a href="#" aria-label="GitHub" className="p-4 bg-gray-800 text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              <FaGithub size={24} />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-4 bg-gray-800 text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(10,102,194,0.6)]">
              <FaLinkedin size={24} />
            </a>
            <a href="#" aria-label="Email" className="p-4 bg-gray-800 text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(234,67,53,0.6)]">
              <FaEnvelope size={24} />
            </a>
            <a href="#" aria-label="Phone" className="p-4 bg-gray-800 text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(52,168,83,0.6)]">
              <FaPhone size={24} />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
            <button className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-blue-500 to-teal-400 transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50">
              CONTACT ME
            </button>
            <button className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-orange-400 to-pink-500 transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/50">
              SEE MY RESUME
            </button>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          className="flex-1 w-full flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Using a nice placeholder image for developer illustration */}
          <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl aspect-square flex items-center justify-center">
            <img 
              src="https://illustrations.popsy.co/amber/freelancer.svg" 
              alt="Developer Desk Illustration" 
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
