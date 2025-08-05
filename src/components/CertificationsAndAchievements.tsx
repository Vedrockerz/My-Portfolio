import React from 'react';
import { Award, BadgeCheck, Star } from 'lucide-react';

interface CertificationsAndAchievementsProps {
  darkMode: boolean;
}

const CertificationsAndAchievements: React.FC<CertificationsAndAchievementsProps> = ({ darkMode }) => {
  const achievements = [
    {
      title: 'Mentor - GirlScript Summer of Code 2025',
      issuer: 'GirlScript Foundation',
      description:
        'Selected as a mentor for GSSoC 2025 to guide and support open-source contributors across various projects. Played a role in mentoring budding developers.',
      icon: <Star size={28} />,
      link: 'https://drive.google.com/file/d/1bH6OPtM2Hcn_QRfNiz8yA7ohU6K93Xeb/view?usp=drive_link'
    },
    {
      title: 'Web Development Intern - CodSoft',
      issuer: 'CodSoft (August 2025)',
      description:
        'Completed a 4-week virtual internship focused on frontend development. Gained hands-on experience by building UI components and practicing modern web techniques.',
      icon: <BadgeCheck size={28} />,
      link: 'https://drive.google.com/file/d/1tvkBCw-X793rfuIFPOVtGKeDtQeX79O8/view?usp=drive_link'
    },
    {
      title: 'Completed Generative AI Mastermind',
      issuer: 'Outskill by Vaibhav Sisinty',
      description:
        'Completed an advanced program on Generative AI that included hands-on workshops, real-world AI use cases, and prompt engineering techniques.',
      icon: <Award size={28} />,
      link: 'https://drive.google.com/file/d/1rSrZkTPQfCK4EkeSFiT__bwduMOrD8qk/view?usp=drive_link'
    }
  ];

  return (
    <section id="achievements" className={`py-20 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-950' 
        : 'bg-gradient-to-br from-gray-50 to-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Certifications &{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          {/* Updated underline gradient */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>

          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here's a look at some of my milestones and credentials I've earned recently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className={`group p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-750' 
                  : 'bg-white hover:shadow-2xl'
              } shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} block`}
            >
              {/* Updated icon gradient */}
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4">
                {item.icon}
              </div>

              <h3 className={`text-xl font-semibold mb-1 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {item.title}
              </h3>
              <p className={`text-sm mb-2 ${
                darkMode ? 'text-gray-400' : 'text-gray-700'
              }`}>
                {item.issuer}
              </p>
              <p className={`text-sm ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsAndAchievements;
