'use client';

import React, { useState } from 'react';
import AnimatedSection, { childVariants } from '@/components/animations/Section';
import { motion } from 'framer-motion';
import { BsCheckCircleFill } from 'react-icons/bs';
import WaveDivider from '@/components/WaveDivider';

const timeline = [
  {
    year: '2015',
    title: 'Founded in Haldwani',
    description:
      'Catalyst Institute started with a small batch of 25 dreamers aiming for medical and engineering entrances.'
  },
  {
    year: '2018',
    title: 'First Wave of Top Ranks',
    description:
      'Multiple NEET & JEE toppers from Haldwani with 90%+ board results in integrated batches.'
  },
  {
    year: '2021',
    title: 'Hybrid Learning Introduced',
    description:
      'Launched online + classroom hybrid model, AI-enabled test analysis and structured doubt-clearing.'
  },
  {
    year: '2024',
    title: 'Result Engine 2.0',
    description:
      '87%+ selection rate across NEET, JEE, GBPUAT, ICAR & school boards with personalised mentoring.'
  }
];

const features = [
  'Dedicated batches for NEET, JEE, GBPUAT, ICAR, Vet. Sc. and Boards (9-12).',
  'Full-length CBT mock tests, micro-analytics and topic-wise re-planning.',
  'High-frequency doubt counters + mentor hours every week.',
  'Concept visualisation, playful class energy inspired by modern studios.',
  'Parent connect reports & PTMs with actionable scorecards.'
];

const About: React.FC = () => {
  const [activeYear, setActiveYear] = useState<string>('2024');

  const activeEntry = timeline.find((entry) => entry.year === activeYear) ?? timeline[0];

  return (
    <section id="about" aria-labelledby="about-heading" className="bg-muted">
      <WaveDivider flip from="#007BFF" to="#28A745" />
      <AnimatedSection className="bg-muted">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row md:items-start md:px-8">
          <motion.div
            variants={childVariants}
            className="w-full md:w-1/2"
          >
            <h2
              id="about-heading"
              className="font-heading text-2xl font-semibold text-dark md:text-3xl lg:text-4xl"
            >
              Building disciplined, joyful achievers in Haldwani.
            </h2>
            <p className="mt-4 text-sm text-slate-700 md:text-base">
              Catalyst Institute is a focused coaching hub in Haldwani for NEET, JEE, GBPUAT, ICAR, Veterinary
              Sciences and school academics (Classes 9-12). We blend exam rigour with an engaging, minion-inspired
              learning vibe so that students stay consistent without burning out.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <BsCheckCircleFill className="mt-[3px] h-4 w-4 text-accent" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="w-full md:w-1/2"
          >
            <div className="rounded-3xl bg-white p-5 shadow-soft-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Our journey
              </p>
              <p className="mt-2 text-sm font-medium text-dark">
                Tap on a year to see how we evolved.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {timeline.map((entry) => (
                  <button
                    key={entry.year}
                    type="button"
                    onClick={() => setActiveYear(entry.year)}
                    className={`rounded-full border px-4 py-1 text-xs font-semibold transition-colors ${
                      activeYear === entry.year
                        ? 'border-secondary bg-secondary text-dark'
                        : 'border-primary/20 bg-primary/5 text-primary hover:border-primary/40'
                    }`}
                    aria-pressed={activeYear === entry.year}
                  >
                    {entry.year}
                  </button>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-muted p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
                  {activeEntry.year}
                </p>
                <p className="mt-1 text-sm font-semibold text-dark">{activeEntry.title}</p>
                <p className="mt-2 text-sm text-slate-700">{activeEntry.description}</p>
              </div>

              <div className="mt-4 grid gap-3 text-xs md:grid-cols-3">
                <div className="rounded-2xl bg-primary/5 p-3">
                  <p className="text-2xl font-semibold text-primary">523+</p>
                  <p className="mt-1 text-[11px] text-slate-700">NEET & JEE selections* from Haldwani region.</p>
                </div>
                <div className="rounded-2xl bg-accent/5 p-3">
                  <p className="text-2xl font-semibold text-accent">87%+</p>
                  <p className="mt-1 text-[11px] text-slate-700">Average selection rate across flagship batches.</p>
                </div>
                <div className="rounded-2xl bg-secondary/5 p-3">
                  <p className="text-2xl font-semibold text-secondary">1:40</p>
                  <p className="mt-1 text-[11px] text-slate-700">Mentor:student focus for deep personalised tracking.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default About;
