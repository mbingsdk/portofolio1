import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 transition-colors duration-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 md:p-16 max-w-2xl w-full"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: -2 }}
        >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">
          Halo, saya Mbing SDK 👋
        </h1>
        </motion.div>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
          Web developer dadakan dan pecinta desain mimetic. Yuk jelajahi proyek dan hal-hal menarik lainnya!<br />
          Ehh, tapi jangan deh! 🤣
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-6 rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
          >
            <Link to="/portfolio">Portfolio</Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="border border-blue-500 text-blue-600 dark:text-blue-400 py-2 px-6 rounded-full hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300 shadow"
          >
            <Link to="/about">Tentang Saya</Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="border border-gray-400 text-gray-700 dark:text-gray-200 py-2 px-6 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 shadow"
          >
            <Link to="/contact">Kontak</Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
