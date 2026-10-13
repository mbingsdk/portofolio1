import React, { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Github, Search, SlidersHorizontal } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
const filters=['All work','Live','Development'];
function ProjectCard({project,index}) {
 const reduced=useReducedMotion();
 const isGithub = project.link?.includes('github.com');
 return <motion.article className="archive-card glass-surface glass-hover" initial={reduced?false:{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.1}} transition={{duration:.45,delay:index%2*.08}}>
   <div className={`archive-card__cover archive-card__cover--${index%3}`}>
     {project.image && <img src={project.image} alt={`Preview of ${project.title}`} loading="lazy" onError={event => {event.currentTarget.style.display='none';}}/>}
     {project.status && <span className="archive-card__status">{project.status}</span>}
     <span className="archive-card__big-label">{project.title}</span>
   </div>
   <div className="archive-card__body"><h2>{project.title}</h2><p>{project.description}</p>
     <div className="archive-card__links">
       {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">{isGithub?<Github size={15}/>:<ArrowUpRight size={15}/>} {isGithub?'View on GitHub':'Visit project'}</a>}
       {project.repo && project.repo!==project.link && <a href={project.repo} target="_blank" rel="noopener noreferrer"><Github size={15}/> Source code</a>}
     </div>
   </div>
 </motion.article>;
}
export default function Portfolio(){
 const [projects,setProjects]=useState([]);
 const [loading,setLoading]=useState(true);
 const [error,setError]=useState(false);
 const [tab,setTab]=useState('All work');
 const [search,setSearch]=useState('');
 useEffect(()=>{
   const controller=new AbortController();
   fetch('/projects.json',{signal:controller.signal})
     .then(response=>{if(!response.ok)throw new Error('Could not load projects');return response.json();})
     .then(data=>{if(Array.isArray(data))setProjects(data);else setError(true);})
     .catch(err=>{if(err.name!=='AbortError')setError(true);})
     .finally(()=>{if(!controller.signal.aborted)setLoading(false);});
   return ()=>controller.abort();
 },[]);
 const filtered=useMemo(()=>projects.filter(p=>{
   const status=p.statusType?.toLowerCase();
   const matchTab=tab==='All work'||(tab==='Live' && (status==='live'||(!p.status&&p.link&&!p.link.includes('github.com'))))||(tab==='Development' && status==='development');
   return matchTab && (p.title+' '+p.description).toLowerCase().includes(search.trim().toLowerCase());
 }),[projects,tab,search]);
 return <section className="container-wide" style={{paddingBottom:45}}>
  <header className="page-heading"><span className="eyebrow">The archive / What I've built</span><h1 className="display-lg">Good ideas deserve<br/><span className="iris-text">to be built.</span></h1><p className="body-lead">Kumpulan project, aplikasi, dan eksperimen dari berbagai kebutuhan. Mulai dari commerce, sistem koperasi, automasi, hingga infrastruktur jaringan.</p></header>
  <div className="filter-bar"><div className="filter-tabs" role="group" aria-label="Filter projects">{filters.map(filter=><button key={filter} type="button" className="filter-tab" aria-pressed={tab===filter} onClick={()=>setTab(filter)}>{filter}</button>)}</div><label className="filter-search"><Search size={17}/><input aria-label="Search projects" type="search" placeholder="Search project..." value={search} onChange={e=>setSearch(e.target.value)}/></label></div>
  {loading?<div className="archive-grid">{Array.from({length:4},(_,i)=><div className="archive-skeleton" key={i}/>)}</div>:error?<div className="glass-surface archive-empty"><h3>Projects unavailable</h3><p>Project data couldn't be loaded right now.</p></div>:filtered.length===0?<div className="glass-surface archive-empty"><h3>No matching projects</h3><p>Coba pencarian lain atau pilih kategori All work.</p></div>:<div className="archive-grid">{filtered.map((project,i)=><ProjectCard project={project} key={project.title+i} index={i}/>)}</div>}
  {!loading&&!error&&<div style={{textAlign:'center',paddingTop:44}}><span className="eyebrow">{filtered.length} / {projects.length} projects displayed</span></div>}
 </section>;
}
