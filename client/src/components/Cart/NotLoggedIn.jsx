import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class NotLoggedIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signup: false,
      loggedin: false
    }

    this.signupHandler = this.signupHandler.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
  }

  signupHandler() {
    this.setState({signup: true})
  }

  loginHandler() {
    this.setState({loggedin: true})
  }

  render() {
    if (this.state.signup) {
      return <Redirect to="/signup" />
    }

    if (this.state.loggedin) {
      return <Redirect to="/login" />
    }

    return (
      <div>
        <div class="modal fade" id="notloggedin" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content"> 
              <div class="modal-body">
                <h5 class="modal-title" id="exampleModalLabel">Please Sign Up or Login to Your Account</h5>
                <button type="button" class="modal-button" onClick={this.signupHandler} data-dismiss="modal">Sign Up</button>
                <button type="button" class="modal-button" onClick={this.loginHandler} data-dismiss="modal">Login</button>
                {/* <button type="button" class="modal-button" data-dismiss="modal">Close</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotLoggedIn;