// src/pages/Gallery.jsx - Premium dark gallery
import React, { useEffect, useState, useRef, useCallback } from 'react';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import 'yet-another-react-lightbox/styles.css';
import { fadeUp, staggerContainer } from '../lib/motionVariants';

const shuffleArray = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const ITEMS_PER_PAGE = 12;

const Gallery = () => {
  const [allImages, setAllImages] = useState([]);
  const [images, setImages]       = useState([]);
  const [page, setPage]           = useState(0);
  const [index, setIndex]         = useState(-1);
  const [hasMore, setHasMore]     = useState(true);
  const observer = useRef();

  useEffect(() => {
    fetch('/gallery.json')
      .then(r => r.json())
      .then(data => {
        const shuffled = shuffleArray(data);
        setAllImages(shuffled);
        setImages(shuffled.slice(0, ITEMS_PER_PAGE));
        setHasMore(shuffled.length > ITEMS_PER_PAGE);
      })
      .catch(err => console.error('Gagal memuat galeri:', err));
  }, []);

  const lastRef = useCallback((node) => {
    if (!hasMore || !node) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const next = page + 1;
        const items = allImages.slice(0, (next + 1) * ITEMS_PER_PAGE);
        setImages(items);
        setPage(next);
        if (items.length >= allImages.length) setHasMore(false);
      }
    });
    observer.current.observe(node);
  }, [page, hasMore, allImages]);

  const breakpoints = { default: 3, 1024: 3, 768: 2, 500: 1 };

  return (
    <div className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#7c3aed]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <motion.span variants={fadeUp} className="font-mono text-xs text-[#00d4aa] tracking-wider uppercase mb-3 block">
            <span className="section-line" />Visual Collection
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-800 text-white">
            <span className="grad-violet">Gallery</span>
          </motion.h2>
        </motion.div>

        {/* Masonry */}
        <Masonry
          breakpointCols={breakpoints}
          className="flex -ml-3"
          columnClassName="masonry-column pl-3"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              ref={i === images.length - 1 ? lastRef : null}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setIndex(i)}
              className="mb-3 rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-[#00d4aa]/20 transition-all duration-300 group relative"
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </Masonry>

        {hasMore && (
          <div className="text-center mt-8">
            <span className="font-mono text-xs text-[#a8b4d0] animate-pulse">Loading more...</span>
          </div>
        )}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map(img => ({ src: img }))}
        plugins={[Zoom, Fullscreen, Slideshow]}
      />
    </div>
  );
};

export default Gallery;
