// src/pages/Gallery.jsx
import React, { useEffect, useState, useRef, useCallback } from 'react';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import 'yet-another-react-lightbox/styles.css';

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const ITEMS_PER_PAGE = 9;

const Gallery = () => {
  const [allImages, setAllImages] = useState([]);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [index, setIndex] = useState(-1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  useEffect(() => {
    fetch('/gallery.json')
      .then((res) => res.json())
      .then((data) => {
        const shuffled = shuffleArray(data);
        setAllImages(shuffled);
        setImages(shuffled.slice(0, ITEMS_PER_PAGE));
        setHasMore(shuffled.length > ITEMS_PER_PAGE);
      })
      .catch((err) => console.error('Gagal memuat gambar galeri:', err));
  }, []);

  const lastImageRef = useCallback((node) => {
    if (!hasMore || !node) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const nextPage = page + 1;
        const newItems = allImages.slice(0, (nextPage + 1) * ITEMS_PER_PAGE);
        setImages(newItems);
        setPage(nextPage);
        if (newItems.length >= allImages.length) {
          setHasMore(false);
        }
      }
    });

    observer.current.observe(node);
  }, [page, hasMore, allImages]);

  const breakpointColumnsObj = {
    default: 3,
    1024: 3,
    768: 2,
    500: 1,
  };

  const directions = [
    { x: -30, y: 30 },
    { x: 30, y: 30 },
    { x: 0, y: 40 },
  ];

  return (
    <div className="pt-24 px-4 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-3xl text-center font-bold mb-6 text-gradient bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">Gallery</h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex -ml-[6px]"
        columnClassName="masonry-column"
      >
        {images.map((img, i) => {
          const dir = directions[i % directions.length];
          const delay = Math.random() * 0.3 + (i % 10) * 0.04;

          const isLast = i === images.length - 1;

          return (
            <motion.div
              key={i}
              ref={isLast ? lastImageRef : null}
              className="rounded-xl overflow-hidden cursor-pointer mb-[6px] ml-[6px] shadow-md"
              initial={{ opacity: 0, x: dir.x, y: dir.y }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay, duration: 0.6, ease: 'easeOut' }}
              onClick={() => setIndex(i)}
            >
              <img
                src={img}
                alt={`Gallery ${i}`}
                className="w-full object-cover transition-transform duration-300 hover:scale-[1.03] transform"
              />
            </motion.div>
          );
        })}
      </Masonry>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((img) => ({ src: img }))}
        plugins={[Zoom, Fullscreen, Slideshow]}
      />
    </div>
  );
};

export default Gallery;
