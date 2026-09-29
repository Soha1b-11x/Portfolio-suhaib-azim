import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';
import { HiCheckCircle } from 'react-icons/hi';

const Achievements = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const achievements = [
    'Solved 300+ Data Structures and Algorithms problems on LeetCode',
    'Solved 100+ Data Structures and Algorithms problems on GeeksforGeeks',
  ];

  const codingProfiles = [
    {
      name: 'LeetCode',
      icon: <SiLeetcode className="text-2xl" />,
      href: 'https://leetcode.com/u/ScoOby_17/',
      color: 'hover:text-yellow-500',
    },
    {
      name: 'Codeforces',
      icon: <SiCodeforces className="text-2xl" />,
      href: 'https://codeforces.com/profile/SpyreX11',
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <section id="achievements" className={`py-20 px-4 transition-colors duration-300 ${
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
            Achievements & <span className="text-primary">Coding Profiles</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`backdrop-blur-sm border rounded-2xl p-8
                     hover:border-primary/40 hover:shadow-lg transition-all duration-300 ${
              darkMode
                ? 'bg-dark-card/70 border-primary/20 hover:shadow-primary/10'
                : 'bg-white border-gray-200 hover:shadow-md'
            }`}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className={`flex items-start gap-3 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  <HiCheckCircle className="text-primary text-xl flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coding Profiles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`backdrop-blur-sm border rounded-2xl p-8
                     hover:border-primary/40 hover:shadow-lg transition-all duration-300 ${
              darkMode
                ? 'bg-dark-card/70 border-primary/20 hover:shadow-primary/10'
                : 'bg-white border-gray-200 hover:shadow-md'
            }`}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Coding Profiles</h3>
            <div className="space-y-4">
              {codingProfiles.map((profile, index) => (
                <motion.a
                  key={index}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-4 p-4 border
                           rounded-xl hover:border-primary/40 hover:shadow-lg
                           transition-all duration-300 group ${
                    darkMode
                      ? 'bg-dark-lighter/50 border-primary/10 hover:shadow-primary/10'
                      : 'bg-gray-50 border-gray-200 hover:shadow-md'
                  }`}
                >
                  <div className={`transition-colors duration-300 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  } ${profile.color}`}>
                    {profile.icon}
                  </div>
                  <div>
                    <p className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>{profile.name}</p>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>View profile →</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
