// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10 md:p-16 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Halo, saya Mbing SDK 👋</h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
          Pengembang web dan pecinta desain mimetic. Yuk jelajahi proyek dan hal-hal menarik lainnya!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/portfolio"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-6 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className="border border-blue-500 text-blue-600 py-2 px-6 rounded-full hover:bg-blue-50 dark:hover:bg-gray-700 shadow"
          >
            Tentang Saya
          </Link>
          <Link
            to="/contact"
            className="border border-gray-400 text-gray-700 dark:text-gray-200 py-2 px-6 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 shadow"
          >
            Kontak
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
