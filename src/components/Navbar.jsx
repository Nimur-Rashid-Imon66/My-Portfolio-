import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { navigationLinks } from '../data/navigationLinks';
import { PERSONAL_INFO } from '../constants';

/**
 * Navigation bar component with mobile menu support
 * @returns {JSX.Element} Navbar component
 */
export default function Navbar() {
  const [menu, setmenu] = useState(false);

  return (
    <div className="flex justify-between items-center w-full bg-black h-16 px-4 fixed font-inter z-[1]">
      <div>
        <h1 className="text-white text-4xl font-bold font-logo hover:animate-pulse hover:scale-105 duration-200">
          {PERSONAL_INFO.initials}
        </h1>
      </div>

      <ul className="hidden md:flex gap-8 text-white mr-4">
        {navigationLinks.map((link) => {
          return (
            <li
              key={link.id}
              className="capitalize cursor-pointer hover:scale-105 duration-200 hover:text-gray-500"
            >
              <Link to={link.title} smooth duration={500}>
                {link.title}
              </Link>
            </li>
          );
        })}
        <li
          key={8}
          className="capitalize cursor-pointer hover:scale-105 duration-200 hover:text-gray-500"
        >
          <a href={PERSONAL_INFO.resumePath} download>
            Resume
          </a>
        </li>
      </ul>

      <div
        onClick={() => setmenu(!menu)}
        className="cursor-pointer text-white pr-2 z-10 md:hidden"
      >
        {menu ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {menu && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
          {navigationLinks.map((link) => {
            return (
              <li
                key={link.id}
                className="capitalize cursor-pointer text-4xl text-white px-4 py-6 font-semibold hover:scale-105 duration-200 hover:text-gray-500"
              >
                <Link
                  onClick={() => setmenu(!menu)}
                  to={link.title}
                  smooth
                  duration={500}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}

          <li
            key={8}
            className="capitalize cursor-pointer text-4xl text-white px-4 py-6 font-semibold hover:scale-105 duration-200 hover:text-gray-500"
          >
            <a href={PERSONAL_INFO.resumePath} download>
              Resume
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}