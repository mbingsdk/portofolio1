import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations/fadeVariants';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaLink } from 'react-icons/fa'; // Menggunakan Font Awesome Icons

const Biodata = () => (
  <motion.div
    variants={fadeIn('left')}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }} // Animasi bisa terulang ketika kembali terlihat di layar
    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl text-left mb-10"
  >
    <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
      Biodata
    </h3>
    <hr className="border-t-2 border-gray-300 dark:border-gray-600 my-4" />
    <ul className="list-none space-y-4 text-lg text-gray-700 dark:text-gray-200">
      <motion.li
        variants={fadeIn('left')}
        initial="hidden"
        whileInView="visible"
        className="flex items-center"
      >
        <FaUser className="mr-3 text-indigo-500" />
        <span>Nama: Mbing SDK</span>
      </motion.li>
      <motion.li
        variants={fadeIn('left')}
        initial="hidden"
        whileInView="visible"
        className="flex items-center"
      >
        <FaMapMarkerAlt className="mr-3 text-green-500" />
        <span>Domisili: Enrekang</span>
      </motion.li>
      <motion.li
        variants={fadeIn('left')}
        initial="hidden"
        whileInView="visible"
        className="flex items-center"
      >
        <FaEnvelope className="mr-3 text-red-500" />
        <span>Email: mbe@mbingsdk.my.id</span>
      </motion.li>
      <motion.li
        variants={fadeIn('left')}
        initial="hidden"
        whileInView="visible"
        className="flex items-center"
      >
        <FaLink className="mr-3 text-blue-500" />
        <span>Website: mbingsdk.my.id</span>
      </motion.li>
    </ul>
  </motion.div>
);

export default Biodata;
