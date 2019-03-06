import React, {Component} from 'react';
import './work.css';

class Work extends Component {
  render() {
    return (<div className="work">
      <a href={this.props.link}>
        <h2>{this.props.title}</h2>
      </a>
    </div>);
  }
}

export default Work;
