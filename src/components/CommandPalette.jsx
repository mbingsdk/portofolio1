import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, User, Briefcase, Image, Mail, Terminal, Github,
  ExternalLink, Copy, Search, Zap, ArrowRight, MessageSquare,
  Code2, Server, Globe, ChevronRight
} from 'lucide-react';

const commands = [
  {
    group: 'Navigate',
    items: [
      { id: 'nav-home',      label: 'Home',          sub: 'Back to the beginning',          icon: Home,       action: 'route', value: '/' },
      { id: 'nav-about',     label: 'About',         sub: 'Who I am & how I got here',      icon: User,       action: 'route', value: '/about' },
      { id: 'nav-portfolio', label: 'Projects',      sub: 'Things I\'ve shipped',            icon: Briefcase,  action: 'route', value: '/portfolio' },
      { id: 'nav-gallery',   label: 'Gallery',       sub: 'Visual collection',              icon: Image,      action: 'route', value: '/gallery' },
      { id: 'nav-contact',   label: 'Contact',       sub: 'Let\'s build something',         icon: Mail,       action: 'route', value: '/contact' },
    ],
  },
  {
    group: 'Quick Actions',
    items: [
      { id: 'act-email',   label: 'Copy Email',       sub: 'mbe@mbingsdk.my.id',             icon: Copy,    action: 'copy',   value: 'mbe@mbingsdk.my.id' },
      { id: 'act-github',  label: 'Open GitHub',      sub: 'github.com/mbingsdk',            icon: Github,  action: 'open',   value: 'https://github.com/mbingsdk' },
      { id: 'act-discord', label: 'Join Discord',     sub: 'Jump into the server',           icon: MessageSquare, action: 'open', value: 'https://discord.gg/Jdqhnyu2dw' },
      { id: 'act-wa',      label: 'WhatsApp Chat',    sub: 'Drop a direct message',          icon: Zap,     action: 'open',   value: 'https://wa.me/message/Y357TXW37QACL1' },
    ],
  },
  {
    group: 'Projects',
    items: [
      { id: 'proj-mikmanager', label: 'Mikrotik Manager', sub: 'Network infra dashboard',  icon: Server, action: 'open', value: 'https://github.com/mbingsdk/mikmanager' },
      { id: 'proj-hjmb',       label: 'Billing Reminder',  sub: 'Accurate + WhatsApp API', icon: Code2,  action: 'open', value: 'https://app.hjmb.cloud' },
      { id: 'proj-sad',        label: 'Admin Desa',        sub: 'Civic tech + AI model',   icon: Globe,  action: 'open', value: 'https://demosad.mbingsdk.my.id' },
      { id: 'proj-hotspot',    label: 'Hotspot System',    sub: 'Mikrotik login + coins',  icon: Terminal, action: 'open', value: 'https://github.com/mbingsdk/sdkdev-hotspot' },
    ],
  },
];

const flatCommands = commands.flatMap(g => g.items);

export default function CommandPalette({ open, onClose }) {
  const [query, setQuery]     = useState('');
  const [active, setActive]   = useState(0);
  const [copied, setCopied]   = useState(false);
  const inputRef  = useRef(null);
  const listRef   = useRef(null);
  const navigate  = useNavigate();

  const filtered = query.trim() === ''
    ? flatCommands
    : flatCommands.filter(c =>
        `${c.label} ${c.sub} ${c.group}`.toLowerCase().includes(query.toLowerCase())
      );

  const execute = useCallback((cmd) => {
    if (!cmd) return;
    if (cmd.action === 'route') { navigate(cmd.value); onClose(); }
    else if (cmd.action === 'open')  { window.open(cmd.value, '_blank'); onClose(); }
    else if (cmd.action === 'copy')  {
      navigator.clipboard.writeText(cmd.value);
      setCopied(true);
      setTimeout(() => { setCopied(false); onClose(); }, 1200);
    }
  }, [navigate, onClose]);

  useEffect(() => {
    if (open) { setQuery(''); setActive(0); setTimeout(() => inputRef.current?.focus(), 50); }
  }, [open]);

  useEffect(() => { setActive(0); }, [query]);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(v => Math.min(v + 1, filtered.length - 1)); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); setActive(v => Math.max(v - 1, 0)); }
      if (e.key === 'Enter')     { e.preventDefault(); execute(filtered[active]); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, filtered, active, execute, onClose]);

  // Scroll active item into view
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${active}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  // Group filtered results
  const grouped = commands.map(g => ({
    ...g,
    items: g.items.filter(item => filtered.includes(item)),
  })).filter(g => g.items.length > 0);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[15vh] left-1/2 -translate-x-1/2 z-[201] w-full max-w-xl px-4"
          >
            <div
              className="rounded-2xl overflow-hidden border border-white/10"
              style={{
                background: 'rgba(8,13,26,0.95)',
                backdropFilter: 'blur(32px)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,212,170,0.08), 0 0 60px rgba(0,212,170,0.05)',
              }}
            >
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/6">
                <Search size={16} className="text-[#00d4aa] flex-shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search commands, pages, projects…"
                  className="flex-1 bg-transparent font-body text-sm text-white placeholder:text-[#a8b4d0]/50 outline-none"
                />
                <kbd className="font-mono text-[10px] text-[#a8b4d0]/60 bg-white/5 border border-white/8 rounded px-1.5 py-0.5 hidden sm:block">ESC</kbd>
              </div>

              {/* Results */}
              <div ref={listRef} className="max-h-[52vh] overflow-y-auto py-2">
                {filtered.length === 0 ? (
                  <div className="px-4 py-8 text-center">
                    <p className="font-mono text-xs text-[#a8b4d0]/50">No results for "{query}"</p>
                  </div>
                ) : (
                  grouped.map((group) => (
                    <div key={group.group}>
                      <p className="font-mono text-[10px] text-[#a8b4d0]/50 uppercase tracking-widest px-4 py-2">
                        {group.group}
                      </p>
                      {group.items.map((cmd) => {
                        const globalIdx = filtered.indexOf(cmd);
                        const Icon = cmd.icon;
                        const isActive = globalIdx === active;
                        return (
                          <button
                            key={cmd.id}
                            data-idx={globalIdx}
                            onClick={() => execute(cmd)}
                            onMouseEnter={() => setActive(globalIdx)}
                            className="w-full flex items-center gap-3 px-4 py-2.5 transition-colors duration-100 text-left group"
                            style={{
                              background: isActive ? 'rgba(0,212,170,0.06)' : 'transparent',
                              borderLeft: isActive ? '2px solid #00d4aa' : '2px solid transparent',
                            }}
                          >
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-100"
                              style={{
                                background: isActive ? 'rgba(0,212,170,0.12)' : 'rgba(255,255,255,0.04)',
                                border: `1px solid ${isActive ? 'rgba(0,212,170,0.3)' : 'rgba(255,255,255,0.06)'}`,
                              }}
                            >
                              <Icon size={14} style={{ color: isActive ? '#00d4aa' : '#a8b4d0' }} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-body text-sm text-white truncate">{cmd.label}</p>
                              <p className="font-mono text-[10px] text-[#a8b4d0]/60 truncate">{cmd.sub}</p>
                            </div>
                            {isActive && (
                              <ChevronRight size={13} className="text-[#00d4aa] flex-shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/6">
                <p className="font-mono text-[10px] text-[#a8b4d0]/40">
                  {copied ? '✓ Copied to clipboard!' : `${filtered.length} command${filtered.length !== 1 ? 's' : ''}`}
                </p>
                <div className="hidden sm:flex items-center gap-3 font-mono text-[10px] text-[#a8b4d0]/40">
                  <span><kbd className="bg-white/5 border border-white/8 rounded px-1 py-0.5">↑↓</kbd> navigate</span>
                  <span><kbd className="bg-white/5 border border-white/8 rounded px-1 py-0.5">↵</kbd> select</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}