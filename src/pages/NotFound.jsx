// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white dark:bg-gray-800 p-10 md:p-16 rounded-2xl shadow-2xl max-w-xl">
        <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Oops! Halaman yang kamu cari tidak ditemukan.
        </p>
        <Link
          to="/"
          className="bg-blue-500 text-white py-2 px-6 rounded-full shadow hover:bg-blue-600 transition"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
