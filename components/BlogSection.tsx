'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection, { childVariants } from '@/components/animations/Section';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  tag: string;
  date: string;
}

interface BlogSectionProps {
  posts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  return (
    <section id="blog" aria-labelledby="blog-heading" className="bg-gradient-to-br from-primary via-primary/95 to-accent">
      <AnimatedSection className="bg-transparent text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <motion.p
                variants={childVariants}
                className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary"
              >
                Blog & Updates
              </motion.p>
              <motion.h2
                variants={childVariants}
                id="blog-heading"
                className="mt-2 font-heading text-2xl font-semibold md:text-3xl lg:text-4xl"
              >
                Strategy notes, exam news and Haldwani updates.
              </motion.h2>
              <motion.p
                variants={childVariants}
                className="mt-3 max-w-xl text-sm text-white/85 md:text-base"
              >
                Stay ahead with important NEET, JEE, GBPUAT, ICAR and board exam notifications, strategy guides
                and video session recaps from Catalyst mentors.
              </motion.p>
            </div>
            <motion.p
              variants={childVariants}
              className="text-xs text-white/80"
            >
              Dynamic CMS ready – you can later plug this into a headless CMS or Google Sheets without
              changing the layout.
            </motion.p>
          </div>

          <motion.div
            variants={childVariants}
            className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {posts.map((post) => (
              <motion.article
                key={post.id}
                variants={childVariants}
                className="flex h-full flex-col rounded-3xl bg-white/5 p-5 shadow-soft-lg backdrop-blur-md"
              >
                <p className="inline-flex w-fit rounded-full bg-secondary/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-secondary">
                  {post.tag}
                </p>
                <h3 className="mt-3 font-heading text-base font-semibold text-white md:text-lg">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs text-white/80">{post.excerpt}</p>
                <p className="mt-4 text-[11px] text-white/70">{post.date}</p>
                <a
                  href="#contact"
                  className="mt-3 inline-flex w-fit items-center text-xs font-semibold text-secondary hover:text-secondary/90"
                >
                  Read more / Get PDF notes →
                </a>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default BlogSection;
