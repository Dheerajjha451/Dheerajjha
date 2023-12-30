import React from 'react';
import Navbar from "../Components/Navbar";
import Projects from "../Components/Project";
import Blogs from "../Components/Blogs";
import Footer from "../Components/Footer";
import { Fade } from "react-awesome-reveal";



const Work: React.FC = () => {
  return (
    <div className="">
      <Navbar />
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
