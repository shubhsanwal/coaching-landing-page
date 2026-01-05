'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AiDoubtTeaser: React.FC = () => {
  return (
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5, ease: 'easeOut' }}
      className="fixed bottom-6 left-4 z-40 hidden max-w-xs rounded-3xl bg-white p-3 text-xs text-dark shadow-soft-lg md:flex"
      aria-label="AI doubt solving teaser"
    >
      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
        <span className="text-base">AI</span>
      </div>
      <div className="flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
          Coming soon
        </p>
        <p className="mt-1 text-xs text-dark">
          Ask an AI mentor your doubts 24x7. Integrated with mentor review for important questions.
        </p>
        <div className="mt-1 flex gap-1">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary delay-150" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary delay-300" />
        </div>
      </div>
    </motion.div>
  );
};

export default AiDoubtTeaser;
