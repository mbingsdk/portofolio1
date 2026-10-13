import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { staggerContainer, fadeUp, scaleIn } from '../lib/motionVariants';
import FeaturedProjects from '../components/FeaturedProjects';
import SDKLab from '../components/SDKLab';
import { CredibilityStrip, NowBuilding } from '../components/NowBuilding';

/* ─── Liquid glass showcase ──────────────────────── */
const LiquidShowcase = ({ prefersReduced }) => (
  <motion.div
    initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: prefersReduced ? 0.1 : 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
    className="liquid-stage"
    aria-label="Abstract liquid glass illustration showcasing custom software development"
  >
    <div className="liquid-stage__aura" aria-hidden="true" />
    <div className="liquid-stage__ring" aria-hidden="true" />
    <div className="liquid-orb liquid-orb--large" aria-hidden="true" />
    <div className="liquid-orb liquid-orb--small" aria-hidden="true" />

    <div className="liquid-showcase">
      <div className="liquid-showcase__header font-mono">
        <span className="liquid-showcase__dot" />
        SDK / DIGITAL STUDIO
        <Sparkles size={13} className="ml-auto text-[#d4e7ff]" />
      </div>
      <div className="liquid-showcase__body">
        <span className="liquid-showcase__eyebrow">Designed to solve real problems</span>
        <h2 className="liquid-showcase__title">Code meets<br /><em>craft.</em></h2>
        <p className="liquid-showcase__copy">
          Full-stack apps, connected systems, and automation shaped around the people who use them.
        </p>
      </div>
      <div className="liquid-showcase__footer">
        <span>WEB APPS</span><span>AUTOMATION</span><span>INFRASTRUCTURE</span>
      </div>
    </div>

    <div className="liquid-float liquid-float--top">
      <span className="liquid-float__label">Selected work</span>
      <span className="liquid-float__value">Built & shipped <ArrowUpRight size={12} className="inline ml-1 text-[#b7f6f4]" /></span>
    </div>
    <div className="liquid-float liquid-float--bottom">
      <span className="liquid-float__label">Focus</span>
      <span className="liquid-float__value">Practical by design</span>
    </div>
  </motion.div>
);

/* ─── Home / Hero ─────────────────────────────────── */
const Home = () => {
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative overflow-hidden">

      {/* ══ HERO ══════════════════════════════════════ */}
      <section className="liquid-hero relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00d4aa]/5 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-[#7c3aed]/7 blur-3xl" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#22d3ee]/3 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-12">
          <div className="grid lg:grid-cols-2 gap-7 lg:gap-12 items-center min-h-[80vh]">

            {/* Left: copy */}
            <motion.div
              variants={staggerContainer(0.1, 0.1)}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              {/* Status pill */}
              <motion.div variants={fadeUp} className="liquid-eyebrow flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className={`${prefersReduced ? '' : 'animate-ping'} absolute inline-flex h-full w-full rounded-full bg-[#00d4aa] opacity-60`} />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d4aa]" />
                </span>
                <span className="font-mono text-xs text-[#00d4aa] tracking-wider uppercase">
                  Open to work · Enrekang, Indonesia
                </span>
              </motion.div>

              {/* Headline | what I build, not who I am */}
              <motion.h1
                variants={fadeUp}
                className="font-display text-[clamp(2.9rem,6vw,5.2rem)] font-800 leading-[1.04] tracking-[-0.055em] text-white"
              >
                I build{' '}
                <span className="grad-teal">systems</span>{' '}
                that work
                <br />
                <span className="text-[#a8b4d0] text-3xl md:text-4xl xl:text-5xl font-500">
                  | not just interfaces.
                </span>
              </motion.h1>

              {/* Value prop */}
              <motion.p variants={fadeUp} className="font-body text-[#a8b4d0] text-base md:text-lg leading-relaxed max-w-lg">
                From{' '}
                <span className="text-white font-500">Mikrotik network automation</span>
                {' '}to{' '}
                <span className="text-white font-500">WhatsApp billing pipelines</span>
                {' '}to{' '}
                <span className="text-white font-500">AI-assisted civic platforms</span>
                {' '}| I take real problems and ship full-stack solutions.
              </motion.p>

              {/* Capability chips */}
              <motion.div variants={staggerContainer(0.06, 0)} className="flex flex-wrap gap-2">
                {[
                  'Network Infra',
                  'Full-Stack Web',
                  'API Integration',
                  'Bot Automation',
                  'Mobile (Flutter)',
                  'AI / ML Glue',
                ].map(label => (
                  <motion.span key={label} variants={scaleIn} className="badge-chip">
                    {label}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/portfolio"
                  className="liquid-primary-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body font-600 text-sm transition-all duration-300"
                  style={{
                    background: 'linear-gradient(120deg, #c1fff5, #accbff, #c7bdff)',
                    boxShadow: '0 12px 32px rgba(118,158,242,0.23)',
                  }}
                >
                  See all projects <ArrowRight size={14} />
                </Link>
                <Link
                  to="/contact"
                  className="liquid-secondary-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body font-500 text-sm text-white transition-all duration-300"
                >
                  Start a project
                </Link>
              </motion.div>

              {/* Command palette hint */}
              <motion.div variants={fadeUp} className="flex items-center gap-2 pt-1">
                <kbd className="font-mono text-[10px] text-[#a8b4d0]/50 bg-white/5 border border-white/8 rounded px-1.5 py-0.5">
                  Ctrl K
                </kbd>
                <span className="font-mono text-[10px] text-[#a8b4d0]/40">to navigate or search</span>
              </motion.div>
            </motion.div>

            {/* Right: terminal visual */}
            <div className="relative mt-3 lg:mt-0">
              <LiquidShowcase prefersReduced={prefersReduced} />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        {!prefersReduced && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-px h-8 bg-gradient-to-b from-[#00d4aa]/60 to-transparent rounded-full"
            />
          </motion.div>
        )}
      </section>

      {/* ══ CREDIBILITY STRIP ══════════════════════════ */}
      <CredibilityStrip />

      {/* ══ FEATURED PROJECTS ════════════════════════ */}
      <FeaturedProjects />

      {/* ══ SDK LAB ═══════════════════════════════════ */}
      <SDKLab />

      {/* ══ NOW BUILDING ══════════════════════════════ */}
      <NowBuilding />

      {/* ══ FINAL CTA ═════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 rounded-full bg-[#00d4aa]/6 blur-3xl" />
        </div>
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4 md:px-8 text-center"
        >
          <motion.p variants={fadeUp} className="font-mono text-xs text-[#00d4aa] tracking-wider uppercase mb-4">
            Let's build something real
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-800 text-white mb-5">
            Have a system that needs{' '}
            <span className="grad-teal">untangling?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-[#a8b4d0] mb-8 text-sm leading-relaxed max-w-lg mx-auto">
            Whether it's a network management dashboard, API integration, automated workflow, or a full-stack platform | I work best on problems with actual constraints.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="liquid-primary-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-body font-600 text-sm transition-all duration-300"
              style={{
                background: 'linear-gradient(120deg, #c1fff5, #accbff, #c7bdff)',
                boxShadow: '0 12px 32px rgba(118,158,242,0.23)',
              }}
            >
              Get in touch <ArrowRight size={14} />
            </Link>
            <a
              href="https://github.com/mbingsdk"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-secondary-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-body font-500 text-sm text-white transition-all duration-300"
            >
              Browse GitHub
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;