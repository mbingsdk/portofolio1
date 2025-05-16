// src/components/Footer.jsx
import React from 'react';
import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-100 dark:bg-gray-900 text-center py-8 text-sm text-gray-600 dark:text-gray-400">
      <div className="space-y-4">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com/profile.php?id=100063623905826" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="https://x.com/mbingsdk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 dark:hover:text-blue-300 transition-all duration-300">
            <FaXTwitter className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/mbingsdk" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://github.com/mbingsdk" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-all duration-300">
            <FaGithub className="w-6 h-6" />
          </a>
        </div>

        {/* Footer Text */}
        <p>&copy; {new Date().getFullYear()} - Dibuat dengan ❤️ oleh Mbing SDK</p>

        {/* Links for Privacy Policy, Terms of Service */}
        <div className="mt-4 space-x-6">
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">Privacy Policy</a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
