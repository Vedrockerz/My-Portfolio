import React from 'react';
import { motion } from 'framer-motion';

interface ModernBackgroundProps {
  isDark?: boolean;
}

const ModernBackground: React.FC<ModernBackgroundProps> = ({ isDark = true }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient mesh */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40 dark:opacity-30"
        viewBox="0 0 1200 600"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="60" />
          </filter>
          <linearGradient id="mesh-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF3B3B" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#B01313" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FF3B3B" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        <circle cx="200" cy="100" r="180" fill="url(#mesh-gradient)" filter="url(#noise)" />
        <circle cx="1000" cy="500" r="220" fill="url(#mesh-gradient)" filter="url(#noise)" />
        <circle cx="600" cy="300" r="150" fill="url(#mesh-gradient)" filter="url(#noise)" />
      </svg>

      {/* Red ambient glow - top right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-brand-red/20 blur-3xl"
      />

      {/* Dark red glow - bottom left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        className="absolute -left-40 -bottom-40 w-80 h-80 rounded-full bg-brand-blood/15 blur-3xl"
      />

      {/* Subtle central glow */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-red/10 blur-3xl"
      />

      {/* Grid overlay - very subtle */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255, 59, 59, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 59, 59, 0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};

export default ModernBackground;
