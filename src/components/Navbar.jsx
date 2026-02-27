import { useState } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { navigationLinks } from '../data/navigationLinks';
import { PERSONAL_INFO } from '../constants';
import { useTheme } from '../context/ThemeContext';

/**
 * Modern navigation bar component with glassmorphism, theme toggle, and scroll effects
 * @returns {JSX.Element} Navbar component
 */
export default function Navbar() {
  const [menu, setmenu] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="home" smooth duration={500} className="cursor-pointer">
              <h1 className="text-3xl md:text-4xl font-bold font-logo relative group">
                <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent hover:from-indigo-500 hover:to-indigo-300 transition-all duration-300">
                  {PERSONAL_INFO.initials}
                </span>
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <Link 
                  to={link.title} 
                  smooth 
                  duration={500}
                  spy={true}
                  activeClass="!text-indigo-600 dark:!text-indigo-400"
                  className="capitalize cursor-pointer px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 relative group text-sm font-medium"
                >
                  <span className="relative z-10">{link.title}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-indigo-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={toggleTheme}
                className="ml-2 p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>
            </li>
            <li>
              <a 
                href={PERSONAL_INFO.resumePath} 
                download
                className="ml-3 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 text-sm"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <div
              onClick={() => setmenu(!menu)}
              className="cursor-pointer text-slate-700 dark:text-white p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-300 z-50 relative"
            >
              {menu ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
        menu ? 'visible' : 'invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md transition-opacity duration-300 ${
            menu ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setmenu(false)}
        ></div>
        
        {/* Menu Content */}
        <div className={`relative h-full flex flex-col justify-center items-center transition-transform duration-300 ${
          menu ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <ul className="space-y-6">
            {navigationLinks.map((link, index) => (
              <li 
                key={link.id}
                className={`transform transition-all duration-300 delay-${index * 50} ${
                  menu ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
              >
                <Link
                  onClick={() => setmenu(false)}
                  to={link.title}
                  smooth
                  duration={500}
                  className="capitalize text-3xl text-slate-700 dark:text-white font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 cursor-pointer block text-center relative group"
                >
                  <span className="relative">
                    {link.title}
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-indigo-600 to-indigo-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                  </span>
                </Link>
              </li>
            ))}
            <li className={`transform transition-all duration-300 delay-${navigationLinks.length * 50} ${
              menu ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <a 
                href={PERSONAL_INFO.resumePath} 
                download
                className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-xl font-semibold rounded-full hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
                onClick={() => setmenu(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
