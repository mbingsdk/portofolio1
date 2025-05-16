// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Intro from '../components/About/Intro';
import Biodata from '../components/About/Biodata';
import Experience from '../components/About/Experience';
import Skill from '../components/About/Skills';
import Timeline from '../components/About/Timeline';

const About = () => {
  return (
    <motion.div className="pt-24 px-4 md:px-12 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10 text-gradient bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
        Tentang Saya
      </h2>
      <Intro />
      <Biodata />
      <Experience />
      <Skill />
      <Timeline />
    </motion.div>
  );
};

export default About;