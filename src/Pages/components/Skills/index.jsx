import React from 'react';
import Html5 from '../../../Assets/HTML5.png';
import Css3 from '../../../Assets/CSS3.png';
import JavaScript from '../../../Assets/js.png';
import TypeScript from '../../../Assets/ts.png';
import ReactJs from '../../../Assets/react.png';
import Node from '../../../Assets/node.png';
import Figma from '../../../Assets/figma.png';

import './index.css';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat velit scelerisque in dictum non. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Diam maecenas ultricies mi eget. Erat imperdiet sed euismod nisi porta. Nibh tellus molestie nunc non. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Amet purus gravida quis blandit turpis cursus. Ridiculus mus mauris vitae ultricies. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Iaculis eu non diam phasellus vestibulum lorem sed. Ut tortor pretium viverra suspendisse. Ut tellus elementum sagittis vitae et leo duis ut. Dui accumsan sit amet nulla facilisi morbi tempus. Sed enim ut sem viverra aliquet eget sit amet tellus. Sed viverra tellus in hac habitasse platea dictumst. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Ut enim blandit volutpat maecenas. Aenean vel elit scelerisque mauris pellentesque pulvinar.';

const Skills = () => (
  <div className="containSkills">
    <div>
      <p className="textSkills">Habilidades</p>
    </div>
    <div className="containSkillImgs">
      <div className="imgSkill">
        <img src={Html5} alt="Html5" height={120} width={120} />
      </div>
      <div className="imgSkill">
        <img src={Css3} alt="Css3" height={120} width={120} />
      </div>
      <div className="imgSkill">
        <img src={JavaScript} alt="JavaScript" height={120} width={120} />
      </div>
      <div className="imgSkill">
        <img src={TypeScript} alt="TypeScript" height={120} width={120} />
      </div>
      <div className="imgSkill react">
        <img src={ReactJs} alt="React-Js" height={120} width={120} />
      </div>
      <div className="imgSkill">
        <img src={Node} alt="Node" height={120} width={120} />
      </div>
      <div className="imgSkill">
        <img src={Figma} alt="Figma" height={120} width={120} />
      </div>
    </div>
    <div className="containDescriptionSkill">
      <span className="textSkills">
        {text}
      </span>
    </div>
  </div>
);

export default Skills;
