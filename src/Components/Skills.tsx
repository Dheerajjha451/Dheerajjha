import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  
  faGit, 
  faGithub, 
  faFigma, 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faReact, 
  faNode, 
  faSass, 
  faBootstrap, 
  faJava,
  faPython,
  faDocker,
  faAws,
  faNodeJs,
  faLinux,
} from '@fortawesome/free-brands-svg-icons';

const skillsData = [
  { name: 'Git', icon: faGit },
  { name: 'GitHub', icon: faGithub },
  { name: 'Figma', icon: faFigma },
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS3', icon: faCss3Alt },
  { name: 'JavaScript', icon: faJs },
  { name: 'React', icon: faReact },
  { name: 'Node.js', icon: faNode },
  { name: 'Sass', icon: faSass },
  { name: 'Bootstrap', icon: faBootstrap },
  { name: 'Java', icon: faJava },
  { name: 'Python', icon: faPython },
  { name: 'Docker', icon: faDocker },
  { name: 'AWS', icon: faAws },
  { name: 'Express.js', icon: faNodeJs},
  { name: 'Linux', icon: faLinux },
];

const Skills: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-16 p-4 md:p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center skill-item transition-transform transform hover:scale-105">
            <FontAwesomeIcon icon={skill.icon} className="text-4xl text-blue-500 mb-2" />
            <span className="text-lg bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
