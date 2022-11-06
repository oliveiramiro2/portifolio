import React from 'react';
import AboutUs from '../components/AboutUs';
import Header from '../components/Header';
import Skills from '../components/Skills';

import './index.css';

const Home = () => (
  <div className="containAll">
    <Header />
    <AboutUs />
    <Skills />
    {/* <div className="containTitle">
      <h1>Protifólio Ramiro</h1>
    </div> */}
  </div>
);

export default Home;
