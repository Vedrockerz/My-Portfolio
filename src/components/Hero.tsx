import React, { useRef } from 'react';
import { Download, FolderOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/motion';
import { profileData } from '../data/portfolioData';
import TypingAnimation from './TypingAnimation';
import ModernBackground from './ModernBackground';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.parentElement?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) * 0.02;
    const rotateY = (centerX - x) * 0.02;

    imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    }
  };

  return (
    <section
      className={`min-h-screen pt-28 pb-16 flex items-center justify-center relative overflow-hidden ${
        darkMode ? 'bg-zinc-950' : 'bg-zinc-100'
      }`}
    >
      <ModernBackground isDark={darkMode} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent dark:from-black/50" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute right-[-120px] top-[16%] w-[340px] h-[340px] bg-brand-red/15 rounded-full blur-[72px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute left-[-80px] bottom-[10%] w-[260px] h-[260px] bg-brand-blood/20 rounded-full blur-[72px]"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative z-10"
      >
        <motion.div variants={fadeUp}>
          <p className="text-sm uppercase tracking-[0.24em] text-brand-red font-medium mb-4">
            Available for internships and projects
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-zinc-900 dark:text-zinc-50">
            <TypingAnimation
              text={profileData.name}
              speed={80}
              holdDelay={1900}
              loopDelay={600}
              className="inline-block hero-typing-glow whitespace-nowrap"
            />
          </h1>
          <h2 className="mt-4 text-xl sm:text-2xl text-brand-red font-medium">{profileData.role}</h2>

          <p className="mt-6 text-base sm:text-lg max-w-2xl leading-relaxed text-zinc-700 dark:text-zinc-300">
            {profileData.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={scrollToProjects}
              className="button-glow inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-red text-white hover:bg-brand-blood transition-colors"
            >
              <FolderOpen size={18} />
              View Projects
            </button>
            <a
              href={profileData.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-brand-red text-brand-red hover:bg-brand-red/10 transition-colors"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {profileData.socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 rounded-lg surface-card text-zinc-700 dark:text-zinc-200 hover:text-brand-red transition-colors"
                  aria-label={item.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="relative" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          {/* Animated glow background */}
          <motion.div 
            animate={{ 
              opacity: [0.4, 0.7, 0.4],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -inset-1 bg-gradient-to-tr from-brand-red via-brand-blood to-transparent rounded-3xl blur-xl"
          />
          
          {/* Floating container */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative surface-card p-4 sm:p-6 rounded-3xl"
          >
            {/* Image glow border */}
            <motion.div 
              className="absolute -inset-1 rounded-2xl opacity-60"
              style={{
                background: 'linear-gradient(45deg, #FF3B3B, #B01313)',
                filter: 'blur(12px)',
              }}
              animate={{ 
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            
            <img
              ref={imageRef}
              src={profileData.heroImage}
              alt="Ved Shivhare profile"
              className="w-full max-w-sm mx-auto rounded-2xl object-cover aspect-[4/5] relative transition-transform duration-300"
              loading="eager"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
