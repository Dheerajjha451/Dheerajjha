import React from 'react';
import { FaGithub } from 'react-icons/fa';
import project1Image from '../assets/StudBud1.jpeg';
import project2Image from '../assets/QRAttendance.jpeg';
import project3Image from '../assets/wordlist.png';
import project4Image from '../assets/mtb.png';
import project5Image from '../assets/2.jpeg';
import project6Image from '../assets/news.png';

interface Project {
  title: string;
  description: string;
  githubLink: string;
  image: string; 
}

const projects: Project[] = [
  {
    title: 'StudBud',
    description: 'StudBud is not just an app; it is your ultimate academic companion, dedicated to keeping students informed and engaged. In the whirlwind of academic life, it is easy to miss important opportunities and updates. That where StudBud steps in. Our mission is simple: to provide you with authentic, up-to-date information regarding academics and student life.',
    githubLink: 'https://github.com/Dheerajjha451/StudBud',
    image: project1Image,
  },
  {
    title: 'QR-Code Attendance System',
    description: 'The QR Code Attendance System is an efficient, fast and user-friendly tool for tracking attendance using QR codes. This system is designed to work seamlessly when devices are connected to the Same College Local Network. The faculty can display the QR Code using classroom projector so that present students can scan and mark their attendance.',
    githubLink: 'https://github.com/Dheerajjha451/QR-Attendance-System',
    image: project2Image,
  },
  {
    title: 'Wordlist Generator',
    description: 'It is a web application designed to automate various functions related to wordlist generation and management. It provides a user-friendly interface to assist ethical hackers in downloading personalized wordlists. The project includes features such as secure login and signup pages, password recovery, and the ability to generate wordlists based on user input.',
    githubLink: 'https://github.com/Dheerajjha451/wordlist.github.io',
    image: project3Image,
  },
  {
    title: 'MTB',
    description: 'Explore a world of cinematic wonders, captivating TV shows, thought-provoking podcasts, and animated adventures with our handpicked selections. Whether you are in the mood for a gripping drama, a laugh-out-loud comedy, a mind-bending anime, or an engaging podcast, MediaMinds has you covered. Our expertly curated lists cater to diverse tastes.',
    githubLink: 'https://github.com/Dheerajjha451/Recomendatrion-Website',
    image: project4Image,
  },
  {
    title: 'NewsSD',
    description: 'NewsSD delivers a swift and comprehensive overview of the latest events, ensuring you stay well-informed on global affairs, technology breakthroughs, cultural shifts, and more. With a focus on speed and accuracy, NewsSD keeps you ahead of the news curve. Explore our platform for quick, reliable updates that fit your fast-paced lifestyle.',
    githubLink: 'https://github.com/Dheerajjha451/News',
    image: project5Image,
  },
  {
    title: 'News-Mental-health',
    description: 'Welcome to the Mental Health News Website, a platform dedicated to providing timely and relevant news and information related to mental health. This website is built using HTML and Django, combining a user-friendly interface with the power of a robust web framework to deliver a seamless experience for users seeking information on mental health.',
    githubLink: 'https://github.com/Dheerajjha451/News-Mental-health',
    image: project6Image,
  },
];
const ProjectCard: React.FC<Project> = ({ title, description, githubLink, image }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      setIsHovered(!isHovered);
    }
  };

  return (
    <div
      className="relative group rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 mb-8 md:mb-0 md:w-96"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      onClick={handleClick}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center p-6 text-center text-white bg-black bg-opacity-75 ${
          isHovered ? 'visible' : 'hidden'
        }`}
      >
        <p className="text-2xl md:text-xl font-semibold mb-2 text-white">{title}</p>
        <p className="text-gray-300 text-sm md:text-base mb-4">{description}</p>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 text-2xl text-white"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold mb-6 text-black text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  {projects.map((project, index) => (
    <div key={index} className="p-3 md:p-6">
      <ProjectCard {...project} />
    </div>
  ))}
</div>
    </div>
  );
};

export default Projects;