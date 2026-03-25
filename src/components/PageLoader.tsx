import React from 'react';
import { motion } from 'framer-motion';

const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 grid place-items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.35 }}
        className="text-center"
      >
        <div className="w-14 h-14 mx-auto rounded-full border-4 border-zinc-700 border-t-brand-red animate-spin" />
        <p className="mt-4 text-zinc-200 tracking-wide">Loading portfolio...</p>
      </motion.div>
    </div>
  );
};

export default PageLoader;
