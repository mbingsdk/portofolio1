import React from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, BadgeCheck, Box, ChevronUp, Code2, Database, Layers3, MousePointer2, MoveUpRight, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import FeaturedProjects from '../components/FeaturedProjects';

const services = [
  { no:'01', icon:Layers3, title:'Web apps & platforms', description:'Aplikasi custom, dashboard, sistem operasional, hingga platform commerce untuk bisnis.' },
  { no:'02', icon:Workflow, title:'Workflow automation', description:'Integrasi WhatsApp, API pihak ketiga, dan alur kerja repetitif yang bisa disederhanakan.' },
  { no:'03', icon:Database, title:'Backend & integrations', description:'Arsitektur, database, API, serta sistem yang stabil dari depan sampai belakang.' },
  { no:'04', icon:Code2, title:'Infrastructure & tools', description:'Network management, Mikrotik, internal tooling, dan eksperimen teknis yang bermanfaat.' },
];

function GlassSculpture() {
 return <div className="hero-visual" aria-label="Abstract translucent interface composition">
  <div className="prism-ring" aria-hidden="true"/>
  <div className="prism-blob prism-blob--one" aria-hidden="true"/>
  <div className="prism-blob prism-blob--two" aria-hidden="true"/>
  <div className="showcase">
   <div className="showcase-top"><div className="showcase-dots"><i/><i/><i/></div><span className="showcase-label">studio / sdk.dev</span><MoveUpRight size={16} color="#a4a5ce"/></div>
   <div className="showcase-body"><span className="eyebrow">Currently making</span><strong>Ideas into<br/><span>interfaces.</span></strong><p>Thoughtful software, built with a curious mind and an engineering backbone.</p></div>
   <div className="showcase-tags"><span>React</span><span>Next.js</span><span>Automation</span></div>
  </div>
  <div className="float-note float-note--left glass-surface"><div className="float-icon"><Box size={18}/></div><div><small>From concept</small><b>To production</b></div></div>
  <div className="float-note float-note--right glass-surface"><div className="float-icon"><BadgeCheck size={18}/></div><div><small>Approach</small><b>Build with purpose</b></div></div>
 </div>;
}
const process = [
  ['01 / Discover','Understand the problem','Pahami kebutuhan dan alur kerja yang ingin diperbaiki.'],
  ['02 / Design','Shape the solution','Susun alur, pengalaman pengguna, dan fondasi sistem.'],
  ['03 / Build','Make it real','Implementasi, pengujian, dan peluncuran yang siap digunakan.'],
];
export default function Home() {
 const reduced = useReducedMotion();
 const reveal = reduced ? {} : { initial:{opacity:0,y:20}, whileInView:{opacity:1,y:0}, viewport:{once:true,amount:.1}, transition:{duration:.55} };
 return <>
  <section className="hero"><div className="container-wide hero-grid">
   <motion.div className="hero-intro" initial={reduced ? false : {opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.65}}>
    <div className="eyebrow">Independent developer · Indonesia</div>
    <h1 className="hero-title">Building<br/><span className="soft">things that</span><span className="color iris-text">make sense.</span></h1>
    <p className="body-lead hero-desc">Halo, saya Mbing SDK. Saya merancang dan membangun aplikasi, automasi, dan sistem digital yang menyelesaikan masalah nyata.</p>
    <div className="hero-actions"><Link to="/portfolio" className="btn btn-primary">Explore my work <ArrowUpRight size={16}/></Link><Link to="/contact" className="btn btn-glass">Let's collaborate <ArrowRight size={16}/></Link></div>
    <div className="hero-footnote"><span className="online-dot"/>Available for select projects <span style={{opacity:.48}}>·</span> Scroll to explore <ArrowDownRight size={14}/></div>
   </motion.div>
   <GlassSculpture/>
  </div></section>
  <div className="marquee-line"><div className="container-wide marquee-inner"><span>Frontend & backend</span><span>Custom applications</span><span>API integration</span><span>Creative engineering</span><span>Go · Kotlin · Dart</span></div></div>
  <FeaturedProjects/>
  <section className="section-space"><div className="container-wide capabilities">
   <motion.div {...reveal} className="capability-intro"><span className="eyebrow">What I do</span><h2 className="display-md" style={{margin:'20px 0'}}>Complex in the back.<br/><span className="iris-text">Simple in your hands.</span></h2><p className="body-lead">Bukan sekadar tampilan bagus. Saya senang merancang sistem yang masuk akal, mudah dipakai, dan benar-benar membantu pekerjaan.</p><Link to="/about" className="pill-link">More about my approach <ArrowUpRight size={17}/></Link></motion.div>
   <div className="capability-list">{services.map(({no,icon:Icon,title,description},i)=><motion.article key={no} {...reveal} transition={{duration:.5,delay:i*.06}} className="glass-surface glass-hover capability-card"><div className="capability-number"><span>{no} / SERVICE</span><Icon size={20} color="#8a8cba"/></div><h3>{title}</h3><p>{description}</p></motion.article>)}</div>
  </div></section>
  <section className="section-space" style={{paddingTop:0}}><div className="container-wide glass-surface process-panel">
   <div className="section-header"><div><span className="eyebrow">The approach</span><h2 className="display-md">Thoughtful from<br/><span className="iris-text">start to ship.</span></h2></div><p>Setiap proyek berbeda. Prosesnya tetap berangkat dari masalah, bukan daftar fitur acak.</p></div>
   <div className="process-steps">{process.map(([id,title,desc])=><div className="process-step" key={id}><b>{id}</b><h3>{title}</h3><p>{desc}</p></div>)}</div>
  </div></section>
  <section className="container-wide" style={{paddingBottom:'30px'}}><div className="cta-panel">
    <div><span className="eyebrow">Have a project in mind?</span><h2 className="display-md">Let's make your next<br/><span className="iris-text">idea tangible.</span></h2><p>Punya ide aplikasi atau sistem bisnis? Ceritakan kebutuhannya. Kita mulai dari percakapan sederhana.</p></div>
    <Link className="btn btn-primary" to="/contact" style={{whiteSpace:'nowrap'}}>Start a conversation <ArrowUpRight size={17}/></Link>
  </div></section>
 </>;
}
