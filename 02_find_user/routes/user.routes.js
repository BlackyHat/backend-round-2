const router = require('express').Router();
const detectIP = require('../middlewares/detect-ip');

router.get('/', detectIP);

module.exports = { userRouter: router };
