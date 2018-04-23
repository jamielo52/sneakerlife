import React from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

export default connect(mapStateToProps)(Products);