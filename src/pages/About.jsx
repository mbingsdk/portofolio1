// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const About = () => {
  return (
    <motion.div
      className="pt-24 px-4 md:px-12 max-w-4xl mx-auto text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-gradient bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
        Tentang Saya
      </h2>
      <motion.div
        className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-2xl text-gray-700 dark:text-gray-200 text-left"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="mb-4 text-lg leading-relaxed">
          Halo! Saya seorang pengembang web yang suka menciptakan pengalaman digital yang menarik, interaktif, dan estetis.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          Saya tertarik dengan desain <span className="font-semibold text-indigo-500">mimetic</span>, yaitu pendekatan desain yang mengadaptasi elemen dunia nyata seperti tekstur, bayangan, dan kedalaman, sambil tetap mempertahankan responsivitas dan kesan modern.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          Saat ini saya sedang mengembangkan beberapa proyek pribadi, termasuk aplikasi toko berbasis web, sistem chatbot untuk WhatsApp, dan UI kreatif untuk pengguna mobile.
        </p>
        <p className="text-lg leading-relaxed">
          Di waktu luang, saya mengeksplorasi musik fingerstyle dan mendalami teknologi AI untuk meningkatkan produktivitas dan kreativitas.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
