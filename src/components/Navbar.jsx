// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border-b border-white/40 shadow-lg fixed w-full z-10 p-4 flex justify-between items-center rounded-b-xl">
      <h1 className="text-xl font-bold">Mbing SDK</h1>
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-yellow-400 transition">Home</Link>
        <Link to="/about" className="hover:text-blue-600 dark:hover:text-yellow-400 transition">About</Link>
        <Link to="/portfolio" className="hover:text-blue-600 dark:hover:text-yellow-400 transition">Portfolio</Link>
        <Link to="/contact" className="hover:text-blue-600 dark:hover:text-yellow-400 transition">Contact</Link>
        <button onClick={() => setDarkMode(!darkMode)} className="transition">
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
      <div className="md:hidden flex items-center space-x-2">
        <button onClick={() => setDarkMode(!darkMode)} className="transition">
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button onClick={toggleMenu}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md py-4 flex flex-col items-center space-y-4 md:hidden">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;