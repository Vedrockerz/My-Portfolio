import React from 'react';
import { Code2, Database, Globe, Brain } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const interests = [
    {
      icon: <Code2 size={32} />,
      title: 'Problem Solving',
      description: 'Passionate about Data Structures and Algorithms using Java'
    },
    {
      icon: <Database size={32} />,
      title: 'Python Scripting',
      description: 'Building efficient scripts and automation tools'
    },
    {
      icon: <Globe size={32} />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive web applications'
    },
    {
      icon: <Brain size={32} />,
      title: 'AI/ML Exploration',
      description: 'Currently expanding skills in artificial intelligence and machine learning'
    }
  ];

  return (
    <section id="about" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className={`text-lg leading-relaxed mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I'm a Computer Science student passionate about creating solutions through code. 
              My journey in technology is driven by curiosity and a desire to build meaningful projects 
              that make a difference.
            </p>
            <p className={`text-lg leading-relaxed mb-8 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Currently exploring open-source contributions and expanding my skills in AI/ML and backend systems. 
              I believe in the power of collaborative development and continuous learning.
            </p>

            <div className="space-y-4">
              <div className={`p-4 rounded-lg ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}>
                <h3 className={`font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>Current Focus</h3>
                <p className={`${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Building real-world projects while strengthening my foundation in computer science fundamentals.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="grid sm:grid-cols-2 gap-6">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-800 hover:bg-gray-750' 
                      : 'bg-gradient-to-br from-white to-gray-50 hover:shadow-xl'
                  } shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                >
                  <div className="text-blue-600 mb-4">
                    {interest.icon}
                  </div>
                  <h3 className={`font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {interest.title}
                  </h3>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;