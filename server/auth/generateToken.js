import jwt from 'jsonwebtoken';
import config from './config';

const generateToken = (user) => {
  var currUser = {
   firstName: user.firstName,
   lastName: user.lastName,
   id: user.id.toString(),
   email: user.email
  };
  return jwt.sign(currUser, config.jwtSecret, {
     expiresIn: 60 * 60 * 24 // expires in 24 hours
  });
}

export default generateToken;