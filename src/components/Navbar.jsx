import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const links = [
  { to: '/',          label: 'Home' },
  { to: '/about',     label: 'About' },
  { to: '/portfolio', label: 'Projects' },
  { to: '/gallery',   label: 'Gallery' },
  { to: '/contact',   label: 'Contact' },
];

// const Navbar = ({ darkMode, setDarkMode }) => {
const Navbar = ({ darkMode }) => {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const st = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(st > 20);
      setScrollPct(docH > 0 ? (st / docH) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        // style={{ width: `${scrollPct}%` }}
        className="fixed top-0 left-0 h-[2px] z-[9999] transition-all duration-100"
        style={{
          width: `${scrollPct}%`,
          background: 'linear-gradient(90deg, #00d4aa, #7c3aed)',
        }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-xl bg-[rgba(8,13,26,0.85)] border-b border-white/5 shadow-lg shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <Logo className="w-8 h-auto text-[#00d4aa] group-hover:text-[#22d3ee] transition-colors duration-300" />
              <span className="absolute -inset-1 rounded-full bg-[#00d4aa]/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
            </div>
            <span className="font-display font-700 text-lg text-white tracking-tight">
              SDK<span className="text-[#00d4aa]">Dev</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-4 py-2 rounded-lg font-body text-sm font-medium transition-colors duration-200 ${
                    active
                      ? 'text-[#00d4aa]'
                      : 'text-[#a8b4d0] hover:text-white'
                  }`}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-4 right-4 h-[1px] bg-[#00d4aa] rounded-full"
                    />
                  )}
                </Link>
              );
            })}

            {/* Theme toggle */}
            {/* <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-3 p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#00d4aa]/30 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {darkMode
                ? <Sun className="w-4 h-4 text-yellow-400" />
                : <Moon className="w-4 h-4 text-[#a8b4d0]" />
              }
            </button> */}
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            {/* <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border border-white/10 bg-white/5"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-[#a8b4d0]" />}
            </button> */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="p-2 rounded-lg border border-white/10 bg-white/5"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden backdrop-blur-xl bg-[rgba(8,13,26,0.95)] border-t border-white/5"
            >
              <div className="flex flex-col py-4 px-4 gap-1">
                {links.map(({ to, label }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to={to}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                        location.pathname === to
                          ? 'text-[#00d4aa] bg-[#00d4aa]/10'
                          : 'text-[#a8b4d0] hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
