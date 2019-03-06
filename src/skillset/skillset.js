import React, { Component } from 'react';
import Skill from './skill/skill.js';
import './skillset.css';


class SkillsetSection extends Component {


  render(){
    return(
      <div>
        <Skill body="HTML, CSS, & JAVASCRIPT" details="As a web developer, these are my three main tools. I build the skeleton for your site in HTML, give it some style with CSS, and bring it to life with JavaScript."/>
      </div>
    );
  }

}

export default SkillsetSection;
