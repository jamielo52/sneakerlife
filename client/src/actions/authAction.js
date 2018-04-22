import axios from 'axios';
import setAuthToken from '../../utils/setAuthTokens';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER } from './types' ;

export function setCurrentUser(user){
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  return dispatch => {
     return axios.post('/login', data).then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      dispatch(setCurrentUser(jwt.decode(token)));
      return res;
    }).catch(err => {
      return err;
    })
  }
}