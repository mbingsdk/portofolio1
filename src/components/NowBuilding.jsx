import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, scaleIn } from '../lib/motionVariants';
import { Code2, Server, Cpu, Globe, Wrench, Zap, GitBranch, Clock, ArrowRight } from 'lucide-react';

/* ─── Credibility Strip ───────────────────────────── */
const credStats = [
  { value: '13+', label: 'Projects shipped', icon: Code2,     color: '#00d4aa' },
  { value: '3+',  label: 'Years in production', icon: Clock,  color: '#22d3ee' },
  { value: '7',   label: 'Languages & runtimes', icon: Cpu,   color: '#a855f7' },
  { value: '5+',  label: 'Client deployments', icon: Server,  color: '#f472b6' },
  { value: '∞',   label: 'Experiments running', icon: Zap,    color: '#fb923c' },
];

const stackBadges = [
  'React', 'Next.js', 'Node.js', 'Python', 'Flask', 'FastAPI',
  'PostgreSQL', 'MongoDB', 'RouterOS API', 'WhatsApp Cloud API',
  'Flutter', 'Laravel', 'Tailwind', 'Docker', 'Nginx', 'Linux', 'DNS/Firewall',
];

export function CredibilityStrip() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Grid texture */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      {/* Edge glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-96 bg-[#00d4aa]/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Stats row */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-10"
        >
          {credStats.map(({ value, label, icon: Icon, color }) => (
            <motion.div
              key={label}
              variants={scaleIn}
              className="relative rounded-2xl border border-white/6 p-4 text-center group overflow-hidden"
              style={{ background: 'rgba(13,21,48,0.5)', backdropFilter: 'blur(12px)' }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
                style={{ background: `radial-gradient(circle at center, ${color}08 0%, transparent 70%)` }}
              />
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2"
                style={{ background: `${color}10`, border: `1px solid ${color}20` }}
              >
                <Icon size={14} style={{ color }} />
              </div>
              <div className="font-display text-2xl font-700" style={{ color }}>{value}</div>
              <div className="font-mono text-[10px] text-[#a8b4d0]/70 mt-0.5 leading-tight">{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stack overflow strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Wrench size={12} className="text-[#a8b4d0]/60" />
            <p className="font-mono text-[10px] text-[#a8b4d0]/60 uppercase tracking-widest">Tools & runtimes used in production</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {stackBadges.map(badge => (
              <span
                key={badge}
                className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-white/8 bg-white/4 text-[#a8b4d0]/70 hover:border-[#00d4aa]/30 hover:text-[#00d4aa] transition-all duration-200 cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Now Building ────────────────────────────────── */
const nowBuilding = [
  {
    title: 'Mikrotik Manager v3',
    status: 'Active development',
    statusColor: '#00d4aa',
    direction: 'Redesigning the UI into a multi-tenant SaaS product. Adding team roles, audit logging, and an API for third-party integrations.',
    tags: ['Node.js', 'React', 'Multi-tenant'],
    pulse: true,
  },
  {
    title: 'AI Document Pipeline',
    status: 'Prototyping',
    statusColor: '#22d3ee',
    direction: 'Generalizing the SAD AI model into a reusable form-extraction service. Goal: drop in any scanned document, get structured JSON out.',
    tags: ['Python', 'FastAPI', 'LLM', 'OCR'],
    pulse: false,
  },
  {
    title: 'Open-source RouterOS API wrapper',
    status: 'Planning',
    statusColor: '#a855f7',
    direction: 'Extracting the Mikrotik API integration layer into a standalone npm package. Proper TypeScript types, event streaming, reconnect logic.',
    tags: ['TypeScript', 'npm', 'RouterOS'],
    pulse: false,
  },
];

export function NowBuilding() {
  return (
    <section className="relative py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <motion.span variants={fadeUp} className="font-mono text-xs text-[#22d3ee] tracking-wider uppercase mb-3 block">
            <span className="section-line" style={{ background: 'linear-gradient(90deg, #22d3ee, transparent)' }} />Now Building
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-800 text-white mb-3">
            What I'm working on <span style={{
              background: 'linear-gradient(135deg, #22d3ee 0%, #00d4aa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>right now</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-[#a8b4d0] max-w-lg text-sm">
            Current direction and active builds. Updated when something actually ships or pivots.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-4"
        >
          {nowBuilding.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative rounded-2xl border border-white/6 p-6 overflow-hidden group transition-all duration-300 hover:border-white/10"
              style={{ background: 'rgba(13,21,48,0.6)', backdropFilter: 'blur(16px)' }}
            >
              {/* Left accent */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[2px]"
                style={{ background: item.statusColor }}
              />

              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 mb-2">
                    {item.pulse && (
                      <span className="relative flex h-2 w-2 flex-shrink-0">
                        <span
                          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                          style={{ background: item.statusColor }}
                        />
                        <span
                          className="relative inline-flex rounded-full h-2 w-2"
                          style={{ background: item.statusColor }}
                        />
                      </span>
                    )}
                    <span
                      className="font-mono text-[10px] px-2.5 py-0.5 rounded-full"
                      style={{ color: item.statusColor, background: `${item.statusColor}15`, border: `1px solid ${item.statusColor}25` }}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="font-display font-700 text-white text-lg mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-[#a8b4d0] leading-relaxed">{item.direction}</p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.tags.map(t => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-white/8 text-[#a8b4d0]/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center border border-white/8 bg-white/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <GitBranch size={14} className="text-[#a8b4d0]" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Direction note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 p-4 rounded-xl border border-white/5 bg-white/2"
        >
          <p className="font-mono text-xs text-[#a8b4d0]/50 leading-relaxed">
            <span className="text-[#00d4aa]">//</span> Current focus: turning one-off client tools into reusable infrastructure — network management, document automation, and API-first systems that don't require babysitting.
          </p>
        </motion.div>
      </div>
    </section>
  );
}