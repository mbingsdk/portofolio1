import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
export default function NotFound(){return <section className="container-narrow" style={{minHeight:'80dvh',paddingTop:180,paddingBottom:80,display:'flex',justifyContent:'center',flexDirection:'column',textAlign:'center',alignItems:'center'}}><span className="eyebrow">404 / Lost in the layers</span><h1 className="display-xl iris-text" style={{margin:'22px 0'}}>Not found.</h1><p className="body-lead" style={{maxWidth:420}}>Halaman yang kamu cari tidak tersedia. Yuk, kembali ke halaman utama.</p><Link className="btn btn-primary" to="/" style={{marginTop:25}}><ArrowLeft size={16}/> Back to homepage</Link></section>}
