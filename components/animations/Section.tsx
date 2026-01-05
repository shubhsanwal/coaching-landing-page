'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const sectionVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.2
    }
  }
};

export const childVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'section' | 'div';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  as = 'section',
  children,
  className = '',
  ...rest
}) => {
  const MotionComponent: any = (motion as any)[as] ?? motion.section;

  return (
    <MotionComponent
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={`relative py-16 md:py-20 lg:py-24 ${className}`}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedSection;
