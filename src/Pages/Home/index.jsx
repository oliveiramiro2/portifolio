import React from 'react';
import AboutUs from '../components/AboutUs';
import Header from '../components/Header';

import './index.css';

const Home = () => (
  <div className="containAll">
    <Header />
    <AboutUs />
    {/* <div className="containTitle">
      <h1>Protifólio Ramiro</h1>
    </div> */}
  </div>
);

export default Home;
