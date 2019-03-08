import React, { Component } from 'react';
import './wavycircler.svg';
import './wavycirclel.svg';
import './logonowaves.svg';
import './logo.css';
import './mobile.css';

class Logo extends Component {

  render(){
    return (
      <div className="header-logo">
          <img className="spin-left" src={require("./wavycirclel.svg")} alt="feather"></img>
          <img className="spin-right" src={require("./wavycircler.svg")} alt="feather"></img>
        <img className="static" src={require("./logonowaves.svg")} alt="feather"></img>

      </div>
    );
  }

}

export default Logo;
