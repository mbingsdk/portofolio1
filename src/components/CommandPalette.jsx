import React, {useCallback,useEffect,useMemo,useRef,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ArrowUpRight,Briefcase,Copy,Github,Home,Image,Mail,MessageCircle,Search,User,X} from 'lucide-react';
const actions=[
 ['Pages','Home','/',Home,'route'],['Pages','Projects','/portfolio',Briefcase,'route'],['Pages','About','/about',User,'route'],['Pages','Gallery','/gallery',Image,'route'],['Pages','Contact','/contact',Mail,'route'],
 ['Shortcuts','Copy email','mbe@mbingsdk.my.id',Copy,'copy'],['Shortcuts','GitHub','https://github.com/mbingsdk',Github,'open'],['Shortcuts','WhatsApp','https://wa.me/message/Y357TXW37QACL1',MessageCircle,'open']
];
export default function CommandPalette({open,onClose}){
 const [query,setQuery]=useState('');
 const [active,setActive]=useState(0);
 const input=useRef(null);
 const navigate=useNavigate();
 const filtered=useMemo(()=>actions.filter(a=>(a[1]+' '+a[0]).toLowerCase().includes(query.toLowerCase().trim())),[query]);
 const execute=useCallback(async action=>{
  if(!action)return;
  if(action[4]==='route')navigate(action[2]);
  else if(action[4]==='open')window.open(action[2],'_blank','noopener,noreferrer');
  else if(action[4]==='copy'){try{await navigator.clipboard.writeText(action[2]);}catch{return;}}
  onClose();
 },[navigate,onClose]);
 useEffect(()=>{if(open){setQuery('');setActive(0);requestAnimationFrame(()=>input.current?.focus());}},[open]);
 useEffect(()=>setActive(0),[query]);
 useEffect(()=>{
  if(!open)return;
  const onKey=e=>{
   if(e.key==='Escape'){e.preventDefault();onClose();}
   if(e.key==='ArrowDown'){e.preventDefault();setActive(i=>Math.min(i+1,Math.max(filtered.length-1,0)));}
   if(e.key==='ArrowUp'){e.preventDefault();setActive(i=>Math.max(0,i-1));}
   if(e.key==='Enter'){e.preventDefault();execute(filtered[active]);}
  };
  window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey);
 },[open,filtered,active,execute,onClose]);
 if(!open)return null;
 return <div role="presentation"><div className="palette-backdrop" onClick={onClose}/><div className="palette-dialog glass-surface" role="dialog" aria-modal="true" aria-label="Quick navigation">
  <div style={{display:'flex',alignItems:'center',gap:9,borderBottom:'1px solid #8694b42b'}}><Search size={18} color="#898bc5"/><input ref={input} value={query} onChange={e=>setQuery(e.target.value)} aria-label="Search pages and shortcuts" placeholder="Search pages, actions..."/><button type="button" className="nav-search" onClick={onClose} aria-label="Close search"><X size={18}/></button></div>
  <div style={{maxHeight:'53dvh',overflowY:'auto'}}>{['Pages','Shortcuts'].map(group=><div key={group}><div className="palette-group">{group}</div>{filtered.filter(a=>a[0]===group).map(action=>{const i=filtered.indexOf(action);const Icon=action[3];return <button key={action[1]} type="button" className={`palette-item ${active===i?'active':''}`} onMouseEnter={()=>setActive(i)} onClick={()=>execute(action)}><span className="palette-item__icon"><Icon size={17}/></span><span style={{flex:1,fontSize:14,fontWeight:550}}>{action[1]}<small>{action[4]==='route'?'Open page':action[4]==='copy'?'Copy to clipboard':'Open in new tab'}</small></span><ArrowUpRight size={15}/></button>;})}</div>)}</div>
  {filtered.length===0&&<p className="muted" style={{textAlign:'center',padding:20,fontSize:14}}>No matching items.</p>}
  <div style={{fontSize:11,color:'#a3a9bf',padding:'17px 7px 3px',borderTop:'1px solid #8694b42b'}}>↑ ↓ navigate · Enter select · Esc close</div>
 </div></div>;
}
