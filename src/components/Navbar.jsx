import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, Search, X } from 'lucide-react';
import Logo from './Logo';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/portfolio', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];
export default function Navbar({ onOpenPalette }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);
  return (
    <nav className="site-nav glass-surface" aria-label="Main navigation">
      <div className="site-nav__inner">
        <Link to="/" className="brand" aria-label="SDK Dev homepage">
          <span className="brand-mark"><Logo /></span>
          <span>SDK<span style={{color:'#777bcc'}}>.</span>Dev<small>Digital craft & engineering</small></span>
        </Link>
        <div className="nav-links">
          {links.map(({to,label,end}) => <NavLink key={to} to={to} end={end} className={({isActive}) => isActive ? 'active' : ''}>{label}</NavLink>)}
        </div>
        <div className="nav-actions">
          <button type="button" className="nav-search" onClick={onOpenPalette} aria-label="Search pages and projects"><Search size={17}/></button>
          <Link className="nav-cta" to="/contact">Let's talk <ArrowUpRight size={15}/></Link>
          <button type="button" className="nav-menu-button" onClick={() => setMenuOpen(open => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation">
            {menuOpen ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
      </div>
      {menuOpen && <div id="mobile-navigation" className="nav-mobile">
        {links.map(({to,label,end}) => <NavLink key={to} to={to} end={end} onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? 'active' : ''}>{label}</NavLink>)}
      </div>}
      <span className="scroll-meter" style={{width: `calc((100% - 24px) * ${progress / 100})`}} aria-hidden="true"/>
    </nav>
  );
}
