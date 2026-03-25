import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './shared/SectionTitle';
import { projects } from '../data/portfolioData';
import { fadeUp, hoverLift, staggerContainer } from '../lib/motion';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured"
          accent="Projects"
          subtitle="Project cards are mapped from a centralized data file for easy resume updates."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                variants={fadeUp}
                whileHover={hoverLift}
                className="surface-card rounded-2xl p-7 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 via-transparent to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-xl bg-brand-red text-white mb-5">
                    <Icon size={20} />
                  </div>

                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">{project.title}</h3>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-5 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-sm rounded-full bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:text-brand-red hover:border-brand-red transition-colors"
                    >
                      <Github size={16} /> GitHub
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
                        rel={project.liveUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-red text-white hover:bg-brand-blood transition-colors"
                      >
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;