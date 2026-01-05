'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection, { childVariants } from '@/components/animations/Section';
import WaveDivider from '@/components/WaveDivider';

export interface Course {
  id: string;
  name: string;
  category: 'Entrance' | 'School' | 'Hybrid';
  target: string;
  duration: string;
  mode: string;
  highlight: string;
  type: string;
  features: string[];
}

interface CoursesProps {
  courses: Course[];
}

const tabs: { id: Course['category']; label: string }[] = [
  { id: 'Entrance', label: 'NEET / JEE / GBPUAT / ICAR / Vet. Sc.' },
  { id: 'School', label: 'School Academics (9-12)' },
  { id: 'Hybrid', label: 'Hybrid / Online Mentorship' }
];

const Courses: React.FC<CoursesProps> = ({ courses }) => {
  const [activeTab, setActiveTab] = useState<Course['category']>('Entrance');

  const filteredCourses = useMemo(
    () => courses.filter((course) => course.category === activeTab),
    [courses, activeTab]
  );

  return (
    <section id="courses" aria-labelledby="courses-heading" className="bg-white">
      <WaveDivider from="#28A745" to="#FFFFFF" />
      <AnimatedSection className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center">
            <motion.p
              variants={childVariants}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-primary"
            >
              Programs
            </motion.p>
            <motion.h2
              variants={childVariants}
              id="courses-heading"
              className="mt-2 font-heading text-2xl font-semibold text-dark md:text-3xl lg:text-4xl"
            >
              Structured batches for every competitive journey.
            </motion.h2>
            <motion.p
              variants={childVariants}
              className="mx-auto mt-3 max-w-2xl text-sm text-slate-700 md:text-base"
            >
              Choose from focused entrance exam programs, school-integrated batches and hybrid tracks designed
              for Haldwani students who want national-level results.
            </motion.p>
          </div>

          <motion.div
            variants={childVariants}
            className="mt-6 flex flex-wrap justify-center gap-3"
            role="tablist"
            aria-label="Course categories"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary bg-primary text-white shadow-soft-lg'
                    : 'border-primary/20 bg-primary/5 text-primary hover:border-primary/40'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          <motion.div
            variants={childVariants}
            className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredCourses.map((course) => (
              <motion.article
                key={course.id}
                variants={childVariants}
                className="group flex flex-col rounded-3xl border border-slate-100 bg-white p-5 shadow-soft-lg transition-transform hover:-translate-y-2 hover:rotate-[0.25deg] hover:shadow-xl"
              >
                <header>
                  <p className="inline-flex rounded-full bg-secondary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-secondary">
                    {course.type}
                  </p>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-dark md:text-xl">
                    {course.name}
                  </h3>
                  <p className="mt-1 text-xs text-primary/80">Target: {course.target}</p>
                  <p className="mt-1 text-xs text-slate-600">
                    Duration: <span className="font-medium text-dark">{course.duration}</span> • Mode:{' '}
                    <span className="font-medium text-dark">{course.mode}</span>
                  </p>
                </header>

                <ul className="mt-4 flex-1 space-y-2 text-xs text-slate-700">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <footer className="mt-5 flex items-center justify-between text-xs">
                  <p className="max-w-[70%] text-[11px] text-slate-600">
                    {course.highlight}
                  </p>
                  <a
                    href="#contact"
                    className="rounded-full bg-primary px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-white shadow-soft-lg transition-transform group-hover:scale-105"
                  >
                    Know More
                  </a>
                </footer>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            variants={childVariants}
            className="mt-10 grid gap-6 rounded-3xl bg-gradient-to-r from-primary/5 via-secondary/10 to-accent/5 p-6 md:grid-cols-[1.8fr_1.2fr]"
          >
            <div>
              <h3 className="font-heading text-lg font-semibold text-dark md:text-xl">
                Hybrid Learning Hub – study smart across classroom and screens.
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Continue learning even when you are travelling or not in Haldwani. Recorded concept capsules,
                live doubt rooms, AI-powered test analysis and parent dashboards keep your preparation on track.
              </p>
              <ul className="mt-3 grid gap-2 text-xs text-slate-700 md:grid-cols-2">
                <li>• Access to recordings of key concept classes.</li>
                <li>• AI-like doubt clearing assistant teasers and live mentor sessions.</li>
                <li>• Weekly performance reports and ranker strategy sessions.</li>
                <li>• Digital question banks for NEET, JEE, GBPUAT, ICAR & boards.</li>
              </ul>
            </div>
            <div className="flex flex-col justify-between rounded-2xl bg-white/70 p-4 text-xs shadow-soft-lg">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Not sure which batch fits?
              </p>
              <p className="mt-1 text-sm text-dark">
                Share your goal and current class. Our academic counsellor in Haldwani will call you with a
                personalised study roadmap.
              </p>
              <a
                href="#contact"
                className="mt-3 inline-flex items-center justify-center rounded-full bg-secondary px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-dark shadow-soft-lg hover:bg-secondary/90"
              >
                Request Counselling Call
              </a>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Courses;
