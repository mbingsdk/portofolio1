import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { fadeUp, staggerContainer, scaleIn } from '../lib/motionVariants';

/* ─── Tilt Card ───────────────────────────────────── */
const TiltCard = ({ children, className = '' }) => {
  const ref = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = ((centerY - y) / centerY) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
    card.style.transition = 'transform 0.1s ease-out';
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)';
    card.style.transition = 'transform 0.5s ease';
  }, []);

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

/* ─── Tech badge colours ──────────────────────────── */
const techColor = (tech) => {
  const map = {
    React: '#00d4aa', 'Next.js': '#e2e8f0', Node: '#6ee7b7',
    Python: '#facc15', PHP: '#818cf8', Go: '#60a5fa',
    Mikrotik: '#f87171', WhatsApp: '#4ade80', Discord: '#818cf8',
    Flutter: '#38bdf8', PostgreSQL: '#93c5fd', MongoDB: '#6ee7b7',
    Flask: '#d4d4d4', Django: '#a3e635', Tailwind: '#22d3ee',
    CNN: '#f472b6', OCR: '#fb923c', AI: '#a78bfa',
  };
  for (const k of Object.keys(map)) {
    if (tech.toLowerCase().includes(k.toLowerCase())) return map[k];
  }
  return '#a8b4d0';
};

/* ─── Infer tech tags from description ────────────── */
const inferTech = (title, desc) => {
  const text = `${title} ${desc}`.toLowerCase();
  const tags = [];
  if (text.includes('react'))    tags.push('React');
  if (text.includes('next'))     tags.push('Next.js');
  if (text.includes('flutter') || text.includes('mobile')) tags.push('Flutter');
  if (text.includes('whatsapp')) tags.push('WhatsApp');
  if (text.includes('discord'))  tags.push('Discord');
  if (text.includes('mikrotik') || text.includes('hotspot') || text.includes('pppoe')) tags.push('Mikrotik');
  if (text.includes('python') || text.includes('flask')) tags.push('Python');
  if (text.includes('php') || text.includes('codeigniter')) tags.push('PHP');
  if (text.includes('node') || text.includes('bot')) tags.push('Node.js');
  if (text.includes('postgresql') || text.includes('database')) tags.push('PostgreSQL');
  if (text.includes('cnn') || text.includes('ocr') || text.includes('ai')) tags.push('AI/ML');
  if (text.includes('golang') || text.includes('go')) tags.push('Go');
  if (text.includes('tailwind')) tags.push('Tailwind');
  if (text.includes('payment') || text.includes('gateway')) tags.push('Payment');
  return tags.slice(0, 4);
};

/* ─── Project card ────────────────────────────────── */
const ProjectCard = ({ project, i }) => {
  const tech = inferTech(project.title, project.description);
  const isGH = project.link?.includes('github.com');

  return (
    <motion.div
      variants={scaleIn}
      custom={i}
    >
      <TiltCard>
        <div className="relative rounded-2xl overflow-hidden glass border border-white/8 hover:border-[#00d4aa]/20 transition-all duration-300 group shimmer h-full flex flex-col">

          {/* Image area */}
          <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#0d1530] to-[#111d3c]">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                loading="lazy"
              />
            ) : (
              /* Placeholder */
              <div className="w-full h-full flex items-center justify-center">
                <div className="font-mono text-[#00d4aa]/20 text-5xl font-700">
                  {project.title.slice(0, 2).toUpperCase()}
                </div>
              </div>
            )}
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-1 gap-3">
            <h3 className="font-display font-700 text-white text-base leading-tight group-hover:text-[#00d4aa] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="font-body text-[#a8b4d0] text-xs leading-relaxed flex-1">
              {project.description}
            </p>

            {/* Tech badges */}
            {tech.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {tech.map(t => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2 py-0.5 rounded-full border"
                    style={{
                      color: techColor(t),
                      borderColor: `${techColor(t)}30`,
                      background: `${techColor(t)}10`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Actions */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono mt-1 transition-colors duration-200"
                style={{ color: '#00d4aa' }}
                onMouseEnter={e => e.currentTarget.style.color = '#22d3ee'}
                onMouseLeave={e => e.currentTarget.style.color = '#00d4aa'}
              >
                {isGH ? <FiGithub size={12} /> : <FiExternalLink size={12} />}
                {isGH ? 'View on GitHub' : 'View Project'}
              </a>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};

/* ─── Portfolio page ──────────────────────────────── */
const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    fetch('/projects.json')
      .then(r => r.json())
      .then(data => { setProjects(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-72 h-72 rounded-full bg-[#7c3aed]/6 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-[#00d4aa]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <motion.span variants={fadeUp} className="font-mono text-xs text-[#00d4aa] tracking-wider uppercase mb-3 block">
            <span className="section-line" />What I've built
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-800 text-white mb-3">
            My <span className="grad-teal">Projects</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-[#a8b4d0] max-w-xl mx-auto text-sm">
            Kumpulan proyek dari eksperimen digital, web app, hingga sistem jaringan. Semua dibangun dengan rasa penasaran tinggi.
          </motion.p>
        </motion.div>

        {/* Grid */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl glass border border-white/5 h-72 animate-pulse" />
            ))}
          </div>
        ) : (
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} i={i} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
