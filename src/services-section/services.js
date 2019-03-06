import React, {Component} from 'react';
import ServiceCard from './service-card/service-card.js'
import ContactModal from '../modals/get-in-touch.js'
import './services.css';
import './service-mobile.css';

class Services extends Component {

  render() {
    return (<div className="services-body">

      <div className="title">
        <h1>services</h1>
      </div>

      <div className="cards">

        <div data-aos="fade-right" data-aos-duration="500">
          <ServiceCard title={"WEBSITE MAINTENENCE AND PROBLEM SOLVING"} body={"Can't quite get something to work on your website and want a second eye? I can give you a hand, wether it be front-end styling or back-end scripting - we don't charge a cent until we fix your problem."}/>
        </div>
        <div data-aos="flip-up" data-aos-duration="500">
          <ServiceCard popular={'popular'} title={"SMALL BUSINESS WEB PAGE"} body={"Are you a small business or organisation looking to get online? Our small business web page package is prefect for you! - NO UP FRONT COST - starting at just USD $30 a month, we will get a beautiful website built and hosted just for you, start to finish."}/>
        </div>
        <div data-aos="fade-left" data-aos-duration="500">
          <ServiceCard title={"LARGE SCALE WEBSITE DEVELOPMENT"} body={"If you're looking for something a little more complex - such as database architecture, custom e-commerce sites, or anything involving a bit more backend work we can help too! Pricing by obligation-free quote."}/>
        </div>
      </div>

      {/* MODALS */}
      <ContactModal/>

    </div>);
  }
}

export default Services;
