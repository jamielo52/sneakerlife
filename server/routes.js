import express from 'express';
import signupController from './controllers/signupController';
import loginController from './controllers/loginController';
import chargeController from './controllers/chargeController';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ensureToken from './auth/ensureToken';

const router = express.Router();

router.route('/signup')
  .post(signupController.signup);

router.route('/login')
  .post(loginController.login);

router.route('/charge')
  .post(chargeController.charge);

export default router;
