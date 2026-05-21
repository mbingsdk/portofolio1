import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Code2, Layers, Cpu, Globe } from 'lucide-react';
import { staggerContainer, fadeUp, scaleIn } from '../lib/motionVariants';

/* ─── Floating Cube (CSS 3D) ──────────────────────── */
const FloatingCube = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Outer ring */}
    <div
      className="absolute w-64 h-64 rounded-full border border-[#00d4aa]/15"
      style={{ animation: 'spin 20s linear infinite' }}
    />
    <div
      className="absolute w-48 h-48 rounded-full border border-[#7c3aed]/15"
      style={{ animation: 'spin 14s linear infinite reverse' }}
    />

    {/* Core glass panel */}
    <motion.div
      animate={{ y: [0, -12, 0], rotateZ: [0, 2, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="relative w-52 h-52 rounded-2xl"
      style={{
        background: 'linear-gradient(135deg, rgba(0,212,170,0.08) 0%, rgba(124,58,237,0.12) 100%)',
        border: '1px solid rgba(0,212,170,0.2)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 0 60px rgba(0,212,170,0.1), inset 0 1px 0 rgba(255,255,255,0.06)',
        transform: 'perspective(600px) rotateX(8deg) rotateY(-8deg)',
      }}
    >
      {/* Inner code terminal lines */}
      <div className="p-5 h-full flex flex-col justify-between">
        <div className="flex items-center gap-1.5 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        {['const dev = new SDK();', 'dev.ship("ui");', '// ✓ deployed', 'dev.iterate();'].map((line, i) => (
          <div
            key={i}
            className="font-mono text-[10px] leading-relaxed"
            style={{
              color: i === 2 ? '#00d4aa' : i === 0 ? '#7c3aed' : '#a8b4d0',
              opacity: 1 - i * 0.08,
            }}
          >
            {line}
          </div>
        ))}
        <div className="mt-auto h-[1px] bg-gradient-to-r from-[#00d4aa]/40 via-[#7c3aed]/40 to-transparent" />
      </div>
    </motion.div>

    {/* Orbiting icons */}
    {[
      { icon: Code2,  color: '#00d4aa', delay: '0s',    r: 90,  angle: 0   },
      { icon: Layers, color: '#7c3aed', delay: '-2.5s', r: 90,  angle: 90  },
      { icon: Cpu,    color: '#22d3ee', delay: '-5s',   r: 90,  angle: 180 },
      { icon: Globe,  color: '#a855f7', delay: '-7.5s', r: 90,  angle: 270 },
    ].map(({ icon: Icon, color, delay, r, angle }, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          width: 36, height: 36,
          border: `1px solid ${color}30`,
          borderRadius: 10,
          background: `${color}10`,
          backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: `orbit-${i % 2 === 0 ? 'cw' : 'ccw'} ${8 + i * 2}s linear infinite`,
          animationDelay: delay,
          transformOrigin: `${-r}px 0px`,
          transform: `rotate(${angle}deg) translateX(${r}px) rotate(-${angle}deg)`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10 + i * 3, repeat: Infinity, ease: 'linear' }}
      >
        <Icon size={14} color={color} />
      </motion.div>
    ))}

    {/* Ambient glow */}
    <div
      className="absolute inset-0 rounded-full blur-3xl"
      style={{ background: 'radial-gradient(circle at center, rgba(0,212,170,0.06) 0%, transparent 70%)' }}
    />
  </div>
);

/* ─── Particle ────────────────────────────────────── */
const Particle = ({ style }) => (
  <motion.div
    className="absolute w-0.5 h-0.5 rounded-full bg-[#00d4aa]"
    style={style}
    animate={{ y: -120, opacity: [0, 1, 0] }}
    transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 4, ease: 'easeOut' }}
  />
);

/* ─── Badge chip ──────────────────────────────────── */
const Chip = ({ label, icon: Icon }) => (
  <motion.span
    variants={scaleIn}
    className="badge-chip flex items-center gap-1.5"
  >
    {Icon && <Icon size={11} />}
    {label}
  </motion.span>
);

/* ─── Home / Hero ─────────────────────────────────── */
const Home = () => {
  const prefersReduced = useReducedMotion();

  const particles = Array.from({ length: 20 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    bottom: 0,
    animationDelay: `${i * 0.3}s`,
  }));

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* ── Background layers ── */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00d4aa]/6 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#7c3aed]/8 blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#22d3ee]/4 blur-3xl" />
      </div>

      {/* Particles */}
      {!prefersReduced && particles.map((s, i) => <Particle key={i} style={s} />)}

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* Left: text */}
          <motion.div
            variants={staggerContainer(0.12, 0.2)}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Status pill */}
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4aa] opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00d4aa]" />
              </span>
              <span className="font-mono text-xs text-[#00d4aa] tracking-wider uppercase">
                Available for work · 2025
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl xl:text-6xl font-800 leading-[1.05] tracking-tight"
            >
              Building{' '}
              <span className="grad-teal">web experiences</span>
              {' '}with code, motion &{' '}
              <span className="grad-violet">mimetic design.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              className="font-body text-[#a8b4d0] text-lg leading-relaxed max-w-lg"
            >
              Halo! Saya <strong className="text-white">Mbing SDK</strong> web developer
              yang suka eksperimen digital, UI interaktif, dan desain yang estetis.
              Kadang suka tiba-tiba gabut, jadi bikin hal-hal menarik. Ehh, tapi jangan kepo!
            </motion.p>

            {/* Chips */}
            <motion.div variants={staggerContainer(0.07, 0)} className="flex flex-wrap gap-2">
              {[
                { label: 'React · Next',  icon: Code2 },
                { label: 'UI / UX',       icon: Layers },
                { label: 'Backend',       icon: Cpu },
                { label: 'Network Infra', icon: Globe },
                { label: 'Mimetic Design' },
                { label: 'AI Integration' },
              ].map(c => <Chip key={c.label} {...c} />)}
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
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,212,170,0.4)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,212,170,0.25)'}
              >
                Lihat Projects <ArrowRight size={15} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body font-500 text-sm text-white border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#00d4aa]/30 transition-all duration-300"
              >
                Kontak Saya
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body font-500 text-sm text-[#a8b4d0] hover:text-white border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                Tentang Saya
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={staggerContainer(0.1, 0)}
              className="flex items-center gap-6 pt-4 border-t border-white/5"
            >
              {[
                { value: '13+', label: 'Projects' },
                { value: '22+', label: 'Tech Stack' },
                { value: '3+',  label: 'Years' },
              ].map(({ value, label }) => (
                <motion.div key={label} variants={fadeUp} className="text-center">
                  <div className="font-display text-2xl font-700 grad-teal">{value}</div>
                  <div className="font-mono text-[11px] text-[#a8b4d0] mt-0.5">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: 3D hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center h-[480px]"
          >
            <FloatingCube />
          </motion.div>
        </div>
      </div>

      {/* Inline keyframes for orbit */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default Home;
