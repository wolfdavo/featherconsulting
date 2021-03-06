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
          <ServiceCard title={"WEBSITE MAINTENENCE AND PROBLEM SOLVING"} body={"Can't quite get something to work on your website and want a second eye? I can give you a hand, whether it be front-end styling or back-end scripting - I won't charge a cent until I fix your problem. $30/hr."}/>
        </div>
        <div data-aos="flip-up" data-aos-duration="500">
          <ServiceCard popular={'popular'} title={"SMALL BUSINESS WEB PAGE"} body={"Are you a small business or organisation looking to get online? This is the option for you! I charge $300 upfront for a three page website, with hosting and server management for only $1/day. My hourly rate for any aditional changes is $30/hr, and I can take care of logos and branding for you at that rate aswell."}/>
        </div>
        <div data-aos="fade-left" data-aos-duration="500">
          <ServiceCard title={"LARGE SCALE WEBSITE DEVELOPMENT"} body={"If you're looking for something a little more complex - such as database architecture, custom e-commerce sites, or anything involving a bit more backend work I can help too! Pricing for these projects is by obligation-free quote."}/>
        </div>
      </div>

      {/* MODALS */}
      <ContactModal/>

    </div>);
  }
}

export default Services;
