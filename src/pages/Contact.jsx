import React, { useState } from 'react';
import { ArrowUpRight, Github, Instagram, Mail, MessageCircle, Send, ArrowRight } from 'lucide-react';
const channels=[
 {name:'WhatsApp',detail:'Konsultasi langsung',url:'https://wa.me/message/Y357TXW37QACL1',icon:MessageCircle},
 {name:'Email',detail:'mbe@mbingsdk.my.id',url:'mailto:mbe@mbingsdk.my.id',icon:Mail},
 {name:'Instagram',detail:'@mbingsdk',url:'https://instagram.com/mbingsdk',icon:Instagram},
 {name:'GitHub',detail:'github.com/mbingsdk',url:'https://github.com/mbingsdk',icon:Github},
];
export default function Contact(){
 const [form,setForm]=useState({name:'',email:'',message:''});
 const [opened,setOpened]=useState(false);
 const submit=e=>{e.preventDefault();const subject=encodeURIComponent('Project inquiry from '+form.name);const body=encodeURIComponent('Name: '+form.name+'\nEmail: '+form.email+'\n\n'+form.message);window.location.href='mailto:mbe@mbingsdk.my.id?subject='+subject+'&body='+body;setOpened(true);};
 return <section className="container-wide" style={{paddingTop:180,paddingBottom:45}}>
  <div className="contact-layout">
   <div><span className="eyebrow">Let's connect / Open for collaboration</span><h1 className="display-lg" style={{margin:'22px 0'}}>Have something<br/><span className="iris-text">in mind?</span></h1><p className="body-lead">Butuh aplikasi custom, sistem bisnis, integrasi, atau ingin diskusi ide? Ceritakan sedikit tentang proyek kamu.</p>
    <div className="contact-methods">{channels.map(({name,detail,url,icon:Icon})=><a key={name} className="contact-method glass-surface glass-hover" href={url} target={url.startsWith('mailto:')?'_self':'_blank'} rel="noopener noreferrer"><span className="contact-method__icon"><Icon size={19}/></span><span className="contact-method__text"><strong>{name}</strong><small>{detail}</small></span><ArrowUpRight size={18} color="#9a9ebc"/></a>)}</div>
   </div>
   <div className="contact-form glass-surface"><span className="eyebrow">Start a conversation</span><h2>Tell me about your idea.</h2><p className="muted" style={{fontSize:14,lineHeight:1.7}}>Form ini menyiapkan email di aplikasi email kamu. Belum ada pengiriman otomatis dari website.</p>
    <form onSubmit={submit}>
     <label htmlFor="contact-name">What's your name?</label><input id="contact-name" required type="text" placeholder="Your name" autoComplete="name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
     <label htmlFor="contact-email">Your email address</label><input id="contact-email" required type="email" placeholder="you@example.com" autoComplete="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
     <label htmlFor="contact-message">A little about your project</label><textarea id="contact-message" required placeholder="What are you planning to build?" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/>
     <button type="submit" className="btn btn-primary">Prepare email <ArrowUpRight size={17}/></button>
    </form>
    <p className="contact-form__note">{opened?'Aplikasi email telah dibuka. Silakan tekan Send di sana untuk mengirim pesan.':'Alternatively, you can reach me directly via WhatsApp or Instagram.'}</p>
   </div>
  </div>
 </section>;
}
