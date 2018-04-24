import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../actions/authAction';

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      logout: false
    }
  }

  logoutHandler(e){
    e.preventDefault();
    this.props.logout();
    localStorage.clear();
    this.setState({logout: true});
  }

  capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    if (this.props.auth.isAuthenticated) {
      return (
        <div>
          <nav className="navbar">
            <Link to="/" href="/">Sneaker Life</Link>
            <div>{this.capitalize(this.props.auth.user.firstName)}</div>
            <div data-toggle="modal" data-target="#myModal">
              <span className="cartCount">
                {Object.keys(this.props.cart).length === 1? Object.keys(this.props.cart).length + ' item' : Object.keys(this.props.cart).length + ' items'}
              </span>
            </div>
            <div className="col-md-1">
              <a href="#" id="logout-btn" onClick={this.logoutHandler.bind(this)}>Logout</a>
            </div>
          </nav>
        </div>
      );
    }

    return(
      <div>
        <nav className="navbar">
          <Link to="/" href="/">Sneaker Life</Link>
          <Link to="/signup" href="/signup" >Sign Up</Link>
          <Link to="/login" href="/login" >Login</Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;