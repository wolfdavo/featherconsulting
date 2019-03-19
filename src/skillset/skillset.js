import React, {Component} from 'react';
import Skill from './skill/skill.js';
import './skillset.css';

class SkillsetSection extends Component {

  render() {
    return (<div className="skillset-section">

      <div className="row skills-header">
        <div className="col-12">
          <h1>skillset</h1>
        </div>
      </div>

      <div className="bubbles-wrapper">

        <Skill float="left" body="HTML, CSS, & JavaScript" details="As a web developer, these are my three main tools. I build the skeleton for your site in HTML, give it some style with CSS, and bring it to life with JavaScript."/>

        <Skill float="right" body="React JS" details="React is a powerfull frontend framework. It allows us to write versatile and flexible code when designing the front end. This very website is made with React!"/>

        <Skill float="right" body="WordPress" details="I have used WordPress for over 2 years now. It is perfect for blogs or any site where you want to publish lots of information regularly."/>

        <Skill float="right" body="Photoshop" details="With past experience in graphic design, I use photoshop along with some other tools to design logos and branding for your business."/>

        <Skill float="right" body="Marketing" details="I am very familiar with Facebook's advertising algorithms. This is usefull when it comes to marketing, and helps to get better results."/>

        <Skill float="right" body="IT Knowledge" details="Growing up with computers my whole life and having a passion for understanding how they work is usefull for solving odd problems."/>


      </div>
    </div>);
  }

}

export default SkillsetSection;
