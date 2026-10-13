import React, { useEffect, useRef, useState, useCallback } from 'react';
import Masonry from 'react-masonry-css';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import 'yet-another-react-lightbox/styles.css';
const PAGE_SIZE=12;
export default function Gallery() {
 const [allImages,setAllImages]=useState([]);
 const [visible,setVisible]=useState(PAGE_SIZE);
 const [selected,setSelected]=useState(-1);
 const sentinel=useRef(null);
 useEffect(()=>{
  let cancelled=false;
  fetch('/gallery.json').then(r=>{if(!r.ok)throw Error('Gallery unavailable');return r.json();}).then(data=>{if(!cancelled&&Array.isArray(data))setAllImages(data);}).catch(()=>{});
  return ()=>{cancelled=true;};
 },[]);
 const observe=useCallback(node=>{
   if(sentinel.current)sentinel.current.disconnect();
   if(!node||visible>=allImages.length)return;
   sentinel.current=new IntersectionObserver(entries=>{if(entries[0]?.isIntersecting)setVisible(count=>Math.min(count+PAGE_SIZE,allImages.length));},{rootMargin:'300px'});
   sentinel.current.observe(node);
 },[visible,allImages.length]);
 useEffect(()=>()=>sentinel.current?.disconnect(),[]);
 const images=allImages.slice(0,visible);
 return <section className="container-wide" style={{paddingBottom:50}}>
  <header className="page-heading gallery-top"><div><span className="eyebrow">Beyond the code / Collection</span><h1 className="display-lg">A place for<br/><span className="iris-text">visual curiosity.</span></h1><p className="body-lead">Kumpulan gambar dan inspirasi visual yang saya sukai.</p></div><span className="gallery-count">{allImages.length} / VISUALS</span></header>
  <Masonry breakpointCols={{default:3,900:2,540:1}} className="gallery-grid" columnClassName="gallery-column">
   {images.map((src,index)=><button key={src+index} ref={index===images.length-1?observe:null} type="button" className="gallery-image" onClick={()=>setSelected(index)} aria-label={`Open gallery image ${index+1}`}><img src={src} alt={`Gallery visual ${index+1}`} loading="lazy"/></button>)}
  </Masonry>
  {visible<allImages.length&&<p className="gallery-count" style={{textAlign:'center',paddingTop:30}}>SCROLL TO VIEW MORE</p>}
  <Lightbox open={selected>=0} close={()=>setSelected(-1)} index={selected} slides={images.map(src=>({src}))} plugins={[Zoom,Fullscreen,Slideshow]}/>
 </section>;
}
