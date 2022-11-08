import React from 'react';
import AboutUs from '../components/AboutUs';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

import './index.css';

const Home = () => (
  <div className="containAll">
    <Header />
    <AboutUs />
    <Skills />
    <Projects />
  </div>
);

export default Home;
