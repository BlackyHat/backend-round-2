const router = require('express').Router();
const { validateLink } = require('../validation/validateLink');
const {
  getShortLinkController,
  saveShortLinkController,
} = require('../controllers');

router.get('*', getShortLinkController);
router.post('/', validateLink, saveShortLinkController);

module.exports = { shortlinkRouter: router };
