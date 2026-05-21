import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFound = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className="min-h-screen flex flex-col justify-center items-center text-center px-4"
  >
    {/* Glow */}
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      <div className="w-96 h-96 rounded-full bg-[#00d4aa]/5 blur-3xl" />
    </div>

    <div className="relative glass rounded-3xl border border-white/8 p-12 md:p-16 max-w-md w-full">
      <div className="font-display text-8xl font-800 grad-teal mb-4">404</div>
      <h2 className="font-display text-xl font-700 text-white mb-3">Halaman Tidak Ditemukan</h2>
      <p className="font-body text-[#a8b4d0] text-sm mb-8">
        Oops! Halaman yang kamu cari tidak ada. Mungkin salah ketik, atau memang tidak ada.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body font-600 text-sm text-[#080d1a] transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #00d4aa, #22d3ee)',
          boxShadow: '0 4px 24px rgba(0,212,170,0.25)',
        }}
      >
        <Home size={15} /> Kembali ke Beranda
      </Link>
    </div>
  </motion.div>
);

export default NotFound;
