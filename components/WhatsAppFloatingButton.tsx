'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsAppFloatingButton: React.FC = () => {
  const phoneNumber = '919876543210';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    'Hi Catalyst Institute, I want to know more about NEET/JEE/GBPUAT/ICAR/School programs.'
  )}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp with Catalyst Institute"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-5 right-4 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-soft-lg hover:bg-[#1ebe5c]"
    >
      <motion.span
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            '0 0 0 0 rgba(37, 211, 102, 0.6)',
            '0 0 0 10px rgba(37, 211, 102, 0)',
            '0 0 0 0 rgba(37, 211, 102, 0)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#25D366]"
      >
        <FaWhatsapp className="h-5 w-5" />
      </motion.span>
      <span className="hidden text-xs md:inline">WhatsApp our counsellor</span>
    </motion.a>
  );
};

export default WhatsAppFloatingButton;
