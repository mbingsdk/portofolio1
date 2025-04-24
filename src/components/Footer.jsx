// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-100 dark:bg-gray-900 text-center py-6 text-sm text-gray-600 dark:text-gray-400">
      <p>&copy; {new Date().getFullYear()} - Dibuat dengan ❤️ oleh Mbing SDK</p>
    </footer>
  );
};

export default Footer;
