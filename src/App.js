import React, { Component } from 'react';
import Header from './header/logo.js';
import Services from './services-section/services.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="whole-body">
        <Header/>
        <Services/>
      </div>

    );
  }
}

export default App;
