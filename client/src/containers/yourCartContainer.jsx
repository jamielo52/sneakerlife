import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import YourCart from '../components/Cart/YourCart';
import yourCartAction from '../actions/yourCartAction';

const mapStateToProps = (state) => {
  return {yourCart: state.cart}
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({
    yourCartAction: yourCartAction,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(YourCart);

