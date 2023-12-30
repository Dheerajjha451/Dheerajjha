import React from 'react';
import Navbar from "../Components/Navbar";
import Projects from "../Components/Project";
import Blogs from "../Components/Blogs";
import Footer from "../Components/Footer";
import Skills from '../Components/Skills';
import { Fade } from "react-awesome-reveal";
import Hero from '../Components/Hero';

const Work: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <Fade>
        <Hero /> 
      </Fade>
      <Fade>
        <Skills />
      </Fade>
      <Fade>
        <Projects />
      </Fade>
      <Fade>
        <Blogs />
      </Fade>
      <Footer />
    </div>
  );
};

export default Work;
