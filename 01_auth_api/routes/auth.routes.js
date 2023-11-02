const router = require('express').Router();
const { signUpController, signInController } = require('../controllers/auth-controller');
const { validateAuth } = require('../validation/auth.validation');

router.post('/sign-up', validateAuth, signUpController);
router.post('/sign-in', validateAuth, signInController);

module.exports = { authRouter: router };
