// src/pages/Portfolio.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/src/assets/projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Gagal memuat data project:', err));
  }, []);

  return (
    <div className="pt-24 px-4 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">My Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-blue-600 hover:underline"
                >
                  View Project
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
