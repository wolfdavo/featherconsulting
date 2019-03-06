import React, {Component} from 'react';
import './skill.css';

class Skill extends Component {

  constructor(props) {
    super(props);

    this.state = {
      headsOrTails: true,
      body: this.props.body
    }

    this.flipSkill = this.flipSkill.bind(this);

  }

  flipSkill = () => {
    if (this.state.headsOrTails === true) {
      this.setState({headsOrTails: false, body: this.props.details});
    } else {
      this.setState({headsOrTails: true, body: this.props.body});
    }
    console.log(this.state);
  }

  render() {
    if (this.state.headsOrTails === true) {
      return (<div className="bubble" onClick={this.flipSkill}>
        <div className="skill-body">
          <h4>{this.state.body}</h4>
        </div>
      </div>);
    } else {
      return (<div className="bubble" onClick={this.flipSkill}>
        <div className="skill-details">
          <p>{this.state.body}</p>
        </div>
      </div>);
    }

  }

}

export default Skill;
