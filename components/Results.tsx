'use client';

import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedSection, { childVariants } from '@/components/animations/Section';

export interface ResultItem {
  id: string;
  name: string;
  exam: string;
  year: string;
  rankOrScore: string;
  college: string;
}

interface ResultsProps {
  results: ResultItem[];
}

interface CounterProps {
  value: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ value, suffix = '+' }) => {
  const [display, setDisplay] = useState(0);
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
};

const Results: React.FC<ResultsProps> = ({ results }) => {
  const totalSelections = results.length;
  const neetSelections = results.filter((r) => r.exam.includes('NEET')).length;
  const jeeSelections = results.filter((r) => r.exam.includes('JEE')).length;

  return (
    <section id="results" aria-labelledby="results-heading" className="bg-white">
      <AnimatedSection className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center">
            <motion.p
              variants={childVariants}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-primary"
            >
              Results
            </motion.p>
            <motion.h2
              variants={childVariants}
              id="results-heading"
              className="mt-2 font-heading text-2xl font-semibold text-dark md:text-3xl lg:text-4xl"
            >
              Consistent top ranks from Haldwani.
            </motion.h2>
            <motion.p
              variants={childVariants}
              className="mx-auto mt-3 max-w-2xl text-sm text-slate-700 md:text-base"
            >
              Year after year, Catalyst Institute learners secure seats in AIIMS, top Govt. medical colleges,
              IITs, NITs and premier agricultural & veterinary universities.
            </motion.p>
          </div>

          <motion.div
            variants={childVariants}
            className="mt-8 grid gap-4 rounded-3xl bg-gradient-to-r from-primary/5 via-secondary/10 to-accent/5 p-5 md:grid-cols-3"
          >
            <div className="rounded-2xl bg-white/80 p-4 text-center shadow-soft-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Total selections
              </p>
              <p className="mt-1 text-3xl font-semibold text-primary md:text-4xl">
                <Counter value={Math.max(50, totalSelections)} />
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Across NEET, JEE, GBPUAT, ICAR, Vet. Sc. and Boards.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 text-center shadow-soft-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                NEET & Medical
              </p>
              <p className="mt-1 text-3xl font-semibold text-accent md:text-4xl">
                <Counter value={Math.max(20, neetSelections)} />
              </p>
              <p className="mt-1 text-xs text-slate-600">Selections into AIIMS & Govt. medical colleges.</p>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 text-center shadow-soft-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                JEE & Engineering
              </p>
              <p className="mt-1 text-3xl font-semibold text-secondary md:text-4xl">
                <Counter value={Math.max(15, jeeSelections)} />
              </p>
              <p className="mt-1 text-xs text-slate-600">IITs, NITs and top engineering colleges.</p>
            </div>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {results.map((r) => (
              <motion.article
                key={r.id}
                variants={childVariants}
                className="flex flex-col rounded-3xl border border-slate-100 bg-muted p-4 shadow-soft-lg"
              >
                <header className="flex items-center justify-between text-xs">
                  <div>
                    <p className="font-heading text-sm font-semibold text-dark">{r.name}</p>
                    <p className="mt-0.5 text-[11px] text-primary/80">
                      {r.exam} • {r.year}
                    </p>
                  </div>
                  <p className="rounded-full bg-secondary/20 px-3 py-1 text-[11px] font-semibold text-secondary">
                    {r.rankOrScore}
                  </p>
                </header>
                <p className="mt-2 text-xs text-slate-700">{r.college}</p>
                <p className="mt-3 text-[11px] text-slate-600">
                  “Disciplined test series, instant doubt support and mentor feedback helped me stay consistent.”
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Results;
