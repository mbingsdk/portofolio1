import React from 'react';
import { ArrowUpRight, Code2, Database, Network, Palette, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
const groups=[
 {title:'Interface & frontend',icon:Code2,items:['React','Next.js','JavaScript','Tailwind CSS','TypeScript','Motion']},
 {title:'Backend & data',icon:Database,items:['Node.js','Express','PostgreSQL','Prisma','Python','FastAPI']},
 {title:'Automation & infrastructure',icon:Network,items:['RouterOS API','Mikrotik','WhatsApp Cloud API','Linux','Docker','Nginx','REST API']},
 {title:'Design & exploration',icon:Palette,items:['UI systems','Figma','Design experiments','Prototyping','AI integrations']},
];
const journey=[
 ['2025','Freelance pengembangan aplikasi toko dan eksperimen integrasi AI.'],
 ['2024','Membangun automasi WhatsApp yang terhubung dengan API Accurate untuk kebutuhan bisnis.'],
 ['2023','Mengerjakan UI sistem inventori dan dashboard Mikrotik.'],
 ['2021','Eksperimen AI, chatbot, dan antarmuka interaktif.'],
 ['2019','Memulai pengembangan aplikasi toko, bot WhatsApp, Line, dan Discord.'],
 ['2017','Mempelajari desain antarmuka, kedalaman visual, dan pengalaman pengguna.'],
 ['2014','Lulus SMKN 1 Enrekang.'],
];
export default function About(){return <>
 <section className="container-wide" style={{paddingTop:175}}>
  <div className="about-intro">
   <div className="about-symbol glass-surface"><div className="about-symbol__orb"><Logo/></div><div className="about-symbol__caption"><span>MBING SDK / DEVELOPER</span><span>INDONESIA ↗</span></div></div>
   <div><span className="eyebrow">A little about me</span><h1 className="display-lg" style={{margin:'22px 0'}}>Curious by nature.<br/><span className="iris-text">Builder by choice.</span></h1><p className="body-lead">Halo! Saya Mbing SDK, full-stack developer yang tertarik pada produk digital yang fungsional, desain yang terasa hidup, dan eksperimen teknologi.</p><p className="body-lead" style={{fontSize:15,marginTop:18}}>Saya mengerjakan web application, automasi sistem, integrasi API, dan infrastruktur jaringan. Saya suka mempertemukan kebutuhan nyata dengan solusi yang sederhana untuk digunakan.</p><div className="about-facts"><span><MapPin size={12} style={{display:'inline',verticalAlign:'middle'}}/> Enrekang, Indonesia</span><span>Full-stack development</span><span>Creative engineering</span></div><Link to="/contact" className="btn btn-primary" style={{marginTop:30}}>Work with me <ArrowUpRight size={16}/></Link></div>
  </div>
 </section>
 <section className="section-space container-wide"><div className="section-header"><div><span className="eyebrow">My toolkit</span><h2 className="display-md">Different tools.<br/><span className="iris-text">One connected vision.</span></h2></div><p>Teknologi yang saya gunakan untuk merancang sistem dari pengalaman pengguna sampai backend-nya.</p></div><div className="about-skills">{groups.map(({title,icon:Icon,items})=><article className="skill-section glass-surface glass-hover" key={title}><Icon size={22} color="#8587c9"/><h3>{title}</h3><div className="skill-tags">{items.map(item=><span key={item}>{item}</span>)}</div></article>)}</div></section>
 <section className="section-space container-wide" style={{paddingTop:0}}><div className="journey"><div><span className="eyebrow">The timeline</span><h2 className="display-md" style={{margin:'22px 0'}}>Always<br/><span className="iris-text">learning.</span></h2></div><div>{journey.map(([year,desc])=><div className="journey-row" key={year}><b>{year}</b><p>{desc}</p></div>)}</div></div></section>
 </>}
