import React, { Component } from 'react';
import './wavycircler.webp';
import './wavycirclel.webp';
import './logonowaves-c.png';
import './logo.css';
import './mobile.css';

class Logo extends Component {

  render(){
    return (
      <div className="header-logo">
          <img className="spin-left" src={require("./wavycirclel.webp")} alt="feather"></img>
          <img className="spin-right" src={require("./wavycircler.webp")} alt="feather"></img>
        <img className="static" src={require("./logonowaves-c.png")} alt="feather"></img>

      </div>
    );
  }

}

export default Logo;
