import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { navigationLinks } from '../data/navigationLinks';
import { PERSONAL_INFO } from '../constants';

/**
 * Modern navigation bar component with glassmorphism and scroll effects
 * @returns {JSX.Element} Navbar component
 */
export default function Navbar() {
  const [menu, setmenu] = useState(false);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 bg-white/10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="home" smooth duration={500} className="cursor-pointer">
              <h1 className="text-white text-3xl md:text-4xl font-bold font-logo relative group">
                <span className="relative z-10 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent hover:from-orange-400 hover:to-orange-500 transition-all duration-300">
                  {PERSONAL_INFO.initials}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
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
                  activeClass="text-orange-500 border-orange-500"
                  className="capitalize cursor-pointer px-4 py-2 text-gray-300 hover:text-orange-500 transition-colors duration-300 relative group text-sm font-medium"
                >
                  <span className="relative z-10">{link.title}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
            <li>
              <a 
                href={PERSONAL_INFO.resumePath} 
                download
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 text-sm"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div
            onClick={() => setmenu(!menu)}
            className="md:hidden cursor-pointer text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300 z-50 relative"
          >
            {menu ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
        menu ? 'visible' : 'invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity duration-300 ${
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
                  className="capitalize text-3xl text-white font-semibold hover:text-orange-500 transition-colors duration-300 cursor-pointer block text-center relative group"
                >
                  <span className="relative">
                    {link.title}
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
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
                className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xl font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50"
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
