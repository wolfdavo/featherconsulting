import React, {Component} from 'react';
import './skill.css';

class Skill extends Component {

  constructor(props) {
    super(props);

    this.state = {
      headsOrTails: true,
      body: this.props.body,
      playState: {
        animationName: 'skill-animation-todark'
      }
    }

    this.flipSkill = this.flipSkill.bind(this);

  }



  flipSkill = () => {

    if (this.state.headsOrTails === true) {
      this.setState({playState: {animationName: 'skill-animation-toblue'}});
      this.setState({headsOrTails: false, body: this.props.details});
    } else {
      this.setState({playState: {animationName: 'skill-animation-todark'}});
      this.setState({headsOrTails: true, body: this.props.body});
    }

    console.log(this.state);
  }

  render() {
    if (this.state.headsOrTails === true) {
      return (<div className="bubble-dark" style={this.state.playState} onClick={this.flipSkill}>
        <div className="skill-body">
          <h4>{this.state.body}</h4>
          <small>- click me! -</small>
        </div>
      </div>);
    } else {
      return (<div className="bubble-blue" style={this.state.playState} onClick={this.flipSkill}>
        <div className="skill-details">
          <p>{this.state.body}</p>
        </div>
      </div>);
    }

  }

}

export default Skill;
