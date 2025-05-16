import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations/fadeVariants';

const skills = ['React', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'MongoDB', 'Express', 'PostgreSQL', 'Flask', 'Django', 'RouterOS-API', 'PHP', 'Codeigniter', 'Golang', 'Mikrotik', 'Linux', 'Firewall', 'DNS Server', 'Network', 'Socket IO', 'Photoshop', 'Illustrator', 'Figma'];

const Skill = () => (
  <motion.div
    variants={fadeIn('up')}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }} // Perubahan di sini
    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl text-left mb-10"
  >
    <h3 className="text-2xl font-semibold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500">
      Skill
    </h3>
    <hr className="border-t-2 border-gray-300 dark:border-gray-600 my-4" />
    <div className="flex flex-wrap gap-4">
      {skills.map(skill => (
        <motion.span
          key={skill}
          variants={fadeIn('up')} // Ini untuk animasi ulang tiap skill
          initial="hidden"
          whileInView="visible"
          className="bg-gradient-to-r from-teal-200 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg transform hover:scale-105 hover:shadow-xl"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

export default Skill;
