import React from 'react';
import { ExternalLink, Github, Terminal, Mail, Calculator, Palette } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: 'Health Management System',
      description: 'Command-line health tracker that logs and retrieves exercise and diet data using modular file-based design.',
      tech: ['Python', 'File Handling', 'CLI Tool'],
      icon: <Terminal size={24} />,
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Email Collector Script',
      description: 'Extracts valid email addresses from text input using regular expressions, with I/O-based data export.',
      tech: ['Python', 'Regex', 'File I/O'],
      icon: <Mail size={24} />,
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Calculator App',
      description: 'Built a fully functional calculator with interactive UI using JavaScript event handling.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      icon: <Calculator size={24} />,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Theme Toggle Webpage',
      description: 'Webpage with light/dark mode toggle via dynamic CSS switching and DOM manipulation.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      icon: <Palette size={24} />,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="projects" className={`py-20 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 to-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here are some of the projects I've worked on, showcasing my skills in various technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-750' 
                  : 'bg-white hover:shadow-2xl'
              } shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} overflow-hidden`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white mb-6`}>
                  {project.icon}
                </div>

                <h3 className={`text-2xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>

                <p className={`mb-6 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-sm rounded-full ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                  <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    darkMode 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}>
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;