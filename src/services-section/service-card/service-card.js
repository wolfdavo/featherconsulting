import React, { Component } from 'react';
import './service-card.css';

class ServiceCard extends Component {

  render() {
    return(
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">{this.props.body}</p>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#contactModal">
            Inquire Now!
          </button>
        </div>
      </div>
    );
  }
}

export default ServiceCard;
