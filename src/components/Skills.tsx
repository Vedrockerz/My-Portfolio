import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './shared/SectionTitle';
import { fadeUp, hoverLift, staggerContainer } from '../lib/motion';
import { skillGroups } from '../data/portfolioData';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-zinc-950' : 'bg-zinc-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Core" accent="Skills" subtitle="Balanced strengths across AI/ML, backend, and modern development tools." />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                variants={fadeUp}
                whileHover={hoverLift}
                className="surface-card rounded-2xl p-6"
              >
                <div className="inline-flex p-3 rounded-xl bg-brand-red/15 text-brand-red mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-5">{group.title}</h3>

                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <span className="text-zinc-700 dark:text-zinc-300">{skill.name}</span>
                        <span className="text-brand-red font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.65, ease: 'easeOut' }}
                          className="h-full rounded-full bg-brand-red"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;