// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border-b border-white/40 shadow-lg fixed w-full z-10 p-4 flex justify-between items-center rounded-b-xl transition-all duration-500 ease-in-out">
      {/* Logo with Icon */}
      <h1 className="text-xl font-bold text-gray-900 dark:text-white font-outfit tracking-tight hover:text-blue-600 dark:hover:text-yellow-400 flex items-center space-x-2">
        <Link to="/" className="flex items-center space-x-2">
            <Logo className="w-9 h-auto text-gray-900 dark:text-white hover:text-pink-600" />
            <span>SDK-Dev</span>
        </Link>
      </h1>

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/" className="font-outfit font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300">Home</Link>
        <Link to="/about" className="font-outfit font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300">About</Link>
        <Link to="/portfolio" className="font-outfit font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300">Portfolio</Link>
        <Link to="/gallery" className="font-outfit font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300">Gallery</Link>
        <Link to="/contact" className="font-outfit font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300">Contact</Link>
        
        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className="transition-transform duration-300 transform hover:scale-110">
          {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
        </button>
      </div>

      {/* Mobile Navbar Toggle */}
      <div className="md:hidden flex items-center space-x-4">
        <button onClick={() => setDarkMode(!darkMode)} className="transition-transform duration-300 transform hover:scale-110">
          {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
        </button>
        
        {/* Menu Button */}
        <button onClick={toggleMenu}>
          {menuOpen ? <X className="w-6 h-6 text-gray-900 dark:text-white" /> : <Menu className="w-6 h-6 text-gray-900 dark:text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md py-4 flex flex-col items-center space-y-4 md:hidden transition-all duration-300 ease-in-out transform opacity-100 scale-100">
          <Link to="/" onClick={toggleMenu} className="font-outfit font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="font-outfit font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300">About</Link>
          <Link to="/portfolio" onClick={toggleMenu} className="font-outfit font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300">Portfolio</Link>
          <Link to="/gallery" onClick={toggleMenu} className="font-outfit font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300">Gallery</Link>
          <Link to="/contact" onClick={toggleMenu} className="font-outfit font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
