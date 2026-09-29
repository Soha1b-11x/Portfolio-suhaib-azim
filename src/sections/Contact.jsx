import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiMail, HiPhone } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

const RESUME_URL = 'https://drive.google.com/file/d/1vpMqViA9LgAaWg2zYhIUYc_2XjGBJXQy/view?usp=sharing';

const Contact = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: <HiMail className="text-3xl" />,
      title: 'Email',
      value: 'suhaibazim96@gmail.com',
      href: 'mailto:suhaibazim96@gmail.com',
    },
    {
      icon: <HiPhone className="text-3xl" />,
      title: 'Phone',
      value: '+91-8851928370',
      href: 'tel:+918851928370',
    },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/Soha1b-11x', label: 'GitHub', color: darkMode ? 'hover:text-white' : 'hover:text-gray-900' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/suhaib-azim-16a87731a/', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: <SiLeetcode />, href: 'https://leetcode.com/u/ScoOby_17/', label: 'LeetCode', color: 'hover:text-yellow-500' },
    { icon: <SiCodeforces />, href: 'https://codeforces.com/profile/SpyreX11', label: 'Codeforces', color: 'hover:text-blue-400' },
    { icon: <FaFileAlt />, href: RESUME_URL, label: 'Resume', color: 'hover:text-primary' },
  ];

  return (
    <section id="contact" className={`py-20 px-4 transition-colors duration-300 ${
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
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className={`mt-4 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Intro Text */}
            <div className="text-center">
              <p className={`leading-relaxed max-w-xl mx-auto ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                I'm currently looking for internship and fresher opportunities as a MERN Stack Developer.
                If you have any questions or just want to say hi, don't hesitate to reach out!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className={`flex items-center gap-4 p-5 backdrop-blur-sm border
                           rounded-xl hover:border-primary/40 hover:shadow-lg
                           transition-all duration-300 group ${
                    darkMode
                      ? 'bg-dark-card/70 border-primary/20 hover:shadow-primary/10'
                      : 'bg-gray-50 border-gray-200 hover:shadow-md'
                  }`}
                >
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>{item.title}</p>
                    <p className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <p className={`mb-4 font-semibold ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>Connect with me:</p>
              <div className="flex justify-center gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className={`w-12 h-12 flex items-center justify-center border
                              rounded-lg text-2xl transition-all duration-300
                              hover:border-primary/40 hover:shadow-lg ${social.color} ${
                      darkMode
                        ? 'bg-dark-card/70 border-primary/20 text-gray-400 hover:shadow-primary/20'
                        : 'bg-gray-50 border-gray-200 text-gray-500 hover:shadow-md'
                    }`}
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
