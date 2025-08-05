import React from "react";
import { Moon, Sun, Download, Menu, X } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        darkMode
          ? "bg-gray-900/90 backdrop-blur-md border-gray-700"
          : "bg-white/90 backdrop-blur-md border-gray-200"
      } border-b`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ved Shivhare
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["about", "projects", "education", "skills", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-colors hover:text-blue-600 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/ved_resume.pdf"
              download
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>

            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${
                darkMode
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              {["about", "projects", "education", "skills", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="capitalize font-medium text-left px-4 py-2 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
              <div className="flex items-center space-x-4 px-4">
                <a
                  href="\ved_resume.pdf"
                  download
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg"
                >
                  <Download size={16} />
                  <span>Resume</span>
                </a>

                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-lg transition-colors ${
                    darkMode
                      ? "bg-gray-800 text-yellow-400"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
