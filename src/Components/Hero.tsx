import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaFileDownload, FaMedium } from 'react-icons/fa';
import image from '../assets/Dheeraj.jpeg';
import resumePDF from '../assets/Resume.pdf';

const Hero: React.FC = () => {
  return (
    <section className="hero-section bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 lg:p-16 pt-16 lg:pt-24 flex flex-col lg:flex-row items-center justify-center h-screen relative overflow-hidden">
      <div className="lg:w-1/2 mr-4 xl:w-1/4 text-center lg:text-left mb-8 lg:mb-0 relative z-10">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 lg:mb-4">
          <span className="text-yellow-300">Hello,</span> I'm Dheeraj Jha
        </h1>
        <p className="text-base lg:text-lg xl:text-xl mb-6 lg:mb-8">
          UI/UX Designer and Full Stack Developer with a passion for creating beautiful and intuitive digital experiences.
        </p>
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/dheeraj-jha451/" target="_blank" rel="noopener noreferrer" className="group">
            <FaLinkedin className="text-3xl lg:text-4xl xl:text-5xl hover:text-blue-300 transition-all duration-300 group-hover:ring-4 group-hover:ring-blue-300" />
          </a>
          <a href="https://github.com/dheerajjha451" target="_blank" rel="noopener noreferrer" className="group">
            <FaGithub className="text-3xl lg:text-4xl xl:text-5xl hover:text-gray-300 transition-all duration-300 group-hover:ring-4 group-hover:ring-gray-300" />
          </a>
          <a href="https://twitter.com/dheerajjha451" target="_blank" rel="noopener noreferrer" className="group">
            <FaTwitter className="text-3xl lg:text-4xl xl:text-5xl hover:text-blue-300 transition-all duration-300 group-hover:ring-4 group-hover:ring-blue-300" />
          </a>
          <a href="https://medium.com/@dheerajjha451" target="_blank" rel="noopener noreferrer" className="group">
            <FaMedium className="text-3xl lg:text-4xl xl:text-5xl hover:text-blue-300 transition-all duration-300 group-hover:ring-4 group-hover:ring-blue-300" />
          </a>
        </div>
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-700 py-1 px-2 rounded-full flex items-center hover:bg-gray-200 transition-all duration-300 mt-2 text-sm lg:text-base"
        >
          <FaFileDownload className="mr-1" />
          Download Resume
        </a>
      </div>

      <div className="lg:w-1/2 xl:w-2/6 mt-8 lg:mt-0 lg:ml-8 xl:ml-16 transition-transform transform hover:scale-110">
        <img
          className="w-72 h-72 lg:w-96 lg:h-96 xl:w-120 xl:h-120 rounded-full mx-auto lg:mx-0 lg:ml-8 mb-4 lg:mb-0 hover:ring-4 ring-blue-300"
          src={image}
          alt="Profile"
        />
      </div>
    </section>
  );
};

export default Hero;
