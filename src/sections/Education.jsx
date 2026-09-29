import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi';

const Education = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const educationData = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Aggarwal College, Ballabgarh',
      affiliation: 'Affiliated with MDU',
      duration: '2024 – 2027',
      status: '3rd Year, Enrolled',
    },
    {
      degree: 'Class XII',
      institution: 'Senior Secondary Education',
      percentage: '78%',
    },
    {
      degree: 'Class X',
      institution: 'Secondary Education',
      percentage: '70%',
    },
  ];

  return (
    <section id="education" className={`py-20 px-4 transition-colors duration-300 ${
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
            My <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== educationData.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-primary/30 hidden md:block" />
              )}

              <div className="flex items-start gap-6">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center
                           justify-center border-2 border-primary text-primary relative z-10"
                >
                  <HiAcademicCap className="text-2xl" />
                </motion.div>

                {/* Content Card */}
                <div className={`flex-1 backdrop-blur-sm border rounded-xl
                              p-6 hover:border-primary/40 hover:shadow-lg
                              transition-all duration-300 group ${
                  darkMode
                    ? 'bg-dark-card/70 border-primary/20 hover:shadow-primary/10'
                    : 'bg-gray-50 border-gray-200 hover:shadow-md'
                }`}>
                  <h3 className={`text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-semibold mb-1">{edu.institution}</p>
                  {edu.affiliation && (
                    <p className={`text-sm mb-2 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>{edu.affiliation}</p>
                  )}
                  {edu.duration && (
                    <p className={`text-sm mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {edu.duration} • <span className="text-primary font-medium">{edu.status}</span>
                    </p>
                  )}

                  {/* Percentage for 10th and 12th */}
                  {edu.percentage && (
                    <div className="mt-3">
                      <span className={`inline-block border text-primary
                                     px-4 py-2 rounded-lg font-bold text-lg ${
                        darkMode
                          ? 'bg-primary/20 border-primary/40'
                          : 'bg-primary/10 border-primary/30'
                      }`}>
                        {edu.percentage}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
