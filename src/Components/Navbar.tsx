import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface SVGIconProps {
  children: React.ReactNode;
}

const SVGIcon: React.FC<SVGIconProps> = ({ children }) => {
  return <motion.div whileHover={{ scale: 1.1 }}>{children}</motion.div>;
};

const Navigation: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navbarVariants = {
    opacity: isSticky ? 1 : 0.9,
  };

  return (
    <motion.nav
      className={`bg-gradient-to-r from-blue-500 to-blue-800 text-white transition duration-500 ease-in-out ${
        isSticky ? 'fixed top-0 w-full z-50' : ''
      }`}
      style={navbarVariants}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className={`brand text-xl sm:text-2xl font-bold hover:text-yellow-300 transition duration-300 ${
            isSticky ? 'p-4' : ''
          }`}
        >
          dheerajjha451@gmail.com
        </Link>

        <div className="hidden sm:flex space-x-4 items-center">
          <Link
            to="/home"
            className={`nav-link flex items-center hover:text-yellow-300 transition duration-300 ${
              isSticky ? 'p-2' : ''
            }`}
          >
            <SVGIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 sm:w-7 sm:h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </SVGIcon>
            <span className="ml-2">Home</span>
          </Link>

          <Link
            to="/work"
            className={`nav-link flex items-center hover:text-yellow-300 transition duration-300 ${
              isSticky ? 'p-2' : ''
            }`}
          >
            <SVGIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 sm:w-7 sm:h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </SVGIcon>
            <span className="ml-2">Work</span>
          </Link>
        </div>

        <div className="sm:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 sm:w-7 sm:h-7"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 sm:w-7 sm:h-7"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <ul
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } sm:hidden space-y-2 items-center`}
      >
        <li>
          <Link
            to="/home"
            className={`nav-link flex items-center hover:text-yellow-300 transition duration-300 ${
              isSticky ? 'p-2' : ''
            }`}
          >
            <SVGIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 sm:w-7 sm:h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </SVGIcon>
            <span className="ml-2">Home</span>
          </Link>
        </li>

        <li>
          <Link
            to="/work"
            className={`nav-link flex items-center hover:text-yellow-300 transition duration-300 ${
              isSticky ? 'p-2' : ''
            }`}
          >
            <SVGIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 sm:w-7 sm:h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </SVGIcon>
            <span className="ml-2">Work</span>
          </Link>
        </li>

      </ul>
    </motion.nav>
  );
};

export default Navigation;
