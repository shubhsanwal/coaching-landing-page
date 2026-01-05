'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const STORAGE_KEY = 'catalyst_resource_popup_dismissed';

const ResourcePopup: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.localStorage.getItem(STORAGE_KEY) === 'true') return;

    const onScroll = () => {
      if (window.scrollY > 400) {
        setOpen(true);
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClose = () => {
    setOpen(false);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, 'true');
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-24 left-4 z-40 max-w-xs rounded-3xl bg-white p-4 text-sm text-dark shadow-soft-lg"
          role="dialog"
          aria-modal="true"
          aria-label="Free NEET and JEE PYQ download popup"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Free resource
          </p>
          <p className="mt-1 text-sm font-semibold text-dark">Download NEET &amp; JEE PYQ booklets (PDF).</p>
          <p className="mt-1 text-xs text-slate-600">
            Get chapter-wise previous year questions with solutions for smarter revision.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-primary/90"
            >
              <FaDownload className="h-3 w-3" />
              <span>Get PDF</span>
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="rounded-full px-2 py-1 text-[11px] text-slate-500 hover:text-dark"
            >
              Skip
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResourcePopup;
