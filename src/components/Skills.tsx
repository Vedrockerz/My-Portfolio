import React from 'react';
import { Code, Cpu, Wrench, GitBranch } from 'lucide-react';
import { Brain } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={32} />,
      skills: ['HTML', 'CSS', 'JavaScript' , 'React' , 'TypeScript'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Programming Languages',
      icon: <Cpu size={32} />,
      skills: ['Java', 'Python', 'C'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Core Concepts',
      icon: <Wrench size={32} />,
      skills: ['DSA', 'Problem Solving'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Generative AI (Beginner)',
      icon: <Brain size={32} />,
      skills: ['Prompt Engineering', 'ChatGPT Basics', 'AI Content Tools'],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Tools & Platforms',
      icon: <GitBranch size={32} />,
      skills: ['Git', 'GitHub'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className={`py-20 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 to-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-750' 
                  : 'bg-white hover:shadow-2xl'
              } shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} text-center`}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>

              <h3 className={`text-xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-300 group-hover:bg-gray-600' 
                        : 'bg-gray-100 text-gray-700 group-hover:bg-gray-200'
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <div className={`inline-block p-8 rounded-2xl ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Currently Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['AI/ML', 'Backend Systems', 'Open Source'].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;