// src/App.jsx
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './animations/ScrollToTop';
import Discord from './pages/Discord';
import NotFound from './pages/NotFound';
import CommandPalette from './components/CommandPalette';

function AppInner() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen(v => !v);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />

      <div className="min-h-screen" style={{ background: '#080d1a', color: '#f0f4ff' }}>
        <Navbar darkMode={true} onOpenPalette={() => setPaletteOpen(true)} />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/"          element={<Home />} />
            <Route path="/about"     element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/gallery"   element={<Gallery />} />
            <Route path="/contact"   element={<Contact />} />
            <Route path="/discord"   element={<Discord />} />
            <Route path="*"          element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  const [isDark, setDarkMode] = useState(true);

  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.style.background = '#080d1a';
  }, []);

  // Cursor glow (desktop only, respects reduced motion)
  useEffect(() => {
    const el = document.getElementById('cursor-glow');
    if (!el) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;
    const move = (e) => {
      el.style.left = `${e.clientX}px`;
      el.style.top  = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <Router>
      <div id="cursor-glow" className="hidden md:block" />
      <AppInner />
    </Router>
  );
}

export default App;