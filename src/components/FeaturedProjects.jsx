import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer, scaleIn } from '../lib/motionVariants';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { ChevronDown, ChevronUp, Server, Zap, Globe } from 'lucide-react';

const featuredProjects = [
  {
    id: 'mikmanager',
    title: 'Mikrotik Manager',
    tagline: 'Full-stack network infrastructure management — from hotspot to VPN, automated.',
    icon: Server,
    accentColor: '#00d4aa',
    status: 'Live · v2.0',
    year: '2024–2025',
    image: 'images/Screenshot 2025-06-18 185845.png',
    links: {
      github: 'https://github.com/mbingsdk/mikmanager',
    },
    problem: 'ISP and network operators managing Mikrotik routers had to juggle multiple tools: Winbox for hotspot, separate billing scripts, and manual VPN setup. Each task required technical expertise and hours of repetitive configuration.',
    solution: 'A unified web dashboard that abstracts Mikrotik\'s RouterOS API into human-readable operations. Operators can provision hotspot users, generate voucher batches, manage PPPoE accounts, and spin up VPN tunnels with auto-subdomain — all from one interface with zero Winbox required.',
    role: 'Solo full-stack developer. Designed the architecture, built the RouterOS API integration layer, created the payment webhook system, and deployed the production instance.',
    stack: ['Node.js', 'React', 'RouterOS API', 'WebSocket', 'PostgreSQL', 'Payment Gateway', 'Nginx'],
    highlights: [
      'RouterOS API wrapper with real-time event streaming',
      'Auto-generate VPN remote + DDNS subdomain provisioning',
      'Integrated payment gateway with webhook → user activation pipeline',
      'Supports Mikhmon, Mikhbotam, and RADIUS user templates',
    ],
  },
  {
    id: 'billing-reminder',
    title: 'Billing Reminder System',
    tagline: 'Accurate accounting API + WhatsApp Cloud API — zero-touch invoice follow-up.',
    icon: Zap,
    accentColor: '#22d3ee',
    status: 'Production · Client',
    year: '2024',
    image: 'images/hjmb.png',
    links: {
      live: 'https://app.hjmb.cloud',
    },
    problem: 'A manufacturing client\'s AR team was manually tracking overdue invoices in Accurate accounting software and sending reminders via WhatsApp one-by-one. With hundreds of customers and monthly invoice cycles, this took days and missed SLA windows.',
    solution: 'An automated pipeline that polls Accurate\'s API daily, filters invoices by due-status and aging buckets, then dispatches personalized WhatsApp messages through WhatsApp Cloud API with the invoice PDF attached. A web dashboard gives the AR team visibility and override controls.',
    role: 'Lead developer. Reverse-engineered the Accurate API auth flow, designed the scheduling engine, built the WhatsApp Cloud API integration including media upload, and delivered the dashboard.',
    stack: ['Node.js', 'Express', 'Accurate API', 'WhatsApp Cloud API', 'PostgreSQL', 'Cron', 'React'],
    highlights: [
      'Accurate API integration with OAuth token refresh',
      'WhatsApp Cloud API with PDF media attachment support',
      'Multi-tier reminder schedule: 7-day, 3-day, due-date, overdue',
      'AR team dashboard with manual override and delivery receipts',
    ],
  },
  {
    id: 'sad',
    title: 'Sistem Administrasi Desa',
    tagline: 'Civic tech for Indonesian villages — population records, documents, finances, and an AI model API.',
    icon: Globe,
    accentColor: '#a855f7',
    status: 'Beta · Demo Live',
    year: '2025',
    image: 'images/Screenshot 2026-04-19 022923.png',
    links: {
      live: 'https://demosad.mbingsdk.my.id',
    },
    problem: 'Village administrations (kelurahan/desa) in Indonesia handle population registration, formal letter issuance, and budget reporting manually on paper or in disconnected Excel files. Requests take days; records are hard to search; errors compound.',
    solution: 'A full-stack web application built on Next.js that digitalizes core village operations: citizen registration with family-card relationships, automated letter/document generation from templates, and a financial reporting module. A Python FastAPI service hosts an AI model API for document classification and auto-field extraction from scanned forms.',
    role: 'Full-stack developer + ML integration. Built the Next.js front-end, API routes, PostgreSQL schema, and the Python AI inference service. Deployed to a demo VPS for pilot testing.',
    stack: ['Next.js', 'React', 'PostgreSQL', 'Prisma', 'Python', 'FastAPI', 'AI/ML Model', 'Tailwind CSS'],
    highlights: [
      'Citizen & family-card relational data model with history tracking',
      'Automated letter generation (surat keterangan, domisili, dll.) from dynamic templates',
      'Python FastAPI AI service for document field extraction from scanned images',
      'Budget & expense tracking with category reports',
    ],
  },
];

const StackBadge = ({ label, color }) => (
  <span
    className="font-mono text-[10px] px-2.5 py-1 rounded-full border"
    style={{ color, borderColor: `${color}30`, background: `${color}10` }}
  >
    {label}
  </span>
);

const stackColor = (label) => {
  const map = {
    'Node.js': '#6ee7b7', 'React': '#00d4aa', 'Next.js': '#e2e8f0',
    'PostgreSQL': '#93c5fd', 'Python': '#facc15', 'FastAPI': '#a3e635',
    'RouterOS API': '#f87171', 'WhatsApp Cloud API': '#4ade80',
    'Payment Gateway': '#fb923c', 'WebSocket': '#c4b5fd',
    'Nginx': '#60a5fa', 'Accurate API': '#f472b6',
    'Prisma': '#818cf8', 'AI/ML Model': '#a78bfa',
    'Cron': '#94a3b8', 'Express': '#86efac', 'Tailwind CSS': '#22d3ee',
  };
  return map[label] || '#a8b4d0';
};

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = project.icon;

  return (
    <motion.div variants={fadeUp} custom={index}>
      <div
        className="relative rounded-2xl overflow-hidden border transition-all duration-500"
        style={{
          background: 'rgba(13,21,48,0.7)',
          borderColor: expanded ? `${project.accentColor}30` : 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(20px)',
          boxShadow: expanded ? `0 0 60px ${project.accentColor}08` : 'none',
        }}
      >
        {/* Top accent line */}
        <div className="h-[1px]" style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }} />

        {/* Header */}
        <div className="p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            {/* Icon + meta */}
            <div className="flex-shrink-0">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${project.accentColor}10`, border: `1px solid ${project.accentColor}25` }}
              >
                <Icon size={20} style={{ color: project.accentColor }} />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              {/* Status + year */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span
                  className="font-mono text-[10px] px-2.5 py-1 rounded-full"
                  style={{ color: project.accentColor, background: `${project.accentColor}15`, border: `1px solid ${project.accentColor}25` }}
                >
                  {project.status}
                </span>
                <span className="font-mono text-[10px] text-[#a8b4d0]/60">{project.year}</span>
              </div>

              <h3 className="font-display text-xl md:text-2xl font-700 text-white mb-1">{project.title}</h3>
              <p className="font-body text-sm text-[#a8b4d0] leading-relaxed">{project.tagline}</p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-200"
                >
                  <FiGithub size={14} className="text-[#a8b4d0]" />
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ background: `${project.accentColor}15`, border: `1px solid ${project.accentColor}30` }}
                >
                  <FiExternalLink size={14} style={{ color: project.accentColor }} />
                </a>
              )}
            </div>
          </div>

          {/* Stack preview */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.stack.slice(0, 5).map(s => (
              <StackBadge key={s} label={s} color={stackColor(s)} />
            ))}
            {project.stack.length > 5 && (
              <span className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-white/8 text-[#a8b4d0]/60">
                +{project.stack.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* Expandable case-study */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-8 space-y-6">
                <div className="h-px bg-white/5" />

                {/* Problem → Solution → Role */}
                {[
                  { label: '● Problem', text: project.problem, color: '#f87171' },
                  { label: '● Solution', text: project.solution, color: '#00d4aa' },
                  { label: '● My Role', text: project.role, color: '#a855f7' },
                ].map(({ label, text, color }) => (
                  <div key={label}>
                    <p className="font-mono text-[10px] uppercase tracking-wider mb-2" style={{ color }}>
                      {label}
                    </p>
                    <p className="font-body text-sm text-[#a8b4d0] leading-relaxed">{text}</p>
                  </div>
                ))}

                {/* Highlights */}
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider mb-3" style={{ color: project.accentColor }}>
                    ● Highlights
                  </p>
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.accentColor }} />
                        <span className="font-body text-sm text-[#a8b4d0]">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Full stack */}
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider mb-3" style={{ color: project.accentColor }}>
                    ● Full Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map(s => (
                      <StackBadge key={s} label={s} color={stackColor(s)} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(v => !v)}
          className="w-full flex items-center justify-center gap-2 py-3.5 border-t border-white/5 font-mono text-xs transition-all duration-200 group"
          style={{ color: expanded ? project.accentColor : '#a8b4d0' }}
        >
          {expanded ? (
            <><ChevronUp size={13} /> Collapse case study</>
          ) : (
            <><ChevronDown size={13} /> Read the case study</>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default function FeaturedProjects() {
  return (
    <section className="relative py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.span variants={fadeUp} className="font-mono text-xs text-[#00d4aa] tracking-wider uppercase mb-3 block">
            <span className="section-line" />Featured Work
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-800 text-white mb-3">
            Projects that <span className="grad-teal">shipped</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-[#a8b4d0] max-w-lg text-sm">
            Three builds worth reading about — each solving a real problem, not just a portfolio exercise.
          </motion.p>
        </motion.div>

        {/* Project cards */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-5"
        >
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}