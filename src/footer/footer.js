import React, {Component} from 'react';
import './footer.css';
import './mobile.css';
import ContactModal from '../modals/get-in-touch.js'

class Footer extends Component {

  render() {
    return (<div className="footer">

      <div className="footer-element">
        <a href="tel:6514429483">
          <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
            <path d="M25.302,0H9.698c-1.3,0-2.364,1.063-2.364,2.364v30.271C7.334,33.936,8.398,35,9.698,35h15.604
              c1.3,0,2.364-1.062,2.364-2.364V2.364C27.666,1.063,26.602,0,25.302,0z M15.004,1.704h4.992c0.158,0,0.286,0.128,0.286,0.287
              c0,0.158-0.128,0.286-0.286,0.286h-4.992c-0.158,0-0.286-0.128-0.286-0.286C14.718,1.832,14.846,1.704,15.004,1.704z M17.5,33.818
              c-0.653,0-1.182-0.529-1.182-1.183s0.529-1.182,1.182-1.182s1.182,0.528,1.182,1.182S18.153,33.818,17.5,33.818z M26.021,30.625
            H8.979V3.749h17.042V30.625z"/></svg>
        </a>
      </div>

      <div className="footer-element">
        <a data-toggle="modal" data-target="#contactModal">

          <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">

            <path d="M7,9L5.268,7.484l-4.952,4.245C0.496,11.896,0.739,12,1.007,12h11.986
            c0.267,0,0.509-0.104,0.688-0.271L8.732,7.484L7,9z"/>
            <path d="M13.684,2.271C13.504,2.103,13.262,2,12.993,2H1.007C0.74,2,0.498,2.104,0.318,2.273L7,8
            L13.684,2.271z"/>
            <polygon points="0,2.878 0,11.186 4.833,7.079 		"/>
            <polygon points="9.167,7.079 14,11.186 14,2.875 		"/>

          </svg>
        </a>
      </div>

      <div className="footer-element">
        <a href="https://www.linkedin.com/in/david-wolfenden-a328a6178/">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
      </div>

      <ContactModal/>

    </div>);
  }

}

export default Footer;
