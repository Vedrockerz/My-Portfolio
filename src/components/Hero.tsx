import React from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Code2,
  BookOpen,
} from "lucide-react";

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={`min-h-screen pt-28 flex items-center justify-center relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900"
          : "bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <div>
              <img
        src="/newpp2.jpg" 
        alt="Profile Illustration"
        className="w-32 h-32 mx-auto mb-6 rounded-full object-cover shadow-xl"
      />
            </div>
          </div>

          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ved Shivhare
            </span>
          </h1>

          <div
            className={`text-xl sm:text-2xl mb-8 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent font-semibold">
              Computer Science Student
            </span>
          </div>

          <p
            className={`text-lg sm:text-xl leading-relaxed mb-12 max-w-3xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Passionate about Data Structures (Java), Python scripting, and
            frontend development. I enjoy solving problems, building real-world
            projects, and contributing to collaborative environments.
          </p>

          {/* Social Links */}
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Vedrockerz"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              } shadow-lg hover:shadow-xl`}
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/ved-shivhare-63066b331"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              } shadow-lg hover:shadow-xl`}
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:vedtherockerz@gmail.com"
              title="Gmail"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              } shadow-lg hover:shadow-xl`}
            >
              <Mail size={24} />
            </a>

            <a
              href="https://leetcode.com/u/Ved-Shivhare/"
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              } shadow-lg hover:shadow-xl`}
            >
              <Code2 size={24} />
            </a>

            <a
              href="https://www.geeksforgeeks.org/user/vedtherex4p/"
              target="_blank"
              rel="noopener noreferrer"
              title="GFG"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              } shadow-lg hover:shadow-xl`}
            >
              <BookOpen size={24} />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>Let's Connect</span>
            <ChevronDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ChevronDown
            className={`w-6 h-6 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
