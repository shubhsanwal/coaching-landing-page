'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import AnimatedSection, { childVariants } from '@/components/animations/Section';

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm<ContactFormValues>();

  const onSubmit = (data: ContactFormValues) => {
    // In production, integrate with email service / backend endpoint
    // eslint-disable-next-line no-console
    console.log('Contact form submitted', data);
    reset();
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-primary">
      <AnimatedSection className="bg-primary text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div>
              <motion.h2
                variants={childVariants}
                id="contact-heading"
                className="font-heading text-2xl font-semibold md:text-3xl lg:text-4xl"
              >
                Visit our Haldwani centre or request a call back.
              </motion.h2>
              <motion.p
                variants={childVariants}
                className="mt-3 text-sm text-white/85 md:text-base"
              >
                Share your details and our academic counsellor will help you pick the right NEET, JEE, GBPUAT,
                ICAR, Vet. Sc. or school academics program.
              </motion.p>

              <motion.form
                variants={childVariants}
                onSubmit={handleSubmit(onSubmit)}
                className="mt-6 space-y-4 text-sm"
                aria-label="Contact form for Catalyst Institute"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-white/90">
                      Student Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register('name', { required: 'Please enter your name' })}
                      className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:border-secondary focus:outline-none"
                      placeholder="Rahul Sharma"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-secondary">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-white/90">
                      Mobile Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone', {
                        required: 'Please enter your mobile number',
                        minLength: { value: 10, message: 'Enter a valid number' }
                      })}
                      className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:border-secondary focus:outline-none"
                      placeholder="98765 43210"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-secondary">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-white/90">
                      Email ID
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', { required: 'Please enter your email address' })}
                      className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:border-secondary focus:outline-none"
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-secondary">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-xs font-medium text-white/90">
                      Interested Program
                    </label>
                    <select
                      id="course"
                      {...register('course', { required: 'Please select a program' })}
                      className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white focus:border-secondary focus:outline-none"
                    >
                      <option value="" className="text-dark">
                        Select a goal
                      </option>
                      <option value="NEET-UG" className="text-dark">
                        NEET-UG (Medical)
                      </option>
                      <option value="JEE" className="text-dark">
                        JEE (Main + Advanced)
                      </option>
                      <option value="GBPUAT-ICAR" className="text-dark">
                        GBPUAT / ICAR / Vet. Sciences
                      </option>
                      <option value="School-9-10" className="text-dark">
                        School Academics (Classes 9-10)
                      </option>
                      <option value="School-11-12" className="text-dark">
                        School + Entrance (Classes 11-12)
                      </option>
                    </select>
                    {errors.course && (
                      <p className="mt-1 text-xs text-secondary">{errors.course.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-white/90">
                    Your Query / Class / Board
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:border-secondary focus:outline-none"
                    placeholder="Tell us about your current preparation, class and target year..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-secondary px-6 py-2 text-xs font-semibold uppercase tracking-wide text-dark shadow-soft-lg hover:bg-secondary/90"
                >
                  Submit Enquiry
                </button>
                {isSubmitSuccessful && (
                  <p className="mt-2 text-xs text-secondary">
                    Thank you! Our team will contact you shortly.
                  </p>
                )}
              </motion.form>
            </div>

            <div className="space-y-4 text-sm">
              <motion.div
                variants={childVariants}
                className="overflow-hidden rounded-3xl bg-white shadow-soft-lg"
              >
                <div className="aspect-video w-full">
                  <iframe
                    title="Catalyst Institute Haldwani location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.454632670525!2d79.521!3d29.218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0b78c0c000001%3AHaldwani%20College!5e0!3m2!1sen!2sin!4v1700000000000"
                    loading="lazy"
                    className="h-full w-full border-0"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={childVariants}
                className="rounded-3xl bg-white/10 p-4 text-sm text-white/90"
              >
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 h-4 w-4 text-secondary" aria-hidden="true" />
                  <p>
                    Near GBPUAT Entrance,
                    <br />
                    Haldwani, Uttarakhand 263139
                  </p>
                </div>
                <div className="mt-3 flex flex-col gap-2 text-sm">
                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center gap-2 text-secondary hover:text-secondary/90"
                  >
                    <FaPhoneAlt className="h-4 w-4" aria-hidden="true" />
                    <span>+91-98765-43210</span>
                  </a>
                  <a
                    href="mailto:info@catalystinstitute.in"
                    className="inline-flex items-center gap-2 text-white/90 hover:text-white"
                  >
                    <FaEnvelope className="h-4 w-4" aria-hidden="true" />
                    <span>info@catalystinstitute.in</span>
                  </a>
                  <p className="text-xs text-white/80">
                    Timings: 9:00 AM – 8:00 PM (All 7 days during admission season)
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xs text-white/80">Follow us for classroom glimpses & ranker tips.</p>
                  <div className="flex items-center gap-3 text-white">
                    <a href="#" aria-label="Catalyst Institute on Facebook" className="hover:text-secondary">
                      <FaFacebook />
                    </a>
                    <a href="#" aria-label="Catalyst Institute on Instagram" className="hover:text-secondary">
                      <FaInstagram />
                    </a>
                    <a href="#" aria-label="Catalyst Institute on YouTube" className="hover:text-secondary">
                      <FaYoutube />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default ContactSection;
