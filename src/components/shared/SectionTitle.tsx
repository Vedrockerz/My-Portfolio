import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/motion';

interface SectionTitleProps {
  title: string;
  accent: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, accent, subtitle }) => {
  return (
    <motion.div
      className="text-center mb-14"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title} <span className="text-brand-red">{accent}</span>
      </h2>
      {subtitle ? (
        <p className="max-w-2xl mx-auto mt-4 text-zinc-600 dark:text-zinc-300">{subtitle}</p>
      ) : null}
      <div className="w-24 h-[3px] bg-brand-red/80 mx-auto mt-6 rounded-full" />
    </motion.div>
  );
};

export default SectionTitle;
