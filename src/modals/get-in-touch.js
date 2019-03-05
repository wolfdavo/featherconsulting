import React, {Component} from 'react';
import './get-in-touch.css';

class ContactModal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: ''
    }

      this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (<div className="formModal">
      <div className="modal fade" id="contactModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Lets get started!</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">

              <div>
                <form action="#">

                  <div className="form-group">
                    <label>First Name</label>
                    <input className="form-control" type="text" id="fname" name="firstname" placeholder="Your name.." value={this.state.fname}
                      onChange={e => this.setState({ fname: e.target.value })}/>
                  </div>

                  <div className="form-group">
                    <label>Last Name</label>
                    <input className="form-control" type="text" id="lname" name="lastname" placeholder="Your last name.." value={this.state.lname} onChange={e => this.setState({ lname: e.target.value })}/>
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" type="email" id="email" name="email" placeholder="Your email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}/>
                  </div>

                  <div className="form-group">
                    <label>Subject</label>
                    <textarea className="form-control" id="subject" name="subject" placeholder="How can we help?" onChange={e => this.setState({ message: e.target.value })}
                      value={this.state.message}></textarea>
                  </div>

                  <input className="btn btn-primary" type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit"/>
                </form>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>)
  }

}

export default ContactModal;
