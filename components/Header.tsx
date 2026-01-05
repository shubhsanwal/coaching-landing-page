'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiPhoneCall, FiMail, FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Results', href: '#results' },
  { label: 'Blog & Updates', href: '#blog' },
  { label: 'Contact', href: '#contact' }
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  usePathname(); // trigger client nav, even though we are single-page

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <Link href="#top" aria-label="Catalyst Institute home" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-soft-lg">
            <span className="text-xl font-semibold">C</span>
          </div>
          <div className="leading-tight">
            <p className="font-heading text-base font-semibold text-dark md:text-lg">
              Catalyst Institute
            </p>
            <p className="text-[11px] font-medium text-primary md:text-xs">
              NEET | JEE | GBPUAT | ICAR | Vet. Sc. | 9-12
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          <ul className="flex items-center gap-6 text-sm font-medium text-dark">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="relative py-1 transition-colors hover:text-primary"
                >
                  <span>{item.label}</span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-secondary transition-transform duration-200 ease-out hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1 text-accent hover:text-accent/80"
            >
              <FiPhoneCall className="h-4 w-4" aria-hidden="true" />
              <span>+91-98765-43210</span>
            </a>
            <a
              href="mailto:info@catalystinstitute.in"
              className="hidden items-center gap-1 text-primary hover:text-primary/80 md:flex"
            >
              <FiMail className="h-4 w-4" aria-hidden="true" />
              <span>info@catalystinstitute.in</span>
            </a>
            <a
              href="#contact"
              className="rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-soft-lg transition-transform hover:scale-105 hover:bg-primary/90"
            >
              Enroll Now
            </a>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-primary/20 p-2 text-primary hover:bg-primary/5 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed inset-y-0 right-0 z-40 w-72 max-w-full bg-white shadow-xl lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-muted">
            <p className="font-heading text-sm font-semibold text-dark">Menu</p>
            <button
              type="button"
              className="rounded-full border border-primary/20 p-2 text-primary hover:bg-primary/5"
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
            >
              <FiX className="h-5 w-5" />
            </button>
          </div>
          <ul className="space-y-1 px-4 py-4 text-sm font-medium text-dark">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block rounded-md px-3 py-2 hover:bg-muted hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto border-t border-muted px-4 py-4 text-xs">
            <p className="mb-1 font-semibold text-dark">Need quick help?</p>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-accent hover:text-accent/80"
            >
              <FiPhoneCall className="h-4 w-4" aria-hidden="true" />
              <span>Call us now</span>
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
