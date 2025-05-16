import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas pada rute baru
  }, [location]); // Scroll ketika rute berubah

  return null;
};

export default ScrollToTop;
