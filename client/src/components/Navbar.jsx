import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../actions/authAction';

class Navbar extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div>
        <nav className="navbar">
          <Link to="/" href="/">Sneaker Life</Link>
          <Link to="/signup" href="/signup" className="btn btn-primary">Sign Up</Link>
          <Link to="/login" href="/login" className="btn btn-primary">Login</Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;