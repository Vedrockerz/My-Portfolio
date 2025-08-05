import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Ajay Kumar Garg Engineering College, Ghaziabad',
      period: '2023–2027',
      status: 'Currently in 2nd year',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      degree: 'Intermediate (ICSE)',
      institution: 'Alpine Public School, Jhansi',
      period: '2021–2022',
      status: 'Completed',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      degree: 'Matriculation (CBSE)',
      institution: 'Christ The King College, Jhansi',
      period: '2019–2020',
      status: 'Completed',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="education" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            My educational journey in computer science and technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
              darkMode ? 'bg-gray-700' : 'bg-gray-300'
            }`}></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${edu.gradient} border-4 ${
                    darkMode ? 'border-gray-900' : 'border-white'
                  } shadow-lg z-10`}></div>

                  {/* Content Card */}
                  <div className="ml-16 w-full">
                    <div className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                      darkMode 
                        ? 'bg-gray-800 hover:bg-gray-750' 
                        : 'bg-gradient-to-br from-white to-gray-50 hover:shadow-xl'
                    } shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${edu.gradient} text-white`}>
                          <GraduationCap size={24} />
                        </div>
                        <span className={`px-3 py-1 text-sm rounded-full ${
                          edu.status === 'Currently in 2nd year'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {edu.status}
                        </span>
                      </div>

                      <h3 className={`text-2xl font-bold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {edu.degree}
                      </h3>

                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                          <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {edu.institution}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Calendar size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                        <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;