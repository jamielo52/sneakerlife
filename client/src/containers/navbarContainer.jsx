import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { logout } from '../actions/authAction';

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

export default connect(mapStateToProps, { logout })(Navbar);