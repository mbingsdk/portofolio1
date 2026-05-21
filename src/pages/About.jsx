import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, scaleIn, slideIn } from '../lib/motionVariants';
import { FaGraduationCap, FaShoppingCart, FaRobot, FaPaintBrush } from 'react-icons/fa';
import { MapPin, Mail, Link as LinkIcon, Code2, Palette, Server, Wrench } from 'lucide-react';
import Logo from '../components/Logo';

/* ─── Section Heading ─────────────────────────────── */
const SectionHeading = ({ label, title, sub }) => (
  <motion.div variants={fadeUp} className="mb-12 text-center">
    <span className="font-mono text-xs text-[#00d4aa] tracking-wider uppercase mb-3 block">
      <span className="section-line" />{label}
    </span>
    <h2 className="font-display text-3xl md:text-4xl font-800 text-white mb-3">{title}</h2>
    {sub && <p className="font-body text-[#a8b4d0] max-w-xl mx-auto">{sub}</p>}
  </motion.div>
);

/* ─── Skills grouped ──────────────────────────────── */
const skillGroups = [
  {
    icon: Code2,
    label: 'Frontend',
    color: '#00d4aa',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Figma'],
  },
  {
    icon: Server,
    label: 'Backend',
    color: '#7c3aed',
    items: ['Node.js', 'Express', 'Flask', 'Django', 'Golang', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: Wrench,
    label: 'Tools & Infra',
    color: '#22d3ee',
    items: ['Mikrotik', 'RouterOS-API', 'Linux', 'Firewall', 'DNS', 'Socket IO', 'Docker'],
  },
  {
    icon: Palette,
    label: 'Design',
    color: '#a855f7',
    items: ['Photoshop', 'Illustrator', 'Figma', 'Mimetic UI', 'Motion Design'],
  },
];

/* ─── Timeline data ───────────────────────────────── */
const timeline = [
  { year: '2025', icon: FaPaintBrush, color: '#00d4aa', text: 'Freelance: Aplikasi Toko Web (Store App) + AI Model' },
  { year: '2024', icon: FaRobot,      color: '#7c3aed', text: 'Manufacturing Factory: Bot WhatsApp + Accurate API Integration' },
  { year: '2023', icon: FaShoppingCart,color: '#22d3ee',text: 'UI Designer: Sistem Inventory Mini & Mikrotik Hotspot Dashboard' },
  { year: '2021', icon: FaRobot,      color: '#a855f7', text: 'Eksperimen AI untuk keperluan interaktif & chatbot' },
  { year: '2019', icon: FaShoppingCart,color: '#00d4aa',text: 'Mulai proyek aplikasi toko web, bot WhatsApp, Line, Discord, dll.' },
  { year: '2017', icon: FaPaintBrush, color: '#7c3aed', text: 'Belajar desain mimetic & UI kreatif untuk mobile' },
  { year: '2014', icon: FaGraduationCap, color: '#22d3ee', text: 'Lulus SMKN 1 Enrekang' },
];

const About = () => (
  <div className="relative min-h-screen pt-24 pb-20 overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-[#00d4aa]/5 blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 rounded-full bg-[#7c3aed]/6 blur-3xl" />
    </div>

    <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">

      {/* ── Heading ── */}
      <motion.div
        variants={staggerContainer(0.1, 0)}
        initial="hidden" whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading label="Who I am" title="Tentang Saya" />
      </motion.div>

      {/* ── Profile card + intro ── */}
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden" whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-3 gap-6 mb-12"
      >
        {/* Profile card */}
        <motion.div
          variants={fadeLeft}
          className="relative rounded-2xl p-6 overflow-hidden glass glass-hover grad-border flex flex-col items-center text-center gap-4"
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00d4aa]/20 to-[#7c3aed]/20 border border-white/10 flex items-center justify-center">
              <Logo className="w-12 h-auto text-[#00d4aa]" />
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#00d4aa] border-2 border-[#080d1a]" />
          </div>
          <div>
            <h3 className="font-display font-700 text-white text-lg">Mbing SDK</h3>
            <p className="font-mono text-xs text-[#00d4aa] mt-1">Full-Stack Developer</p>
          </div>
          <div className="w-full border-t border-white/5 pt-4 space-y-2 text-left">
            {[
              { icon: MapPin,    text: 'Enrekang, Sulawesi Selatan' },
              { icon: Mail,      text: 'mbe@mbingsdk.my.id' },
              { icon: LinkIcon,  text: 'mbingsdk.my.id' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-xs text-[#a8b4d0]">
                <Icon size={11} className="text-[#00d4aa] flex-shrink-0" />
                <span className="font-mono truncate">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Intro text */}
        <motion.div variants={fadeUp} className="md:col-span-2 space-y-4">
          {[
            'Halo! Saya seorang Web Developer yang suka Digital Eksperiment untuk hal-hal yang menarik, interaktif, dan estetis.',
            'Saya tertarik dengan desain mimetic — pendekatan yang mengadaptasi elemen dunia nyata seperti tekstur, bayangan, dan kedalaman, sambil tetap mempertahankan responsivitas dan kesan modern.',
            'Saat ini mengembangkan beberapa proyek pribadi: aplikasi toko berbasis web, sistem chatbot untuk WhatsApp, UI kreatif untuk pengguna mobile, dan berbagai eksperimen AI.',
            'Di waktu luang, saya mengeksplorasi musik fingerstyle dan mendalami teknologi AI untuk meningkatkan produktivitas dan kreativitas.',
          ].map((p, i) => (
            <motion.p
              key={i}
              variants={slideIn('right', i * 0.08)}
              className="font-body text-[#a8b4d0] leading-relaxed text-sm"
            >
              {p}
            </motion.p>
          ))}

          {/* Stats */}
          <motion.div variants={staggerContainer(0.1)} className="grid grid-cols-4 gap-3 pt-4">
            {[
              { v: '13+', l: 'Projects' },
              { v: '22+', l: 'Tech Stack' },
              { v: '3+',  l: 'Years' },
              { v: '∞',   l: 'Experiments' },
            ].map(({ v, l }) => (
              <motion.div
                key={l}
                variants={scaleIn}
                className="glass rounded-xl p-3 text-center border border-white/5 hover:border-[#00d4aa]/20 transition-colors duration-300"
              >
                <div className="font-display text-xl font-700 grad-teal">{v}</div>
                <div className="font-mono text-[10px] text-[#a8b4d0] mt-0.5">{l}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Skills ── */}
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden" whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-14"
      >
        <motion.h3 variants={fadeUp} className="font-display text-2xl font-700 text-white mb-6">
          <span className="section-line" />Tech Stack
        </motion.h3>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {skillGroups.map(({ icon: Icon, label, color, items }) => (
            <motion.div
              key={label}
              variants={scaleIn}
              className="glass glass-hover rounded-2xl p-5 border border-white/5 group"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon size={14} style={{ color }} />
                </div>
                <span className="font-display font-600 text-sm text-white">{label}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {items.map(skill => (
                  <span
                    key={skill}
                    className="font-mono text-[10px] px-2 py-1 rounded-full border"
                    style={{
                      color: `${color}cc`,
                      borderColor: `${color}20`,
                      background: `${color}08`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Timeline ── */}
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden" whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h3 variants={fadeUp} className="font-display text-2xl font-700 text-white mb-8">
          <span className="section-line" />Journey
        </motion.h3>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4aa]/40 via-[#7c3aed]/30 to-transparent" />

          <div className="space-y-6">
            {timeline.map(({ year, icon: Icon, color, text }, i) => (
              <motion.div
                key={i}
                variants={slideIn('left', i * 0.08)}
                className="relative flex items-start gap-6 pl-4"
              >
                {/* Node */}
                <div
                  className="relative flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center z-10"
                  style={{ background: `${color}15`, border: `1px solid ${color}40` }}
                >
                  <Icon size={13} style={{ color }} />
                </div>

                {/* Card */}
                <div className="flex-1 glass rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors duration-300 group">
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="font-mono text-xs font-500 px-2 py-0.5 rounded-full"
                      style={{ color, background: `${color}15` }}
                    >
                      {year}
                    </span>
                  </div>
                  <p className="font-body text-sm text-[#a8b4d0] group-hover:text-white/80 transition-colors duration-300">
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default About;
