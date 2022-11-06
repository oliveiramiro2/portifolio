import React from 'react';
import Netflix from '../../../Assets/netflix.png';
import Breve from '../../../Assets/breve.png';

import './index.css';

const Projects = () => (
  <div className="containProjects">
    <div>
      <p className="textProjects">Projetos</p>
    </div>
    <div className="containProjectsImgs">
      <img className="imgsProject" src={Netflix} alt="Netflix" />
      <img className="imgsProject imgsProjectsEmpty" src={Breve} alt="Breve" />
      <img className="imgsProject imgsProjectsEmpty" src={Breve} alt="Breve" />
      <img className="imgsProject imgsProjectsEmpty" src={Breve} alt="Breve" />
      <img className="imgsProject imgsProjectsEmpty" src={Breve} alt="Breve" />
      <img className="imgsProject imgsProjectsEmpty" src={Breve} alt="Breve" />
      <img className="imgsProject imgsProjectsEmpty" src={Breve} alt="Breve" />
    </div>
    <div>
      <iframe
        id="appetize"
        src="https://appetize.io/embed/cvh2wophkqedythyg56ra4rv6y?device=iphone11pro"
        title="netflix"
        width="378px"
        height="800px"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  </div>
);

export default Projects;
