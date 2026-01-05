'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScholarshipPopup: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const bubbles = Array.from({ length: 10 });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-24 right-4 z-40 w-72 max-w-full rounded-3xl bg-white p-4 text-sm text-dark shadow-soft-lg"
          role="dialog"
          aria-modal="true"
          aria-label="Scholarship popup"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Early bird scholarship
          </p>
          <p className="mt-1 text-lg font-semibold text-dark">Up to 15% fee benefit on 2025 batches.</p>
          <p className="mt-1 text-xs text-slate-600">
            Limited seats. Performance and need-based scholarships available. Visit centre or fill admission
            enquiry form.
          </p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-secondary px-3 py-2 text-xs font-semibold uppercase tracking-wide text-dark hover:bg-secondary/90"
          >
            View Scholarship Test Dates
          </button>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-1 w-full text-center text-[11px] text-slate-500 hover:text-dark"
          >
            Maybe later
          </button>
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {bubbles.map((_, idx) => (
              <motion.span
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                className="absolute h-2 w-2 rounded-full bg-secondary/50"
                initial={{
                  x: Math.random() * 260,
                  y: 80 + Math.random() * 40,
                  opacity: 0
                }}
                animate={{
                  y: [80 + Math.random() * 40, -10],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScholarshipPopup;
