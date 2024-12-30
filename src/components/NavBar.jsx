import React, { useState, useEffect } from 'react';
import Logo from '../assets/img/logo.jpg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleButtonClick = () => {
    const element = document.getElementById('Contact');
    if (element) {
      const yCoordinate = element.offsetTop;
      window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`flex fixed top-0 left-0 items-center justify-between flex-wrap bg-[#c7d9d3] p-6 w-full transition-shadow duration-300 z-50 ${scrollPosition > 0 ? 'shadow-md' : 'shadow-none'}`}>
      <div className="flex items-center text-white mr-2 lg:mr-0 border-solid border-gray-900">
      <Link to="/">
          <img
            className="h-32 w-32 sm:h-27 sm:w-27 md:h-22 md:w-22 lg:h-32 lg:w-32 ml-8 mg:ml-0"
            src={Logo}
            alt="Logo"
          />
         </Link>
      </div>
      <div
        className="block lg:hidden cursor-pointer"
        onClick={handleNav}
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={`w-full lg:flex lg:items-end lg:w-auto ${nav ? 'block' : 'hidden'}`}
      >
        <div className="text-sm lg:flex-grow flex flex-col lg:flex-row justify-right font-bold space-y-4 lg:space-y-0 sm:space-x-6 md:space-x-8 lg:space-x-12">
          <Link
            to="/"
            className="block text-center lg:inline-block lg:mt-0 text-black hover:text-[#271440] transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-110 border-b-2 border-transparent hover:border-[#271440] py-2"
          >
            Principale
          </Link>

          <a
            href="/Contact"
            onClick={handleButtonClick}
            className="block text-center lg:inline-block lg:mt-0 text-black hover:text-[#271440] transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-110 border-b-2 border-transparent hover:border-[#271440] py-2"
          >
            Contact
          </a>

          <a
            href="/portfolio"
            
            className="block text-center lg:inline-block lg:mt-0 text-black hover:text-[#271440] transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-110 border-b-2 border-transparent hover:border-[#271440] py-2"
          >
            Nos Réalisations
          </a>

          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
