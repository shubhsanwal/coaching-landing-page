'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection, { childVariants } from '@/components/animations/Section';
import WaveDivider from '@/components/WaveDivider';

export interface FacultyMember {
  id: string;
  name: string;
  subject: string;
  qualification: string;
  experience: string;
  highlight: string;
}

interface FacultyProps {
  faculty: FacultyMember[];
}

const Faculty: React.FC<FacultyProps> = ({ faculty }) => {
  return (
    <section id="faculty" aria-labelledby="faculty-heading" className="bg-gradient-to-br from-accent via-primary to-primary">
      <WaveDivider flip from="#FFFFFF" to="#28A745" />
      <AnimatedSection className="bg-transparent text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center">
            <motion.p
              variants={childVariants}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary"
            >
              Faculty
            </motion.p>
            <motion.h2
              variants={childVariants}
              id="faculty-heading"
              className="mt-2 font-heading text-2xl font-semibold md:text-3xl lg:text-4xl"
            >
              Subject experts who mentor beyond the classroom.
            </motion.h2>
            <motion.p
              variants={childVariants}
              className="mx-auto mt-3 max-w-2xl text-sm text-white/85 md:text-base"
            >
              Learn from a tightly knit team of NEET, JEE, GBPUAT, ICAR and school academics mentors who blend
              exam experience with a friendly, approachable teaching style.
            </motion.p>
          </div>

          <motion.div
            variants={childVariants}
            className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {faculty.map((member) => (
              <motion.article
                key={member.id}
                variants={childVariants}
                className="group flex flex-col items-center rounded-3xl bg-white/5 p-5 text-center shadow-soft-lg backdrop-blur-md"
              >
                <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-full border-2 border-secondary/70 bg-white/10">
                  <div className="flex h-full w-full items-center justify-center text-3xl font-semibold text-secondary">
                    {member.name.charAt(0)}
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,#FFC107_0,transparent_60%),radial-gradient(circle_at_80%_0,#FFFFFF_0,transparent_55%)] opacity-70" />
                </div>
                <h3 className="font-heading text-base font-semibold text-white md:text-lg">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-secondary">
                  {member.subject}
                </p>
                <p className="mt-1 text-[11px] text-white/80">{member.qualification}</p>
                <p className="mt-1 text-[11px] text-white/70">{member.experience}</p>
                <p className="mt-3 text-xs text-white/80">{member.highlight}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Faculty;
