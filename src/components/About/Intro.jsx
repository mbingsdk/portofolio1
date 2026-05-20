import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations/fadeVariants';

const Intro = () => (
  <motion.div
    variants={fadeIn('down')}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }} // Animasi bisa terulang saat elemen kembali terlihat di layar
    className="mb-10 text-left"
  >
    <motion.p
      variants={fadeIn('down')}
      initial="hidden"
      whileInView="visible"
      className="mb-4 text-lg leading-relaxed"
    >
      Halo! Saya seorang Web Developer yang suka Digital Eksperiment untuk hal-hal yang menarik menurutku, interaktif, dan estetis.
    </motion.p>
    <motion.p
      variants={fadeIn('down')}
      initial="hidden"
      whileInView="visible"
      className="mb-4 text-lg leading-relaxed"
    >
      Saya tertarik dengan desain <span className="font-semibold text-indigo-500">mimetic</span>, yaitu pendekatan desain yang mengadaptasi elemen dunia nyata seperti tekstur, bayangan, dan kedalaman, sambil tetap mempertahankan responsivitas dan kesan modern.
    </motion.p>
    <motion.p
      variants={fadeIn('down')}
      initial="hidden"
      whileInView="visible"
      className="mb-4 text-lg leading-relaxed"
    >
      Saat ini saya sedang mengembangkan beberapa proyek pribadi, termasuk aplikasi toko berbasis web, sistem chatbot untuk WhatsApp, dan UI kreatif untuk pengguna mobile.
    </motion.p>
    <motion.p
      variants={fadeIn('down')}
      initial="hidden"
      whileInView="visible"
      className="text-lg leading-relaxed"
    >
      Di waktu luang, saya mengeksplorasi musik fingerstyle dan mendalami teknologi AI untuk meningkatkan produktivitas dan kreativitas. Saya sangat takut berkenalan dengan orang yang sehobi namun tidak bisa kucapai kemampuannya. Itu akan jadi hantu paling horor bagiku.
    </motion.p>
  </motion.div>
);

export default Intro;
