import React from 'react';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './shared/SectionTitle';
import { education, experiences } from '../data/portfolioData';
import { fadeUp, staggerContainer } from '../lib/motion';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-zinc-950' : 'bg-zinc-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Experience and" accent="Education" subtitle="A timeline of internships, leadership work, and academic progression." />

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="surface-card rounded-2xl p-6"
          >
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">Internships and Roles</h3>
            <div className="relative pl-6 space-y-6">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-brand-red/40" />
              {experiences.map((item) => (
                <motion.article key={item.role} variants={fadeUp} className="relative">
                  <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-brand-red" />
                  <p className="text-sm text-brand-red font-medium mb-1">{item.period}</p>
                  <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{item.role}</h4>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-2">{item.org}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="surface-card rounded-2xl p-6"
          >
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">Education</h3>
            <div className="space-y-5">
              {education.map((item) => (
                <motion.article key={item.degree} variants={fadeUp} className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="inline-flex p-2 rounded-lg bg-brand-red/15 text-brand-red">
                      <GraduationCap size={18} />
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-brand-red/10 text-brand-red">{item.note}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{item.degree}</h4>
                  <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 flex items-center gap-2">
                    <MapPin size={14} />
                    <span>{item.school}</span>
                  </div>
                  <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
};

export default Education;