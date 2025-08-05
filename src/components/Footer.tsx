import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 ${
      darkMode 
        ? 'bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900' 
        : 'bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900'
    } text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo/Name */}
          <button
            onClick={scrollToTop}
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            Ved Shivhare
          </button>

          {/* Social Links */}
          <div className="flex space-x-6 mb-8">
            <a
              href="https://github.com/Vedrockerz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ved-shivhare-63066b331"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:vedtherockerz@gmail.com"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Quote */}
          <p className="text-center text-gray-300 mb-6 max-w-2xl italic">
            "Building the future, one line of code at a time."
          </p>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>by Ved Shivhare © {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;