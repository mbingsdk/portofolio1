import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaDiscord, FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Send, X } from 'lucide-react';
import { fadeUp, staggerContainer, scaleIn } from '../lib/motionVariants';

const socialLinks = [
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    link: 'https://wa.me/message/Y357TXW37QACL1',
    color: '#25d366',
    sub: 'Chat langsung',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    link: 'https://instagram.com/mbingsdk',
    color: '#e1306c',
    sub: '@mbingsdk',
  },
  {
    name: 'X / Twitter',
    icon: FaXTwitter,
    link: 'https://x.com/mbingsdk',
    color: '#e2e8f0',
    sub: '@mbingsdk',
  },
  {
    name: 'Facebook',
    icon: FaFacebook,
    link: 'https://www.facebook.com/profile.php?id=100063623905826',
    color: '#1877f2',
    sub: 'Mbing SDK',
  },
  {
    name: 'Discord',
    icon: FaDiscord,
    link: '/#/discord',
    internal: true,
    color: '#5865f2',
    sub: 'Join server',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    link: 'https://github.com/mbingsdk',
    color: '#f0f6fc',
    sub: 'mbingsdk',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    link: 'https://linkedin.com',
    color: '#0a66c2',
    sub: 'Professional',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    link: null,
    color: '#f87171',
    sub: 'mbe@mbingsdk.my.id',
    isEmail: true,
  },
];

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm]         = useState({ name: '', email: '', message: '' });
  const [sent, setSent]         = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // mailto fallback
    const subject = encodeURIComponent(`Pesan dari ${form.name}`);
    const body = encodeURIComponent(`Nama: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:mbe@mbingsdk.my.id?subject=${subject}&body=${body}`, '_blank');
    setSent(true);
    setTimeout(() => { setSent(false); setShowForm(false); setForm({ name: '', email: '', message: '' }); }, 3000);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-64 rounded-full bg-[#00d4aa]/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#7c3aed]/6 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <motion.span variants={fadeUp} className="font-mono text-xs text-[#00d4aa] tracking-wider uppercase mb-3 block">
            <span className="section-line" />Hubungi saya
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-800 text-white mb-3">
            Buset, <span className="grad-teal">Kepo!</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-[#a8b4d0] max-w-lg mx-auto text-sm">
            Ada proyek menarik? Ingin kolaborasi? Atau sekedar ngobrol? Let's connect!
          </motion.p>
        </motion.div>

        {/* Social grid */}
        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8"
        >
          {socialLinks.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={i}
                variants={scaleIn}
                href={s.isEmail ? '#' : s.link}
                target={s.internal || s.isEmail ? '_self' : '_blank'}
                rel="noopener noreferrer"
                onClick={s.isEmail ? (e) => { e.preventDefault(); setShowForm(v => !v); } : undefined}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.96 }}
                className="relative group glass rounded-2xl p-5 border border-white/8 flex flex-col items-center gap-3 cursor-pointer overflow-hidden"
                style={{ '--c': s.color }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{ background: `radial-gradient(circle at center, ${s.color}12 0%, transparent 70%)` }}
                />
                <div
                  className="relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
                >
                  <Icon style={{ color: s.color, fontSize: 18 }} />
                </div>
                <div className="text-center relative z-10">
                  <div className="font-display font-600 text-white text-sm group-hover:text-white transition-colors">{s.name}</div>
                  <div className="font-mono text-[10px] text-[#a8b4d0] mt-0.5 truncate max-w-[100px]">{s.sub}</div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Email form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl mx-auto"
            >
              <div className="glass rounded-2xl border border-white/8 p-6 relative">
                {/* Close */}
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute top-4 right-4 w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-200"
                >
                  <X size={13} className="text-[#a8b4d0]" />
                </button>

                <h3 className="font-display font-700 text-white text-lg mb-5">
                  Kirim <span className="grad-teal">Pesan</span>
                </h3>

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="text-4xl mb-3">✅</div>
                    <p className="font-body text-[#00d4aa] font-500">Pesan disiapkan! Cek email client Anda.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { name: 'name',    label: 'Nama',   type: 'text',  ph: 'John Doe' },
                      { name: 'email',   label: 'Email',  type: 'email', ph: 'john@example.com' },
                    ].map(({ name, label, type, ph }) => (
                      <div key={name}>
                        <label className="block font-mono text-xs text-[#a8b4d0] mb-1.5">{label}</label>
                        <input
                          type={type}
                          required
                          placeholder={ph}
                          value={form[name]}
                          onChange={e => setForm(f => ({ ...f, [name]: e.target.value }))}
                          className="w-full font-body text-sm text-white bg-white/5 border border-white/10 focus:border-[#00d4aa]/40 rounded-xl px-4 py-2.5 outline-none transition-colors duration-200 placeholder:text-[#a8b4d0]/40"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block font-mono text-xs text-[#a8b4d0] mb-1.5">Pesan</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Halo! Saya ingin..."
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        className="w-full font-body text-sm text-white bg-white/5 border border-white/10 focus:border-[#00d4aa]/40 rounded-xl px-4 py-2.5 outline-none transition-colors duration-200 placeholder:text-[#a8b4d0]/40 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-body font-600 text-sm text-[#080d1a] transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, #00d4aa, #22d3ee)',
                        boxShadow: '0 4px 24px rgba(0,212,170,0.2)',
                      }}
                    >
                      <Send size={14} /> Kirim via Email
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-3">
            <p className="font-mono text-xs text-[#a8b4d0] tracking-wider">DIRECT EMAIL</p>
            <a
              href="mailto:mbe@mbingsdk.my.id"
              className="font-display text-xl font-700 grad-teal hover:opacity-80 transition-opacity duration-200"
            >
              mbe@mbingsdk.my.id
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
