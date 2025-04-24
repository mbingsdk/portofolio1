// src/pages/Contact.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socialMedia = [
  {
    name: 'Instagram',
    icon: <FaInstagram className="text-3xl text-pink-500" />,
    link: 'https://instagram.com',
    shadow_color: 'dark:shadow-pink-500/30',
    color: '',
    // color: 'from-pink-400 to-yellow-500',
  },
  {
    name: 'GitHub',
    icon: <FaGithub className="text-3xl text-gray-800 dark:text-white" />,
    link: 'https://github.com',
    shadow_color: 'dark:shadow-white/30',
    color: '',
    // color: 'from-gray-300 to-gray-600',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin className="text-3xl text-blue-600" />,
    link: 'https://linkedin.com',
    shadow_color: 'dark:shadow-blue-500/30',
    color: '',
    // color: 'from-blue-400 to-blue-700',
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
      <h2 className="text-3xl font-semibold mb-6">Hubungi Saya</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8">
        {socialMedia.map((social, i) => (
          <motion.a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className={`rounded-2xl p-6 shadow-xl bg-gradient-to-br ${social.color} ${social.shadow_color} flex flex-col items-center justify-center transition duration-300 dark:bg-gray-800`}
          >
            {social.icon}
            <p className="mt-2 font-medium">{social.name}</p>
          </motion.a>
        ))}

        <motion.button
          onClick={() => setShowForm(!showForm)}
          whileHover={{ scale: 1.05 }}
          className="rounded-2xl p-6 shadow-xl bg-gradient-to-br dark:shadow-red-500/30 flex flex-col items-center justify-center transition duration-300 dark:bg-gray-800"
        >
          <FaEnvelope className="text-3xl text-red-500" />
          <p className="mt-2 font-medium">Email</p>
        </motion.button>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.form
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl text-left max-w-xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Nama</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Pesan</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
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
