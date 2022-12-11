import React from 'react';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
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
    <Footer />
  </div>
);

export default Home;
