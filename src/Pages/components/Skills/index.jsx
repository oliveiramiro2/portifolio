import React, { useState, useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Html5 from '../../../Assets/HTML5.png';
import Css3 from '../../../Assets/CSS3.png';
import JavaScript from '../../../Assets/js.png';
import TypeScript from '../../../Assets/ts.png';
import ReactJs from '../../../Assets/react.png';
import Node from '../../../Assets/node.png';
import Figma from '../../../Assets/figma.png';

import './index.css';

const skillsDescribes = [
  {
    id: 0,
    describe: 'HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML. Usado para estruturação da página.',
  },
  {
    id: 1,
    describe: 'CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets, pela qual se define estilos para um projeto web. Com efeitos de transição, imagem, imagem de fundo/background e outros, pode-se criar estilos únicos para seus projetos web, alterando diversos aspectos de design no layout da página.',
  },
  {
    id: 2,
    describe: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. E uma das linguagens de programação mais usadas no mundo.',
  },
  {
    id: 3,
    describe: 'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.',
  },
  {
    id: 4,
    describe: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. Criada para resolver o problema de comunicação entre diversas partes do front-end de um página Web, criada pela Meta dona do Facebook, Instagram e Whatsapp. O React-Native segue a mesma lógica, porém é usado para criação de aplicativos mobile multiplataforma(Android/IOS) usando apenas um código.',
  },
  {
    id: 5,
    describe: 'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.',
  },
  {
    id: 6,
    describe: 'Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web, com ferramentas offline adicionais para aplicações desktop para GNU/Linux, macOS e Windows.',
  },
];

const Skills = () => {
  const [numberShowSkill, setNumberShowSkill] = useState(0);

  useEffect(() => {
    skillsDescribes.forEach((element) => {
      if (element.id === numberShowSkill) {
        document.getElementById(`containImg${element.id}`).classList.add('imgSkillSeleted');
      } else {
        document.getElementById(`containImg${element.id}`).classList.remove('imgSkillSeleted');
      }
    });
  }, [numberShowSkill]);

  return (
    <div className="containSkills">
      <div>
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          <h2 className="textSkills">Habilidades</h2>
        </ScrollAnimation>
      </div>
      <div className="containSkillImgs">
        <div id="containImg0" className="imgSkill">
          <img onClick={() => setNumberShowSkill(0)} src={Html5} alt="Html5" height={120} width={120} />
        </div>
        <div id="containImg1" className="imgSkill">
          <img onClick={() => setNumberShowSkill(1)} src={Css3} alt="Css3" height={120} width={120} />
        </div>
        <div id="containImg2" className="imgSkill">
          <img onClick={() => setNumberShowSkill(2)} src={JavaScript} alt="JavaScript" height={120} width={120} />
        </div>
        <div id="containImg3" className="imgSkill">
          <img onClick={() => setNumberShowSkill(3)} src={TypeScript} alt="TypeScript" height={120} width={120} />
        </div>
        <div id="containImg4" className="imgSkill">
          <img onClick={() => setNumberShowSkill(4)} src={ReactJs} alt="React-Js" height={120} width={120} />
        </div>
        <div id="containImg5" className="imgSkill">
          <img onClick={() => setNumberShowSkill(5)} src={Node} alt="Node" height={120} width={120} />
        </div>
        <div id="containImg6" className="imgSkill">
          <img onClick={() => setNumberShowSkill(6)} src={Figma} alt="Figma" height={120} width={120} />
        </div>
      </div>
      <div className="containDescriptionSkill">
        <span className="textSkills">
          {skillsDescribes[numberShowSkill].describe}
        </span>
      </div>
    </div>
  );
};

export default Skills;
