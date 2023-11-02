const router = require('express').Router();
const { authMiddleware } = require('../middlewares/auth-middleware');
const { userController } = require('../controllers/users-controller');

router.get('/', authMiddleware, userController);

module.exports = { userRouter: router };
