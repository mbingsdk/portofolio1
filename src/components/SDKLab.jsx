import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, scaleIn } from '../lib/motionVariants';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FlaskConical } from 'lucide-react';

const experiments = [
  {
    title: 'Weather Tracker (Desktop)',
    type: 'AI Experiment',
    typeColor: '#a78bfa',
    desc: 'CNN + OCR pipeline that reads weather state from a game screen in real-time, tracks cycle timers, and pushes Discord notifications.',
    tags: ['Python', 'CNN', 'OCR', 'Discord API'],
    link: 'https://github.com/mbingsdk/MountSumbingCompanion/releases',
    isGithub: true,
    status: 'released',
  },
  {
    title: 'Weather Tracker (Mobile)',
    type: 'Mobile Experiment',
    typeColor: '#22d3ee',
    desc: 'Same concept, Android APK. Screenshot-based weather detection without root access using a lightweight ML model.',
    tags: ['Flutter', 'ML', 'OpenCV'],
    link: 'https://github.com/mbingsdk/SumbingAPK',
    isGithub: true,
    status: 'released',
  },
  {
    title: 'Chord Guitar Web',
    type: 'UI Tool',
    typeColor: '#00d4aa',
    desc: 'Fast guitar chord search with visual fretboard. Built because existing apps were too slow or required login for basic chord lookup.',
    tags: ['React', 'Web Audio API', 'Tailwind'],
    link: 'https://west.mbingsdk.my.id',
    isGithub: false,
    status: 'live',
  },
  {
    title: 'Discord Moderator Panel',
    type: 'Bot + Dashboard',
    typeColor: '#818cf8',
    desc: 'Web control panel for Discord bot management — server stats, mod actions, fun commands, and member analytics in one place.',
    tags: ['Node.js', 'Discord.js', 'React'],
    link: 'https://discord.mbingsdk.my.id',
    isGithub: false,
    status: 'live',
  },
  {
    title: 'Hotspot Coin System',
    type: 'Network Infra',
    typeColor: '#f87171',
    desc: 'Mikrotik login page with coin-based access — buy time via online payment, redeem, and get connected. Includes live chat for support.',
    tags: ['PHP', 'Mikrotik API', 'Payment Gateway'],
    link: 'https://github.com/mbingsdk/sdkdev-hotspot',
    isGithub: true,
    status: 'released',
  },
  {
    title: 'Toko Bunga',
    type: 'Full Commerce',
    typeColor: '#fb923c',
    desc: 'Flower shop platform: landing page, product store, composition planner, order management, and delivery admin — all integrated.',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind'],
    link: 'https://github.com/mbingsdk/pelower',
    isGithub: true,
    status: 'released',
  },
  {
    title: 'Mini Blog Sastra',
    type: 'Creative Build',
    typeColor: '#f472b6',
    desc: 'A personal literary blog for a friend who writes poetry, art notes, and surreal short prose. Minimal, intentional, a bit weird.',
    tags: ['React', 'Markdown', 'CSS Art'],
    link: 'https://arsha.mbingsdk.my.id',
    isGithub: false,
    status: 'live',
  },
  {
    title: 'Multi Vendor Marketplace',
    type: 'Platform',
    typeColor: '#6ee7b7',
    desc: 'UMKM-scale marketplace: multiple vendors, local courier integration, and four dashboards — Admin, Vendor, Customer, Courier.',
    tags: ['Laravel', 'Flutter', 'MySQL', 'Mobile'],
    link: 'https://github.com/mbingsdk/Multi-Vendor-Marketplace',
    isGithub: true,
    status: 'released',
  },
];

const statusStyle = {
  live:     { label: 'Live',     color: '#00d4aa' },
  released: { label: 'Released', color: '#22d3ee' },
  wip:      { label: 'WIP',      color: '#facc15' },
};

export default function SDKLab() {
  return (
    <section className="relative py-20">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-[#a855f7]/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.span variants={fadeUp} className="font-mono text-xs text-[#a855f7] tracking-wider uppercase mb-3 block">
            <span className="section-line" style={{ background: 'linear-gradient(90deg, #a855f7, transparent)' }} />SDK Lab
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-800 text-white mb-3">
            Experiments &{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              small tools
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-[#a8b4d0] max-w-xl text-sm">
            Not everything needs to scale. These are the side-builds, API experiments, and creative one-offs — shipped because the problem was interesting.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {experiments.map((exp, i) => {
            const status = statusStyle[exp.status] || statusStyle.released;
            return (
              <motion.div
                key={i}
                variants={scaleIn}
                className="group relative rounded-2xl border border-white/6 overflow-hidden flex flex-col transition-all duration-300 hover:border-white/12"
                style={{ background: 'rgba(13,21,48,0.6)', backdropFilter: 'blur(16px)' }}
              >
                {/* Color accent top */}
                <div
                  className="h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${exp.typeColor}, transparent)` }}
                />

                <div className="p-5 flex flex-col flex-1 gap-3">
                  {/* Type badge + status */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="font-mono text-[10px] px-2 py-0.5 rounded-full"
                      style={{ color: exp.typeColor, background: `${exp.typeColor}12`, border: `1px solid ${exp.typeColor}25` }}
                    >
                      {exp.type}
                    </span>
                    <span
                      className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-white/8"
                      style={{ color: status.color }}
                    >
                      {status.label}
                    </span>
                  </div>

                  <h3 className="font-display font-600 text-white text-sm leading-snug group-hover:text-[#f0f4ff] transition-colors">
                    {exp.title}
                  </h3>

                  <p className="font-body text-[#a8b4d0] text-xs leading-relaxed flex-1">{exp.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {exp.tags.map(t => (
                      <span key={t} className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/8 text-[#a8b4d0]/70">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-[10px] mt-1 transition-colors duration-200"
                    style={{ color: exp.typeColor }}
                  >
                    {exp.isGithub ? <FiGithub size={11} /> : <FiExternalLink size={11} />}
                    {exp.isGithub ? 'View source' : 'Open app'}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Lab note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 flex items-center gap-3"
        >
          <FlaskConical size={14} className="text-[#a855f7]/60 flex-shrink-0" />
          <p className="font-mono text-[11px] text-[#a8b4d0]/50">
            Lab builds are real projects. They ship when they're useful, not when they're perfect.
          </p>
        </motion.div>
      </div>
    </section>
  );
}