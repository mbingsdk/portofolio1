import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Instagram, Mail } from 'lucide-react';
import Logo from './Logo';
export default function Footer() { return <footer className="site-footer"><div className="container-wide">
 <div className="footer-grid"><div><Link to="/" className="brand"><span className="brand-mark"><Logo/></span><span>SDK<span style={{color:'#777bcc'}}>.</span>Dev<small>Digital craft & engineering</small></span></Link><p className="footer-copy">Independent full-stack developer building considered digital experiences and reliable systems, from Indonesia.</p></div>
 <div style={{display:'grid',gap:20,justifyItems:'end'}}><div className="footer-links"><Link to="/portfolio">Projects</Link><a href="/jasa-pembuatan-aplikasi/">Jasa Aplikasi</a><Link to="/about">About</Link><Link to="/gallery">Gallery</Link><Link to="/contact">Contact</Link></div><div className="footer-links"><a href="https://github.com/mbingsdk" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={19}/></a><a href="https://instagram.com/mbingsdk" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={19}/></a><a href="mailto:mbe@mbingsdk.my.id" aria-label="Email"><Mail size={19}/></a></div></div></div>
 <div className="footer-bottom"><span>© {new Date().getFullYear()} Mbing SDK. Made with intention.</span><span>Made in Indonesia · <a href="https://github.com/mbingsdk" target="_blank" rel="noopener noreferrer">See the code <ArrowUpRight size={12} style={{display:'inline'}}/></a></span></div>
 </div></footer>; }
