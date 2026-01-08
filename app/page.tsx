import React from 'react';
import PrimarySeo from '@/components/seo/PrimarySeo';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Courses from '@/components/Courses';
import Faculty from '@/components/Faculty';
import Testimonials from '@/components/Testimonials';
import Results from '@/components/Results';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import ResourcePopup from '@/components/ResourcePopup';
import ScholarshipPopup from '@/components/ScholarshipPopup';
import AiDoubtTeaser from '@/components/AiDoubtTeaser';

import courses from '@/lib/courses.json';
import testimonials from '@/lib/testimonials.json';
import faculty from '@/lib/faculty.json';
import results from '@/lib/results.json';
import blog from '@/lib/blog.json';
import { Course } from '@/components/Courses';

export const revalidate = 60; // ISR for blog-like content

const HomePage = async () => {
  return (
    <>
      <PrimarySeo />
      <Header />
      <main className="relative overflow-x-hidden">
        <Hero />
        <About />
        <Courses courses={courses as Course[]} />
        <Faculty faculty={faculty} />
        <Testimonials testimonials={testimonials} />
        <Results results={results} />
        <BlogSection posts={blog} />
        <ContactSection />
        <AiDoubtTeaser />
        <ResourcePopup />
        <ScholarshipPopup />
        <WhatsAppFloatingButton />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
