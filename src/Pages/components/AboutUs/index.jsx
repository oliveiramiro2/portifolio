import React, { useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Image from '../../../Assets/Ramiro.png';

import './index.css';

const AboutUs = () => {
  const writeInfo = (elementT) => {
    const elementText = elementT;
    const text = elementText.innerHTML.split('');
    elementText.innerHTML = '';
    text.forEach((value, index) => {
      setTimeout(() => {
        elementText.innerHTML += value;
      }, 100 * index);
    });
  };

  useEffect(() => {
    const elementText = document.querySelector('#textMyInfo');
    writeInfo(elementText);
  }, []);

  return (
    <div className="containAbout">
      <h1 className="textInfoPage">Protifólio Ramiro Mares de Oliveira</h1>
      <ScrollAnimation animateIn="fadeIn">
        <div className="containContentAbout contentPicture">
          <img alt="Ramiro" src={Image} />
        </div>
      </ScrollAnimation>
      <div className="containContentAbout">
        <p id="textMyInfo" className="textAbout">Desenvolvedor Web/Mobile. Estudante de TI, apaixonado por tecnologia e programação!!!</p>
      </div>
    </div>
  );
};

export default AboutUs;
