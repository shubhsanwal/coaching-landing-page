'use client';

import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import AnimatedSection, { childVariants } from '@/components/animations/Section';

export interface Testimonial {
  id: string;
  name: string;
  exam: string;
  year: string;
  rankOrScore: string;
  message: string;
  rating: number;
  photo?: string;
  videoUrl?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-muted"
    >
      <AnimatedSection className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center">
            <motion.p
              variants={childVariants}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-primary"
            >
              Testimonials
            </motion.p>
            <motion.h2
              variants={childVariants}
              id="testimonials-heading"
              className="mt-2 font-heading text-2xl font-semibold text-dark md:text-3xl lg:text-4xl"
            >
              Stories of ranks, confidence and clarity.
            </motion.h2>
            <motion.p
              variants={childVariants}
              className="mx-auto mt-3 max-w-2xl text-sm text-slate-700 md:text-base"
            >
              Hear from NEET, JEE, GBPUAT, ICAR and board toppers who turned consistent effort into exceptional
              scores with Catalyst Institute.
            </motion.p>
          </div>

          <motion.div variants={childVariants} className="mt-8">
            <Slider {...settings} aria-label="Topper testimonials carousel">
              {testimonials.map((t) => (
                <div key={t.id}>
                  <article className="h-full rounded-3xl bg-white p-5 shadow-soft-lg">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-dark">
                          {t.name}
                        </p>
                        <p className="mt-1 text-xs text-primary/80">
                          {t.exam} • {t.year} • {t.rankOrScore}
                        </p>
                      </div>
                      <div className="flex items-center gap-0.5 text-secondary" aria-label={`${t.rating} star rating`}>
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <FaStar
                            // eslint-disable-next-line react/no-array-index-key
                            key={idx}
                            className={
                              idx < t.rating ? 'h-4 w-4 fill-secondary' : 'h-4 w-4 fill-secondary/20'
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-3 text-sm italic text-slate-700">“{t.message}”</p>

                    {t.videoUrl && (
                      <div className="mt-4 overflow-hidden rounded-2xl border border-muted bg-black/5">
                        <div className="aspect-video w-full">
                          <iframe
                            title={`${t.name} testimonial video`}
                            src={t.videoUrl}
                            loading="lazy"
                            className="h-full w-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    )}
                  </article>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Testimonials;
