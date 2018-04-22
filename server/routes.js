import express from 'express';
import signupController from './controllers/signupController';
import loginController from './controllers/loginController';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ensureToken from './auth/ensureToken';

const router = express.Router();

router.route('/signup')
  .post(signupController.signup);

router.route('/login')
  .post(loginController.login);

export default router;
