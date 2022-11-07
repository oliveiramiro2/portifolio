import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import './index.css';

const Header = () => (
  <header className="contain">
    <div className="containIconsLeft">
      <a href="https://github.com/oliveiramiro2" target="_blank" rel="noreferrer">
        <AiFillGithub color="#fff" size={25} />
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/oliveiramiro2" target="_blank" rel="noreferrer">
        <AiFillLinkedin color="#fff" size={25} />
        Linkedin
      </a>
    </div>
    <div className="containTextRight">
      <p className="text">Sobre mim</p>
      <p className="text">Habilidades</p>
      <p className="text">Projetos</p>
    </div>
  </header>
);

export default Header;
