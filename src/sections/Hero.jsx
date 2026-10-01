import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { HiMail, HiArrowDown } from 'react-icons/hi';

const RESUME_URL = 'https://drive.google.com/file/d/1F8E04LNBUgHXj3fUvosMNrt6Fa5AVmCF/view?usp=sharing';

const Hero = ({ darkMode }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['MERN Stack Developer', 'BCA Student', 'Full-Stack Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary text-lg md:text-xl mb-4">Hi, I'm</p>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-4 ${
              darkMode ? 'text-white glow-text' : 'text-gray-900'
            }`}
          >
            Suhaib Azim
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-12 md:h-16 mb-6"
          >
            <motion.h2
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`text-2xl md:text-4xl font-semibold ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {roles[currentRole]}
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            BCA student and aspiring MERN Developer with hands-on experience building full-stack
            web applications using React.js, Node.js, Express.js, and MongoDB.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-8 py-3 bg-primary font-semibold rounded-lg
                       hover:bg-primary/90 transition-all duration-300 glow flex items-center gap-2
                       w-full sm:w-auto justify-center ${
                         darkMode ? 'text-dark' : 'text-white'
                       }`}
            >
              <HiArrowDown className="group-hover:animate-bounce" />
              View Projects
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg
                       hover:bg-primary transition-all duration-300
                       w-full sm:w-auto justify-center flex items-center gap-2 ${
                         darkMode ? 'hover:text-dark' : 'hover:text-white'
                       }`}
            >
              <FaDownload />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-8 py-3 border-2 font-semibold rounded-lg
                       transition-all duration-300
                       w-full sm:w-auto justify-center flex items-center gap-2 ${
                         darkMode
                           ? 'border-gray-600 text-gray-300 hover:border-primary hover:text-primary'
                           : 'border-gray-300 text-gray-600 hover:border-primary hover:text-primary'
                       }`}
            >
              <HiMail />
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
