import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionTitle from './shared/SectionTitle';
import { certifications } from '../data/portfolioData';
import { fadeUp, hoverLift, staggerContainer } from '../lib/motion';

interface CertificationsAndAchievementsProps {
  darkMode: boolean;
}

const CertificationsAndAchievements: React.FC<CertificationsAndAchievementsProps> = ({ darkMode }) => {
  return (
    <section id="certifications" className={`py-20 ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Certifications and"
          accent="Achievements"
          subtitle="Milestones that reflect practical impact, mentorship, and focused learning."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className={`grid gap-6 ${
            certifications.length === 2
              ? 'md:grid-cols-2 max-w-4xl mx-auto'
              : 'md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {certifications.map((item) => (
            <motion.a
              key={item.title}
              variants={fadeUp}
              whileHover={hoverLift}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card rounded-2xl p-6 block"
            >
              <div className="inline-flex p-2.5 rounded-lg bg-brand-red/15 text-brand-red mb-4">
                <ArrowUpRight size={18} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
              <p className="mt-1 text-sm text-brand-red">{item.issuer}</p>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{item.description}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsAndAchievements;
