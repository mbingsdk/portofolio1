import React from 'react';
import { ArrowUpRight, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
const works = [
 {name:'Punti.id',category:'Commerce platform',kind:'commerce',title:'Commerce made for local businesses.',description:'Storefront, checkout, inventori, order management, dan sistem untuk mendukung kegiatan UMKM.',link:'https://punti.id/',label:'LIVE PROJECT'},
 {name:'Koperasi Ledger',category:'Operations / Fintech',kind:'cooperative',title:'Making cooperative operations clearer.',description:'Buku kas digital untuk pengelolaan anggota, iuran, pinjaman, dan laporan koperasi.',link:'https://kopjen.sdkdev.net/',label:'LIVE PROJECT'},
 {name:'Yurra Production',category:'Web & Community',kind:'community',title:'A home for stories and communities.',description:'Community website dengan blog, tautan permainan, arsip moderasi publik, dan owner dashboard.',link:'https://imyurra.com/',label:'LIVE PROJECT'},
];
export default function FeaturedProjects() {
 const reduced=useReducedMotion();
 return <section className="section-space" id="featured-work"><div className="container-wide">
  <div className="work-lead"><div><span className="eyebrow">01 / Selected work</span><h2 className="display-md" style={{margin:'18px 0 0'}}>Ideas, thoughtfully<br/><span className="iris-text">brought to life.</span></h2></div><p className="body-lead">Beberapa proyek yang dibangun untuk kebutuhan berbeda, dari platform commerce sampai pengelolaan operasional.</p></div>
  <div className="work-stack">
   {works.map((work,i)=><motion.article key={work.name} className="glass-surface glass-hover work-card" initial={reduced ? false : {opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.5,delay:i*.09}}>
    <a href={work.link} target="_blank" rel="noopener noreferrer" className={`work-card__art work-card__art--${work.kind}`} aria-label={`View ${work.name} website`}>
     <span className="work-art-top"><Globe2 size={13}/> {work.category}</span><strong className="work-art-title">{work.name}</strong>
    </a>
    <div className="work-card__details"><div className="work-card__meta"><span>{String(i+1).padStart(2,'0')} / CASE STUDY</span><span>·</span><span>{work.label}</span></div><h3>{work.title}</h3><p>{work.description}</p><div className="work-card__bottom"><Link to="/portfolio" className="pill-link">See more projects <ArrowUpRight size={16}/></Link><a href={work.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${work.name}`} className="btn btn-glass" style={{minHeight:42,padding:'10px 14px'}}><ArrowUpRight size={17}/></a></div></div>
   </motion.article>)}
  </div>
  <div style={{textAlign:'center',marginTop:36}}><Link to="/portfolio" className="btn btn-glass">View full project archive <ArrowUpRight size={16}/></Link></div>
 </div></section>;
}
