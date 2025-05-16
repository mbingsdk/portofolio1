import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations/fadeVariants';
import { FaBriefcase, FaCode, FaRobot } from 'react-icons/fa'; // Ikon Font Awesome

const Experience = () => (
  <motion.div
    variants={fadeIn('down')}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }} // Perubahan di sini
    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl text-left mb-10"
  >
    <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
      Pengalaman
    </h3>
    <hr className="border-t-2 border-gray-300 dark:border-gray-600 my-4" />
    <ul className="list-none space-y-4 text-lg text-gray-700 dark:text-gray-200">
      <motion.li
        variants={fadeIn('down')} // Menambahkan animasi pada tiap item
        initial="hidden"
        whileInView="visible"
        className="flex items-center"
      >
        <FaBriefcase className="mr-3 text-indigo-500" />
        <span>2025 - Freelance: Aplikasi Toko Web (Store App)</span>
      </motion.li>
      <motion.li
        variants={fadeIn('down')} // Menambahkan animasi pada tiap item
        initial="hidden"
        whileInView="visible"
        className="flex items-center"
      >
        <FaRobot className="mr-3 text-green-500" />
        <span>2024 - Manufacturing Factory Project: Bot WhatsApp + Accurate</span>
      </motion.li>
      <motion.li
        variants={fadeIn('down')} // Menambahkan animasi pada tiap item
        initial="hidden"
        whileInView="visible"
        className="flex items-center"
      >
      <FaCode className="mr-3 text-yellow-500" />
      <span>2023 - UI Designer: Sistem Inventory Mini & Mikrotik Hotspot Dashboard</span>
      </motion.li>
    </ul>
  </motion.div>
);

export default Experience;
