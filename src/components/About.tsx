import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './shared/SectionTitle';
import { aboutHighlights, profileData } from '../data/portfolioData';
import { fadeUp, hoverLift, staggerContainer } from '../lib/motion';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About" accent="Me" subtitle="A concise snapshot of what I build and where I am headed." />

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-stretch">
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="surface-card rounded-2xl p-7 sm:p-8"
          >
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Who I am</h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{profileData.summary}</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-brand-red/20 bg-brand-red/5 p-4">
                <p className="text-sm uppercase tracking-wider text-brand-red mb-1">Primary Focus</p>
                <p className="text-zinc-800 dark:text-zinc-200">AI/ML applications and backend-first products</p>
              </div>
              <div className="rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white/60 dark:bg-zinc-900/40 p-4">
                <p className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">Interests</p>
                <p className="text-zinc-800 dark:text-zinc-200">Open source, developer tooling, and scalable systems</p>
              </div>
            </div>
          </motion.article>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {aboutHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  whileHover={hoverLift}
                  className="surface-card rounded-2xl p-5"
                >
                  <Icon size={24} className="text-brand-red mb-3" />
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">{item.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;