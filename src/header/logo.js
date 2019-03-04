import React, { Component } from 'react';
import './wavycircler.png';
import './wavycirclel.png';
import './logonowaves.png';
import './logo.css';
import './mobile.css';

class Logo extends Component {

  render(){
    return (
      <div className="header-logo">
          <img className="spin-left" src={require("./wavycirclel.png")} alt="feather"></img>
          <img className="spin-right" src={require("./wavycircler.png")} alt="feather"></img>
        <img className="static" src={require("./logonowaves.png")} alt="feather"></img>

      </div>
    );
  }

}

export default Logo;
