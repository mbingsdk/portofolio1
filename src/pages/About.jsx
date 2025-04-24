// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="pt-24 px-4 md:px-12 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold mb-4 text-center">About Me</h2>
      <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl text-gray-700 dark:text-gray-200">
        <p className="mb-4 text-lg">
          Halo! Saya seorang pengembang web yang suka menciptakan pengalaman digital yang menarik, interaktif, dan estetis.
        </p>
        <p className="mb-4 text-lg">
          Saya tertarik dengan desain mimetic, yaitu desain yang meniru dunia nyata dengan tekstur, bayangan, dan kedalaman yang nyata namun tetap responsif dan modern.
        </p>
        <p className="mb-4 text-lg">
          Saat ini saya sedang mengembangkan beberapa proyek pribadi termasuk aplikasi toko, sistem chatbot WhatsApp, dan desain UI kreatif untuk pengguna mobile.
        </p>
        <p className="text-lg">
          Di waktu luang, saya suka mengeksplorasi musik fingerstyle dan belajar tentang teknologi AI terbaru.
        </p>
      </div>
    </motion.div>
  );
};

export default About;