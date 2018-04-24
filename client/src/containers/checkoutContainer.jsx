import React from 'react';
import { connect } from 'react-redux';
import Checkout from '../components/Checkout/index';

const mapStateToProps = (state) => {
  return {
    yourCart: state.cart,
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Checkout);

