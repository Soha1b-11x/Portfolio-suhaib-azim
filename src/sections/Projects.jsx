import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';

const Projects = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Food Ordering Web Application',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs', 'JWT', 'Render'],
      features: [
        'Full-stack food ordering platform using the MERN stack with separate user and administrative workflows',
        'JWT-based authentication for secure user registration and login',
        'Cart and checkout functionality to add, remove, and manage food items before placing orders',
        'Order management so users can view orders and track order status',
        'Administrative dashboard for managing customer orders and updating order status',
        'CRUD operations for food items (add, update, delete products)',
        'Category-based filtering to browse food items efficiently',
        'React.js frontend integrated with Node.js and Express.js backend through REST APIs',
        'MongoDB and Mongoose used to store user, food, and order data',
        'Deployed on Render',
      ],
      github: 'https://github.com/Soha1b-11x/Food-app',
    },
    {
      title: 'Blog Web Application',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs'],
      features: [
        'Full-stack blog application using the MERN stack with user and administrative workflows',
        'Blog CRUD: create, view, update, and delete posts',
        'User profile: create, view, update, and manage profile information',
        'Blog image and profile image upload',
        'Comments: create and delete comments on posts',
        'Blog search to find relevant posts quickly',
        'Category-based sorting and filtering',
        'Latest-blog ordering so recent posts appear first',
        'Admin panel to manage blog content and delete user-created posts',
        'Clean, responsive UI focused on simple navigation and readable content',
      ],
      github: 'https://github.com/Soha1b-11x/BlogApp',
    },
  ];

  return (
    <section id="projects" className={`py-20 px-4 transition-colors duration-300 ${
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
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className={`mt-4 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Full-stack applications I've built
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-10 max-w-5xl mx-auto">
          {projects.map((project, projectIndex) => (
            <motion.div
              key={projectIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + projectIndex * 0.2 }}
            >
              <div className={`backdrop-blur-sm border rounded-2xl overflow-hidden
                            hover:border-primary/40 hover:shadow-2xl transition-all duration-500 group ${
                darkMode
                  ? 'bg-dark-card/70 border-primary/20 hover:shadow-primary/20'
                  : 'bg-white border-gray-200 hover:shadow-lg'
              }`}>
                <div className="p-8 md:p-10">
                  {/* Project Header */}
                  <div className="mb-6">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h3>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-primary font-semibold mb-3 flex items-center gap-2">
                      <span className="text-lg">💻</span> Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                          className={`px-3 py-1.5 border text-primary rounded-lg
                                   text-sm font-medium transition-all duration-300 ${
                            darkMode
                              ? 'bg-primary/10 border-primary/30 hover:bg-primary/20'
                              : 'bg-primary/5 border-primary/20 hover:bg-primary/10'
                          }`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-primary font-semibold mb-4 flex items-center gap-2">
                      <span className="text-lg">✨</span> Key Features
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: 0.4 + index * 0.03 }}
                          className={`flex items-start gap-3 transition-colors duration-300 ${
                            darkMode
                              ? 'text-gray-300 hover:text-white'
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          <HiCheckCircle className="text-primary text-xl flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-primary
                               font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 glow ${
                        darkMode ? 'text-dark' : 'text-white'
                      }`}
                    >
                      <FaGithub className="text-xl" />
                      View on GitHub
                    </a>
                  </motion.div>
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
