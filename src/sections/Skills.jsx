import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaCode
} from 'react-icons/fa';
import {
  SiExpress, SiMongodb, SiMysql, SiPostman, SiCplusplus, SiRender, SiReactrouter
} from 'react-icons/si';

const Skills = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-500' },
        { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-500' },
        { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
        { name: 'React.js', icon: <FaReact />, color: 'text-cyan-400' },
        { name: 'React Router', icon: <SiReactrouter />, color: 'text-red-500' },
        { name: 'Context API', icon: <FaReact />, color: 'text-cyan-300' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
        { name: 'Express.js', icon: <SiExpress />, color: darkMode ? 'text-gray-300' : 'text-gray-700' },
        { name: 'REST APIs', icon: <FaNodeJs />, color: 'text-green-400' },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
        { name: 'Mongoose', icon: <SiMongodb />, color: 'text-green-600' },
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-400' },
      ],
    },
    {
      title: 'Programming',
      skills: [
        { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
        { name: 'C++', icon: <SiCplusplus />, color: 'text-blue-500' },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-600' },
        { name: 'GitHub', icon: <FaGithub />, color: darkMode ? 'text-white' : 'text-gray-800' },
        { name: 'VS Code', icon: <FaCode />, color: 'text-blue-500' },
        { name: 'Postman', icon: <SiPostman />, color: 'text-orange-500' },
        { name: 'Render', icon: <SiRender />, color: 'text-primary' },
      ],
    },
  ];

  return (
    <section id="skills" className={`py-20 px-4 transition-colors duration-300 ${
      darkMode ? 'bg-dark' : 'bg-white'
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
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className={`mt-4 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className={`backdrop-blur-sm border rounded-2xl p-6
                       hover:border-primary/40 hover:shadow-lg transition-all duration-300 ${
                darkMode
                  ? 'bg-dark-card/70 border-primary/20 hover:shadow-primary/10'
                  : 'bg-gray-50 border-gray-200 hover:shadow-md'
              }`}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05
                    }}
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border
                             transition-all duration-300 ${
                      darkMode
                        ? 'bg-dark-lighter/50 border-primary/10 hover:border-primary/30'
                        : 'bg-white border-gray-200 hover:border-primary/30 shadow-sm'
                    }`}
                  >
                    <span className={`text-lg ${skill.color}`}>
                      {skill.icon}
                    </span>
                    <span className={`text-sm font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
