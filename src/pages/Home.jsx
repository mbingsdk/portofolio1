import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { staggerContainer, fadeUp, scaleIn } from '../lib/motionVariants';
import FeaturedProjects from '../components/FeaturedProjects';
import SDKLab from '../components/SDKLab';
import { CredibilityStrip, NowBuilding } from '../components/NowBuilding';

/* ─── Terminal visual ─────────────────────────────── */
const TerminalVisual = ({ prefersReduced }) => (
  <motion.div
    initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: prefersReduced ? 0.15 : 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    className="relative"
  >
    {/* Ambient glow */}
    {!prefersReduced && (
      <div
        className="absolute -inset-8 rounded-3xl blur-3xl opacity-30"
        style={{ background: 'radial-gradient(ellipse, rgba(0,212,170,0.12) 0%, transparent 70%)' }}
      />
    )}

    <div
      className="relative rounded-2xl overflow-hidden border border-white/10"
      style={{
        background: 'rgba(8,13,26,0.9)',
        backdropFilter: 'blur(24px)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,212,170,0.06)',
      }}
    >
      {/* Terminal bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-[10px] text-[#a8b4d0]/50 ml-2">mbingsdk ~ sdk-dev</span>
        <Terminal size={10} className="text-[#a8b4d0]/30 ml-auto" />
      </div>

      {/* Code lines */}
      <div className="p-5 space-y-1 font-mono text-xs leading-relaxed">
        {[
          { color: '#a8b4d0', text: '$ whoami' },
          { color: '#00d4aa', text: 'Mbing SDK | full-stack + network infra dev' },
          { color: '#a8b4d0', text: '' },
          { color: '#a8b4d0', text: '$ ls ./builds' },
          { color: '#22d3ee', text: 'mikrotik-manager/  billing-system/  admin-desa/' },
          { color: '#22d3ee', text: 'marketplace/       discord-bot/      hotspot-coins/' },
          { color: '#a8b4d0', text: '' },
          { color: '#a8b4d0', text: '$ cat ./stack.txt' },
          { color: '#6ee7b7', text: 'React · Next.js · Node.js · Python · RouterOS API' },
          { color: '#6ee7b7', text: 'WhatsApp Cloud · Mikrotik · PostgreSQL · Flutter' },
          { color: '#a8b4d0', text: '' },
          { color: '#a8b4d0', text: '$ echo $STATUS' },
          { color: '#facc15', text: 'Available for interesting problems →' },
          { color: '#00d4aa', text: '▌', pulse: true },
        ].map((line, i) => (
          <div key={i} className="flex items-center gap-0">
            <span
              style={{
                color: line.color,
                animation: line.pulse && !prefersReduced ? 'blink 1.2s step-end infinite' : 'none',
              }}
            >
              {line.text}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Floating stats */}
    {[
      { label: '13+ shipped', x: '-right-4 top-8',  color: '#00d4aa' },
      { label: '3+ years',    x: '-right-4 bottom-12', color: '#7c3aed' },
    ].map(({ label, x, color }) => (
      <motion.div
        key={label}
        animate={!prefersReduced ? { y: [0, -6, 0] } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: label.includes('3') ? 1.5 : 0 }}
        className={`absolute ${x} hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-lg`}
        style={{
          background: `${color}10`,
          border: `1px solid ${color}30`,
          backdropFilter: 'blur(8px)',
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
        <span className="font-mono text-[10px]" style={{ color }}>{label}</span>
      </motion.div>
    ))}

    <style>{`
      @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
    `}</style>
  </motion.div>
);

/* ─── Home / Hero ─────────────────────────────────── */
const Home = () => {
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative overflow-hidden">

      {/* ══ HERO ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00d4aa]/5 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-[#7c3aed]/7 blur-3xl" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#22d3ee]/3 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

            {/* Left: copy */}
            <motion.div
              variants={staggerContainer(0.1, 0.1)}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              {/* Status pill */}
              <motion.div variants={fadeUp} className="flex items-center gap-2.5">
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
                className="font-display text-4xl md:text-5xl xl:text-6xl font-800 leading-[1.05] tracking-tight"
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body font-600 text-sm text-[#080d1a] transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #00d4aa, #22d3ee)',
                    boxShadow: '0 4px 24px rgba(0,212,170,0.25)',
                  }}
                >
                  See all projects <ArrowRight size={14} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body font-500 text-sm text-white border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#00d4aa]/30 transition-all duration-300"
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
            <div className="hidden lg:block">
              <TerminalVisual prefersReduced={prefersReduced} />
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
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-body font-600 text-sm text-[#080d1a] transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #00d4aa, #22d3ee)',
                boxShadow: '0 4px 24px rgba(0,212,170,0.25)',
              }}
            >
              Get in touch <ArrowRight size={14} />
            </Link>
            <a
              href="https://github.com/mbingsdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-body font-500 text-sm text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
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