import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { BiArrowBack } from 'react-icons/bi';
import Netflix from '../../../Assets/netflix.png';
import Breve from '../../../Assets/breve.png';

import './index.css';

const projectsKeys = [
  {
    id: 0,
    value: 'cvh2wophkqedythyg56ra4rv6y',
    describe: 'Um clone do aplicativo Netflix usando React-Native',
  },
];

const Projects = () => {
  const [numberProjectShowed, setNumberProjectShowed] = useState(undefined);

  return (
    <div className="containProjects">
      <div>
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          <p className="textProjects">Projetos</p>
        </ScrollAnimation>
      </div>
      {numberProjectShowed === undefined
        ? (
          <div className="containProjectsImgs">
            <div className="containProject">
              <p className="textDescribe">Netflix</p>
              <img className="imgsProject" src={Netflix} alt="Netflix" onClick={() => setNumberProjectShowed(0)} />
            </div>
            <div className="containProject">
              <p className="textDescribe">Em Breve</p>
              <img className="imgsProject imgsProjectsEmpty" src={Breve} alt="Breve" />
            </div>
            <div className="containProject">
              <p className="textDescribe">Em Breve</p>
              <img className="imgsProject imgsProjectsEmpty" src={Breve} alt="Breve" />
            </div>
            <div className="containProject">
              <p className="textDescribe">Em Breve</p>
              <img className="imgsProject imgsProjectsEmpty" src={Breve} alt="Breve" />
            </div>
            <div className="containProject">
              <p className="textDescribe">Em Breve</p>
              <img className="imgsProject imgsProjectsEmpty" src={Breve} alt="Breve" />
            </div>
            <div className="containProject">
              <p className="textDescribe">Em Breve</p>
              <img className="imgsProject imgsProjectsEmpty" src={Breve} alt="Breve" />
            </div>
            <div className="containProject">
              <p className="textDescribe">Em Breve</p>
              <img className="imgsProject imgsProjectsEmpty" src={Breve} alt="Breve" />
            </div>
          </div>
        )
        : (
          <div className="containIFrame">
            <div>
              <div className="containBackProjects">
                <p className="textDescribe" onClick={() => setNumberProjectShowed(undefined)}>
                  <BiArrowBack size="20px" />
                  {' '}
                  Voltar
                </p>
              </div>
              <p className="textDescribe">{projectsKeys[numberProjectShowed].describe}</p>
              <a href="https://github.com/oliveiramiro2/NetflixClone" target="_blank" rel="noreferrer">Repositório no GitHub</a>
            </div>
            <iframe
              id="appetize"
              src={`https://appetize.io/embed/${projectsKeys[numberProjectShowed].value}?device=iphone11pro`}
              title="netflix"
              height="700px"
              width="320px"
              frameBorder="0"
              scrolling="no"
            />
          </div>
        )}
    </div>
  );
};

export default Projects;