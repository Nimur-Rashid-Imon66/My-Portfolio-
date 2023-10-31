import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link } from 'react-scroll'
export default function Navber() {
  const [menu, setmenu] = useState(false);
  const links = [
     {
      id: 1,
      title :"home",
      link:"#",
    },
    {
      id: 2,
      title :"about",
      link:"#",
    },
    {
      id: 3,
      title :"portfolio",
      link:"#",
    },
    {
      id: 4,
      title :"contact",
      link:"#",
     },
    
  ]
  
  return (
      <div className="flex justify-between items-center  w-full bg-black h-16 px-4 fixed">
      <div>
          <h1 className=" text-white text-4xl font-bold font-logo  hover:animate-pulse hover:scale-105 duration-200 ">NRI</h1>
      </div>
          
          
      <ul className="hidden md:flex gap-3 text-white mr-4">
          {
          links.map((link) => {
              return <li
                key={link.id} 
                className="capitalize cursor-pointer font-semibold hover:scale-105 duration-200 hover:text-gray-500"
              >
                {/* {link.title} */}
                <Link to={link.title} smooth duration={500}>{link.title}</Link>
              </li>
              
              
            }) 
          }
      </ul>
      <div
        onClick={() => setmenu(!menu)} className="cursor-pointer text-white pr-2 z-10 md:hidden ">
        {menu ? <FaTimes size={30}  /> : <FaBars size={30} />}
      </div>
      {
        menu && (
          <ul
           
            className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 ">
            {links.map((link) => {
              return <li
                key={link.id}
                 
                className=" capitalize cursor-pointer text-4xl text-white  px-4 py-6 font-semibold hover:scale-105 duration-200 hover:text-gray-500">
                {/* {link.title} */}
               <Link onClick={() => setmenu(!menu)} to={link.title} smooth duration={500}>{link.title}</Link>
              </li>
            })}
          </ul>
        )
      }
      
      </div>

    )
 }