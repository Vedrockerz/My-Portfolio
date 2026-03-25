import React from 'react';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { navItems, profileData } from '../data/portfolioData';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('about');

  React.useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.15, 0.3, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 w-full z-50 border-b transition-all duration-300 glass-nav"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100"
          >
            {profileData.name}
          </button>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`capitalize font-medium transition-colors relative ${
                  activeSection === item.id
                    ? 'text-brand-red'
                    : 'text-zinc-700 hover:text-brand-red dark:text-zinc-300 dark:hover:text-brand-red'
                }`}
              >
                {item.label}
                {activeSection === item.id ? (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-brand-red"
                  />
                ) : null}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href={profileData.resumeUrl}
              download
              className="button-glow flex items-center space-x-2 bg-brand-red text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-brand-blood"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>

            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${
                darkMode
                  ? 'bg-zinc-800 text-amber-300 hover:bg-zinc-700'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-900 dark:text-zinc-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden py-4 border-t border-zinc-200 dark:border-zinc-800"
          >
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`capitalize font-medium text-left px-2 py-2 rounded ${
                    activeSection === item.id
                      ? 'text-brand-red bg-brand-red/10'
                      : 'text-zinc-700 dark:text-zinc-300 hover:text-brand-red'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-4 px-4">
                <a
                  href={profileData.resumeUrl}
                  download
                  className="flex items-center space-x-2 bg-brand-red text-white px-4 py-2 rounded-lg"
                >
                  <Download size={16} />
                  <span>Resume</span>
                </a>

                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-lg transition-colors ${
                    darkMode
                      ? 'bg-zinc-800 text-amber-300'
                      : 'bg-zinc-100 text-zinc-700'
                  }`}
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
