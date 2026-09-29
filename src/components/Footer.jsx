import React from 'react';
import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/suhaib-azim-16a87731a/', label: 'LinkedIn' },
    { icon: <FaGithub />, href: 'https://github.com/Soha1b-11x', label: 'GitHub' },
    { icon: <SiLeetcode />, href: 'https://leetcode.com/u/ScoOby_17/', label: 'LeetCode' },
    { icon: <SiCodeforces />, href: 'https://codeforces.com/profile/SpyreX11', label: 'Codeforces' },
  ];

  return (
    <footer className={`border-t py-8 px-4 transition-colors duration-300 ${
      darkMode
        ? 'bg-dark-card/90 backdrop-blur-md border-primary/20'
        : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`w-10 h-10 flex items-center justify-center border rounded-lg text-xl
                         hover:text-primary hover:border-primary/40
                         hover:scale-110 transition-all duration-300 ${
                  darkMode
                    ? 'bg-dark-lighter/50 border-primary/20 text-gray-400'
                    : 'bg-gray-50 border-gray-200 text-gray-500'
                }`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className={`text-sm flex items-center gap-2 justify-center flex-wrap ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <span>© {currentYear} Suhaib Azim. Built with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>using React.js & Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
