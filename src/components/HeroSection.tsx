import { useState, useEffect } from 'react';
import { HERO } from '../data/portfolioData';
import { ArrowRight, Mail, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/images/profile.jpg';

const ROLES = ['Data Scientist', 'AI Practitioner', 'ML Engineer', 'AI Coach'];

const useTypewriter = (words: string[], speed = 90, pause = 1500) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDeleting(false);
            setWordIndex((i) => i + 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
};

export const HeroSection = () => {
  const typedRole = useTypewriter(ROLES);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="max-w-6xl mx-auto px-4 sm:px-8 pt-16 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-cyan-400 font-mono text-sm mb-4"
          >
            👋 {HERO.greeting.replace('👋 ', '')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold mb-3 leading-tight"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {HERO.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-6 h-8"
          >
            {typedRole}
            <span className="animate-pulse">|</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed"
          >
            {HERO.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-400 to-purple-500 hover:scale-105 text-slate-950 font-bold rounded-full transition-transform"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-cyan-400 text-slate-100 font-bold rounded-full hover:scale-105 transition-all"
            >
              Get In Touch <Mail className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Right: photo with glow ring + floating badges */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-cyan-500/20 blur-2xl" />
            <motion.img
              src={profilePhoto}
              alt={HERO.name}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-2 border-cyan-400/50"
            />

            {/* Floating badge: top right */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-6 bg-slate-900/90 border border-slate-700 rounded-2xl px-4 py-3 shadow-xl backdrop-blur"
            >
              <div className="text-2xl font-extrabold text-cyan-400">{HERO.stats[0].value}</div>
              <div className="text-xs text-slate-400">{HERO.stats[0].label}</div>
            </motion.div>

            {/* Floating badge: bottom left */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 -left-6 bg-slate-900/90 border border-slate-700 rounded-2xl px-4 py-3 shadow-xl backdrop-blur"
            >
              <div className="text-2xl font-extrabold text-cyan-400">{HERO.stats[1].value}</div>
              <div className="text-xs text-slate-400">{HERO.stats[1].label}</div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        className="block mx-auto mt-20 text-slate-500 hover:text-cyan-400 transition-colors"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-6 h-6 mx-auto" />
        <span className="text-xs block mt-1">Scroll</span>
      </motion.button>
    </section>
  );
};