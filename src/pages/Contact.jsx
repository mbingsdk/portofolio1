import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaDiscord, FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const socialMedia = [
  {
    name: 'WhatsApp',
    icon: <FaWhatsapp className="text-3xl text-green-500" />,
    link: 'https://wa.me/message/Y357TXW37QACL1',
    shadow_color: 'shadow-green-300/50 dark:shadow-green-500/30',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram className="text-3xl text-pink-500" />,
    link: 'https://instagram.com/mbingsdk',
    shadow_color: 'shadow-pink-300/50 dark:shadow-pink-500/30',
  },
  {
    name: 'X',
    icon: <FaXTwitter className="text-3xl text-gray-800 dark:text-white" />,
    link: 'https://x.com/mbingsdk',
    shadow_color: 'shadow-gray-400/50 dark:shadow-white/20',
  },
  {
    name: 'Facebook',
    icon: <FaFacebook className="text-3xl text-blue-600" />,
    link: 'https://www.facebook.com/profile.php?id=100063623905826',
    shadow_color: 'shadow-blue-300/50 dark:shadow-blue-500/30',
  },
  {
    name: 'Discord',
    icon: <FaDiscord className="text-3xl text-indigo-800" />,
    link: '#',
    shadow_color: 'shadow-indigo-300/50 dark:shadow-indigo-500/30',
    onClick: () => {
      navigator.clipboard.writeText('mbingsdk');
      alert('Discord username copied!');
    },
  },
  {
    name: 'GitHub',
    icon: <FaGithub className="text-3xl text-gray-800 dark:text-white" />,
    link: 'https://github.com/mbingsdk',
    shadow_color: 'shadow-gray-400/50 dark:shadow-white/20',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin className="text-3xl text-blue-600" />,
    link: 'https://linkedin.com',
    shadow_color: 'shadow-blue-300/50 dark:shadow-blue-500/30',
  },
  {
    name: 'Email',
    icon: <FaEnvelope className="text-3xl text-red-500" />,
    link: '#',
    shadow_color: 'shadow-red-300/50 dark:shadow-red-500/30',
    onClick: (setShowForm) => {
      setShowForm((prev) => !prev); // Toggle form
    },
  },
];

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan terkirim! (Simulasi)");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      className="pt-24 px-4 max-w-5xl mx-auto text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-gradient bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        Buset, Kepo!
      </motion.h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8">
        {socialMedia.map((social, i) => (
          <motion.a
            key={i}
            href={social.link}
            onClick={(e) => {
              if (social.onClick) {
                e.preventDefault();
                social.onClick(setShowForm);
              }
            }}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            animate={{ opacity: 1, y: 0 }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-2xl p-6 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-xl ${social.shadow_color} flex flex-col items-center justify-center transition duration-300`}
          >
            {social.icon}
            <p className="mt-2 font-medium">{social.name}</p>
          </motion.a>
        ))}
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.form
            className="bg-white dark:bg-gray-900 bg-opacity-80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-2xl text-left max-w-xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Nama</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Pesan</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Kirim Pesan
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;
