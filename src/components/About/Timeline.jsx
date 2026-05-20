import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations/fadeVariants';
import { FaShoppingCart, FaRobot, FaPaintBrush, FaGraduationCap } from 'react-icons/fa';

const Timeline = () => (
  <motion.div
    variants={fadeIn('up', 0.3)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl text-left mb-10"
  >
    <h3 className="text-2xl font-semibold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-teal-100 to-blue-500">
      Mini Timeline
    </h3>
    <hr className="border-t-2 border-gray-300 dark:border-gray-600 my-4" />
    <div className="space-y-6">
      {[
        { year: '2021', icon: <FaRobot size={24} />, text: 'Eksperimen AI untuk keperluan interaktif' },
        { year: '2019', icon: <FaShoppingCart size={24} />, text: 'Mulai proyek aplikasi toko web dan sistem bot WhatsApp, Line, Discord, Dll.' },
        { year: '2017', icon: <FaPaintBrush size={24} />, text: 'Belajar desain mimetic & UI kreatif untuk mobile' },
        { year: '2014', icon: <FaGraduationCap size={24} />, text: 'Lulus SMKN 1 Enrekang' },
      ].map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn('left', 0.3 * index)}
          initial="hidden"
          whileInView="visible"
          className="relative flex items-start space-x-4"
        >
          {/* Ikon di kiri dengan jarak lebih jauh dari teks */}
          <div className="flex-shrink-0 text-indigo-500">{item.icon}</div>
          <div className="flex-1">
            <p className="font-semibold text-lg">{item.year}</p>
            <p className="text-md">{item.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Timeline;
