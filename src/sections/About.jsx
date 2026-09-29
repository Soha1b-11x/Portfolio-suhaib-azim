import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiCode, HiLightningBolt, HiAcademicCap } from 'react-icons/hi';

const About = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: <HiCode className="text-4xl" />,
      title: 'Full-Stack Development',
      description: 'Strong understanding of REST APIs, JWT authentication, CRUD operations, responsive UI development, and database integration.',
    },
    {
      icon: <HiLightningBolt className="text-4xl" />,
      title: 'Problem Solving',
      description: 'Strong problem-solving skills with hands-on experience in Data Structures and Algorithms.',
    },
    {
      icon: <HiAcademicCap className="text-4xl" />,
      title: 'Deployment & Workflows',
      description: 'Experienced in developing user and admin workflows, implementing application features, and deploying full-stack applications using Render.',
    },
  ];

  return (
    <section id="about" className={`py-20 px-4 transition-colors duration-300 ${
      darkMode ? 'bg-dark-lighter/50' : 'bg-gray-50'
    }`} ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Main Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={`backdrop-blur-sm border rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 ${
              darkMode
                ? 'bg-dark-card/50 border-primary/20'
                : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
            }`}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                Professional Summary
              </h3>
              <p className={`leading-relaxed mb-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                BCA student and aspiring MERN Developer with hands-on experience building full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Strong understanding of REST APIs, JWT authentication, CRUD operations, responsive UI development, and database integration.
              </p>
              <p className={`leading-relaxed mb-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Experienced in developing user and admin workflows, implementing application features, and deploying full-stack applications using Render. Strong problem-solving skills with hands-on experience in Data Structures and Algorithms.
              </p>
              <div className={`border-l-4 border-primary rounded-r-lg p-4 mt-6 ${
                darkMode ? 'bg-primary/10' : 'bg-primary/5'
              }`}>
                <p className={`font-medium ${
                  darkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  🚀 Open to <span className="text-primary">Internship</span> and <span className="text-primary">Fresher Opportunities</span> as MERN Stack Developer / Software Developer Intern
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`backdrop-blur-sm border rounded-xl p-6
                         hover:shadow-lg transition-all duration-300 ${
                  darkMode
                    ? 'bg-dark-card/70 border-primary/20 hover:border-primary/40 hover:shadow-primary/20'
                    : 'bg-white border-gray-200 hover:border-primary/40 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="text-primary mb-3">{item.icon}</div>
                <h4 className={`text-xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>{item.title}</h4>
                <p className={`text-sm leading-relaxed ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
