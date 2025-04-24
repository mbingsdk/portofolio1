// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { GiBowlSpiral } from "react-icons/gi";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border-b border-white/40 shadow-lg fixed w-full z-10 p-4 flex justify-between items-center rounded-b-xl transition-all duration-500 ease-in-out">
      {/* Logo with Icon */}
      <h1 className="text-xl font-bold text-gray-900 dark:text-white transition-all duration-300 hover:text-blue-600 dark:hover:text-yellow-400 flex items-center space-x-2">
        <Link to="/" className="flex items-center space-x-2">
          <GiBowlSpiral className="w-5 h-5 text-gray-900 dark:text-white hover:text-pink-600" /> {/* GiBowlSpiral Icon */}
          <span>SDK-Dev</span> {/* Teks */}
        </Link>
      </h1>

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300">Home</Link>
        <Link to="/about" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300">About</Link>
        <Link to="/portfolio" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300">Portfolio</Link>
        <Link to="/contact" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300">Contact</Link>
        
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
          <Link to="/" onClick={toggleMenu} className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300">About</Link>
          <Link to="/portfolio" onClick={toggleMenu} className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300">Portfolio</Link>
          <Link to="/contact" onClick={toggleMenu} className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
