const router = require('express').Router();
const { getDataController, saveDataController } = require('../controllers');

router.get('*', getDataController);
router.put('*', saveDataController);

module.exports = { storageRouter: router };
