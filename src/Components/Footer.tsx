import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaMedium } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-blue-800 text-white p-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center justify-center lg:justify-start mb-4 lg:mb-0">
          <p className="text-center lg:text-left">&copy; 2023 Dheeraj Jha. All Rights Reserved.</p>
        </div>
        <div className="flex items-center justify-center lg:justify-end space-x-4">
          <a href="https://github.com/dheerajjha451" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-lg hover:text-yellow-300 transition-all duration-300" />
          </a>
          <a href="https://twitter.com/dheerajjha451" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-lg hover:text-yellow-300 transition-all duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/dheeraj-jha451/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-lg hover:text-yellow-300 transition-all duration-300" />
          </a>
          <a href="https://medium.com/@dheerajjha451" target="_blank" rel="noopener noreferrer" className="group">
            <FaMedium className="text-lg hover:text-yellow-300 transition-all duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
