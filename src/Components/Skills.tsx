import React from 'react';
import { FaGit, FaGithub, FaFigma, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaSass, FaBootstrap, FaJava, FaPython, FaDocker, FaAws, FaNodeJs, FaLinux, FaDatabase } from 'react-icons/fa';
import {  Zoom } from 'react-awesome-reveal';

const skillsData = [
  { name: 'Git', icon: FaGit },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Figma', icon: FaFigma },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'JavaScript', icon: FaJs },
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNode },
  { name: 'Sass', icon: FaSass },
  { name: 'Bootstrap', icon: FaBootstrap },
  { name: 'Java', icon: FaJava },
  { name: 'Python', icon: FaPython },
  { name: 'Docker', icon: FaDocker },
  { name: 'AWS', icon: FaAws },
  { name: 'Express.js', icon: FaNodeJs },
  { name: 'Linux', icon: FaLinux },
  { name: 'MongoDB', icon: FaDatabase }
];

const Skills: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-16 p-4 md:p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center">
        {skillsData.map((skill, index) => (
          <Zoom key={index}>
            <div className="flex items-center justify-center text-center skill-item p-4 m-4 bg-white rounded-md shadow-md transition-transform transform hover:scale-105">
              {React.createElement(skill.icon, { className: "text-4xl text-blue-500 mb-2" })}
              <span className="text-lg mt-2">
                {skill.name}
              </span>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Skills;
