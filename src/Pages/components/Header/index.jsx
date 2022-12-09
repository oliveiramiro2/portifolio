import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import './index.css';

const Header = () => (
  <header className="contain">
    <div className="containIconsLeft">
      <a href="https://github.com/oliveiramiro2" target="_blank" rel="noreferrer" className="text">
        <AiFillGithub color="#fff" size={25} />
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/oliveiramiro2" target="_blank" rel="noreferrer" className="text">
        <AiFillLinkedin color="#fff" size={25} />
        Linkedin
      </a>
    </div>
    <div className="containTextRight">
      <ul>
        <li>
          <a href="#aboutUs" className="text">Sobre mim</a>
        </li>
        <li>
          <a href="#skills" className="text">Habilidades</a>
        </li>
        <li>
          <a href="#projects" className="text">Projetos</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
