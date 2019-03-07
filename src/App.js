import React, { Component } from 'react';
import Header from './header/logo.js';
import Services from './services-section/services.js';
import SkillsetSection from './skillset/skillset.js';
import PreviousWork from './previous-work/previous-work.js'
import Footer from './footer/footer.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="whole-body">
        <Header/>
        <Services/>
        <SkillsetSection/>
        <PreviousWork/>
        <Footer/>
      </div>

    );
  }
}

export default App;
