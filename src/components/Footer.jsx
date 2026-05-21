import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Logo from './Logo';

const Footer = () => (
  <footer className="relative mt-24 border-t border-white/5 overflow-hidden">
    {/* Background glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full bg-[#00d4aa]/5 blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <Logo className="w-8 h-auto text-[#00d4aa]" />
          <div>
            <div className="font-display font-700 text-white">SDK<span className="text-[#00d4aa]">Dev</span></div>
            <div className="font-mono text-xs text-[#a8b4d0] mt-0.5">Mbing SDK · Web Developer</div>
          </div>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          {[
            { href: 'https://www.facebook.com/profile.php?id=100063623905826', icon: FaFacebook, color: '#3b82f6' },
            { href: 'https://x.com/mbingsdk',      icon: FaXTwitter,  color: '#e2e8f0' },
            { href: 'https://instagram.com/mbingsdk', icon: FaInstagram, color: '#ec4899' },
            { href: 'https://github.com/mbingsdk',  icon: FaGithub,    color: '#a8b4d0' },
          ].map(({ href, icon: Icon, color }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
              style={{ '--hover-color': color }}
            >
              <Icon className="w-4 h-4 text-[#a8b4d0] hover:text-white transition-colors duration-200" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-body text-xs text-[#a8b4d0] text-center">
          © {new Date().getFullYear()} SDK-Dev. Dibuat dengan ❤️ oleh Mbing SDK
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
