import { combineReducers } from 'redux';
import auth from './authReducer';
import yourCartReducer from './yourCartReducer';

const allReducers = combineReducers({
  cart: yourCartReducer,
  auth
});

export default allReducers;