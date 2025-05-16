import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Gagal memuat data project:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-24 px-4 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-center text-3xl font-bold mb-6 text-gradient bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">My Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="text-center col-span-full text-gray-500 dark:text-gray-400">Loading projects...</div>
        ) : (
          projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 2 }} // Adding a subtle rotation effect
              viewport={{ once: false, amount: 0.3 }} // Animasi terulang saat item masuk kembali ke viewport
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 100, damping: 20 }} // Smoother animation
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative aspect-video overflow-hidden group">
                {/* Gambar dengan efek zoom-in saat hover */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay Gelap saat hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-4">
                <h3 className="text-md font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                {/* Deskripsi dengan efek animasi */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 transition-all duration-300 ease-in-out transform hover:text-blue-600 hover:scale-105">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-3 text-blue-600 hover:text-blue-800 transition-all duration-300"
                  >
                    <span className="mr-2 text-xs font-semibold tracking-wide text-indigo-500 uppercase">View Project</span>
                    <FiExternalLink className=" text-xs font-semibold tracking-wide text-indigo-500 uppercase" />
                  </a>
                )}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Portfolio;
