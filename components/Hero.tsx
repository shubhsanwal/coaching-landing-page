'use client';

import React, { useMemo, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import AnimatedSection, { childVariants } from '@/components/animations/Section';

const goals = [
  {
    id: 'doctor',
    label: 'Become a Doctor (NEET-UG)',
    headline: 'Target AIIMS, top Govt. medical colleges with 360° NEET prep.',
    stats: [
      { label: 'NEET Selection Rate', value: '87%+' },
      { label: 'AIIMS & Govt. Seats', value: '220+' },
      { label: 'DPPs Solved Yearly', value: '45k+' }
    ]
  },
  {
    id: 'engineer',
    label: 'Become an Engineer (JEE)',
    headline: 'Crack IITs & NITs with concept-first, problem-centric learning.',
    stats: [
      { label: 'JEE (Main+Adv.) Selections', value: '300+' },
      { label: 'Advanced Focus Batches', value: '4+' },
      { label: 'Mock Tests / Year', value: '60+' }
    ]
  },
  {
    id: 'agri',
    label: 'GBPUAT / ICAR / Vet. Sciences',
    headline: 'Specialized mentoring for GBPUAT, ICAR & Veterinary entrances.',
    stats: [
      { label: 'Agri & Vet. Selections', value: '150+' },
      { label: 'Dedicated Mentor Hours', value: '1:1' },
      { label: 'Practise Sheets', value: '1k+' }
    ]
  },
  {
    id: 'school',
    label: 'School Toppers (Classes 9-12)',
    headline: 'Score 95%+ with concept clarity & smart revision plans.',
    stats: [
      { label: 'Students 90%+ in Boards', value: '400+' },
      { label: 'Olympiad & NTSE Mentoring', value: 'Included' },
      { label: 'Doubt Hours / Week', value: '6+' }
    ]
  }
];

const Hero: React.FC = () => {
  const [selectedGoalId, setSelectedGoalId] = useState<string>('doctor');
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const selectedGoal = useMemo(
    () => goals.find((g) => g.id === selectedGoalId) ?? goals[0],
    [selectedGoalId]
  );

  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <AnimatedSection
      id="top"
      aria-label="Catalyst Institute hero section"
      className="relative flex min-h-[80vh] items-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent text-white md:min-h-[90vh]"
    >
      <motion.div
        style={{ y: parallaxY }}
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: false,
            background: { color: 'transparent' },
            fpsLimit: 60,
            particles: {
              number: { value: 45, density: { enable: true, area: 800 } },
              color: { value: ['#ffffff', '#FFC107'] },
              links: { enable: false },
              move: {
                enable: true,
                speed: 0.8,
                direction: 'none',
                outModes: { default: 'bounce' }
              },
              opacity: { value: 0.25 },
              size: { value: { min: 1, max: 3 } },
              shape: { type: 'circle' }
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: 'repulse' },
                resize: true
              },
              modes: {
                repulse: { distance: 80, duration: 0.4 }
              }
            }
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pt-14 md:flex-row md:items-center md:gap-12 md:px-8">
        <div className="w-full md:w-3/5">
          <motion.h1
            variants={childVariants}
            className="font-heading text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl"
          >
            Unlock your AIR with
            <span className="ml-2 inline-block rounded-full bg-white/10 px-3 py-1 text-secondary">
              Catalyst Institute, Haldwani
            </span>
          </motion.h1>

          <motion.p
            variants={childVariants}
            className="mt-4 max-w-xl text-sm text-white/90 md:text-base"
          >
            Result-driven NEET, JEE, GBPUAT, ICAR, Veterinary Sciences and school academics coaching
            with personalised doubt-solving, AI-enabled insights, and mock-test analytics.
          </motion.p>

          <motion.div
            variants={childVariants}
            className="mt-5 flex flex-col gap-3 text-sm md:flex-row md:items-center"
          >
            <label htmlFor="goal" className="text-xs uppercase tracking-wide text-white/80">
              Select your goal
            </label>
            <select
              id="goal"
              className="w-full max-w-xs rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white shadow-soft-lg backdrop-blur focus:border-secondary focus:outline-none"
              value={selectedGoalId}
              onChange={(e) => setSelectedGoalId(e.target.value)}
            >
              {goals.map((goal) => (
                <option key={goal.id} value={goal.id} className="text-dark">
                  {goal.label}
                </option>
              ))}
            </select>
          </motion.div>

          <motion.p
            variants={childVariants}
            className="mt-4 text-sm font-medium text-secondary md:text-base"
          >
            {selectedGoal.headline}
          </motion.p>

          <motion.div
            variants={childVariants}
            className="mt-6 grid w-full gap-4 text-xs md:grid-cols-3 md:text-sm"
          >
            {selectedGoal.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white/10 p-4 shadow-soft-lg backdrop-blur-md"
              >
                <p className="text-lg font-semibold text-secondary md:text-xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] text-white/90 md:text-xs">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={childVariants}
            className="mt-8 flex flex-wrap items-center gap-4 text-sm"
          >
            <a
              href="#contact"
              className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white shadow-soft-lg transition-transform hover:scale-105 hover:bg-accent/90"
            >
              Book a Free Demo
            </a>
            <a
              href="#courses"
              className="rounded-full bg-secondary px-7 py-3 text-sm font-semibold text-dark shadow-soft-lg transition-transform hover:scale-105 hover:bg-secondary/90"
            >
              Explore Programs
            </a>
            <span className="text-[11px] text-white/80 md:text-xs">
              Limited seats per batch • Personal mentoring • Hybrid learning
            </span>
          </motion.div>
        </div>

        <motion.div
          variants={childVariants}
          className="relative mt-6 w-full md:mt-0 md:w-2/5"
          aria-hidden="true"
        >
          <div className="relative mx-auto h-64 w-64 max-w-full rounded-[2.5rem] bg-white/5 p-4 shadow-soft-lg backdrop-blur-lg md:h-72 md:w-72">
            <div className="h-full w-full rounded-[2rem] bg-gradient-to-br from-secondary/80 via-primary/80 to-accent/80 p-[2px]">
              <div className="flex h-full w-full flex-col justify-between rounded-[1.8rem] bg-slate-950/90 p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary/90">
                    Live scoreboard
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    Real-time analysis of your tests and concept strength.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-[10px]">
                  <div className="rounded-xl bg-slate-900/70 p-2">
                    <p className="text-[9px] text-slate-400">Accuracy</p>
                    <p className="text-sm font-semibold text-secondary">94%</p>
                  </div>
                  <div className="rounded-xl bg-slate-900/70 p-2">
                    <p className="text-[9px] text-slate-400">Speed</p>
                    <p className="text-sm font-semibold text-primary">1.2x</p>
                  </div>
                  <div className="rounded-xl bg-slate-900/70 p-2">
                    <p className="text-[9px] text-slate-400">Doubts</p>
                    <p className="text-sm font-semibold text-secondary">Solved</p>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-slate-900/80 p-2 text-[10px]">
                  <div>
                    <p className="text-[9px] text-slate-400">AI Doubt Assistant</p>
                    <p className="text-xs font-semibold text-white">Ask a concept in 10s</p>
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-[9px] font-semibold text-dark">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -right-2 -top-3 flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-[11px] text-dark shadow-soft-lg md:-right-6 md:-top-4"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary/20 text-secondary">
              ✨
            </span>
            <span>Result-focused, playful learning vibes.</span>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Hero;
