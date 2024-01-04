import React from 'react';
import Navbar from "../Components/Navbar";
import Projects from "../Components/Project";
import Blogs from "../Components/Blogs";
import Footer from "../Components/Footer";
import Skills from '../Components/Skills';
import Services from '../Components/Services';
import { Fade } from "react-awesome-reveal";
import Hero from '../Components/Hero';

const Home: React.FC = () => {
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
        <Services />
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

export default Home;
