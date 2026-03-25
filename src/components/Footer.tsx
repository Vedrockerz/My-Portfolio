import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 ${
      darkMode ? 'bg-zinc-950' : 'bg-zinc-900'
    } text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="text-3xl font-semibold mb-6 text-white hover:text-brand-red transition-colors duration-300"
          >
            {profileData.name}
          </button>

          <div className="flex space-x-6 mb-8">
            <a
              href={profileData.socialLinks[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-brand-red/70 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href={profileData.socialLinks[1].href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-brand-red/70 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={profileData.socialLinks[2].href}
              className="p-3 rounded-full bg-white/10 hover:bg-brand-red/70 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          <p className="text-center text-gray-300 mb-6 max-w-2xl italic">
            "Building practical software with intent, clarity, and curiosity."
          </p>

          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-brand-red" />
            <span>by {profileData.name} © {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;