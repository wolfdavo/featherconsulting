import React, { Component } from 'react';
import Work from './work/work.js';
import './previous-work.css'


class PreviousWork extends Component {

  render(){
    return(
      <div className="previous-work-section">

        <div className="row portfolio-header">
          <div className="col-12">
            <h1>portfolio</h1>
          </div>
        </div>

        <div className="seedpodz" data-aos="fade-right" data-aos-duration="1000">
          <Work title="Seedpodz.com" link="https://seedpodz.com/"/>
        </div>
        <div className="bintowa" data-aos="fade-right" data-aos-duration="1000">
          <Work title="Bintowa.com" link="https://bintowa.com/"/>
        </div>
      </div>
    );
  }


}

export default PreviousWork;
