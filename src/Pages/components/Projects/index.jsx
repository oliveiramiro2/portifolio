import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { BiArrowBack } from 'react-icons/bi';

import Netflix from '../../../Assets/netflix.png';
import Pokedex from '../../../Assets/Pokedex.png';
import Youtube from '../../../Assets/youtube.png'
import Breve from '../../../Assets/breve.png';

import './index.css';

const projectsKeys = [
  {
    id: 0,
    value: 'l5vwa3gsaqewdnjkuw6a5hx62u',
    gitRepository: 'https://github.com/oliveiramiro2/NetflixClone',
    describe: 'Um clone do aplicativo Netflix usando React-Native e Typescript',
    mobile: true,
  },
  {
    id: 1,
    value: 'https://pokedex-ramiro.netlify.app/',
    gitRepository: 'https://github.com/oliveiramiro2/pokedex-updated',
    describe: 'Uma pokédex criada com ReactJs e Typescript, além de libs como Styled Components e Material UI',
    mobile: false,
  },
  {
    id: 2,
    value: 'ij45o7aynaz4ovu7bnppllvq3u',
    gitRepository: 'https://github.com/oliveiramiro2/RNYoutubeInferface',
    describe: 'Um clone do aplicativo Youtube usando React-Native e Typescript',
    mobile: true,
  },
];

const Projects = () => {
  const [numberProjectShowed, setNumberProjectShowed] = useState(undefined);

  return (
    <div className="containProjects">
      <div>
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          <h2 id="projects" className="textProjects">Projetos</h2>
        </ScrollAnimation>
      </div>
      {numberProjectShowed === undefined
        ? (
          <div className="containProjectsImgs">
            <div className="containProject">
                <p className="textDescribe">Netflix</p>
                <img className="imgsProject" src={Netflix} alt="Netflix" onClick={() => setNumberProjectShowed(0)} width={100} height={100} />
            </div>
            <div className="containProject">
                <p className="textDescribe">Pokédex</p>
                <img className="imgsProject" src={Pokedex} alt="Pokedex" onClick={() => setNumberProjectShowed(1)} width={100} height={100} />
            </div>
            <div className="containProject">
                <p className="textDescribe">Youtube</p>
                <img className="imgsProject" src={Youtube} alt="Youtube" onClick={() => setNumberProjectShowed(2)} width={100} height={100} />
            </div>
            <div className="containProject">
                <p className="textDescribe">Em Breve</p>
                <img className="imgsProject imgsProjectsEmpty" src={Breve} alt="Breve" width={100} height={100} />
            </div>
            <div className="containProject">
                <p className="textDescribe">Em Breve</p>
                <img className="imgsProject imgsProjectsEmpty" src={Breve} alt="Breve" width={100} height={100} />
            </div>
            <div className="containProject">
                <p className="textDescribe">Em Breve</p>
                <img className="imgsProject imgsProjectsEmpty" src={Breve} alt="Breve" width={100} height={100} />
            </div>
            <div className="containProject">
                <p className="textDescribe">Em Breve</p>
                <img className="imgsProject imgsProjectsEmpty" src={Breve} alt="Breve" width={100} height={100} />
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
              {projectsKeys[numberProjectShowed].mobile
                ? <p className="textDescribe">Uma prévia será aberta com o appetize a direita da tela!</p>
                : (<p className="textDescribe">
                    <a href={projectsKeys[numberProjectShowed].value} target="_blank" rel="noreferrer">O Link do site</a>
                  </p>)}
              <p className="textDescribe">Aprecie :D</p>
              <a href={projectsKeys[numberProjectShowed].gitRepository} target="_blank" rel="noreferrer">Repositório no GitHub</a>
            </div>
            {projectsKeys[numberProjectShowed].mobile
            && <iframe
                    id="appetize"
                    src={`https://appetize.io/embed/${projectsKeys[numberProjectShowed].value}?device=pixel4`}
                    title="netflix"
                    height="700px"
                    width="320px"
                    frameBorder="0"
                    scrolling="no"
                />}
          </div>
        )}
    </div>
  );
};

export default Projects;
