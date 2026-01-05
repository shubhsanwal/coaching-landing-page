import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <p className="font-heading text-lg font-semibold">Catalyst Institute</p>
            <p className="mt-2 text-sm text-slate-300">
              NEET | JEE | GBPUAT | ICAR | Vet. Sc. | School (Classes 9-12) coaching institute in Haldwani with
              a result-driven yet joyful learning environment.
            </p>
          </div>

          <div className="text-sm">
            <p className="text-base font-semibold text-white">Quick Links</p>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>
                <a href="#about" className="hover:text-secondary">
                  About
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-secondary">
                  Courses
                </a>
              </li>
              <li>
                <a href="#faculty" className="hover:text-secondary">
                  Faculty
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-secondary">
                  Results
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="text-base font-semibold text-white">Resource Hub</p>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>NEET & JEE PYQ booklets (PDF)</li>
              <li>GBPUAT / ICAR practice sheets</li>
              <li>Board sample papers (9-12)</li>
              <li>Scholarship & fee concession policies</li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="text-base font-semibold text-white">Newsletter</p>
            <p className="mt-2 text-sm text-slate-300">
              Get exam alerts, ranker strategies and scholarship updates straight to your inbox.
            </p>
            <form className="mt-3 flex gap-2 text-sm">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-full border border-slate-600 bg-dark px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:border-secondary focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-dark hover:bg-secondary/90"
              >
                Join
              </button>
            </form>
            <div className="mt-4 flex items-center gap-3 text-slate-300">
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
        </div>

        <div className="mt-8 border-t border-slate-700 pt-4 text-xs text-slate-400 md:flex md-items-center md:justify-between">
          <p>© {new Date().getFullYear()} Catalyst Institute, Haldwani. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Website for demo purposes. Replace content & policies as needed.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
