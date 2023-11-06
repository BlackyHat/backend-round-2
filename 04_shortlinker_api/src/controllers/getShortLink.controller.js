const { getUserLink } = require('../services');

const getShortLinkController = async (req, res, next) => {
  try {
    const shortLink = req.originalUrl;
    const originalLink = await getUserLink(shortLink);

    if (!originalLink) {
      throw new Error('No link founded.');
    }
    res.redirect(301, originalLink);
  } catch (error) {
    next(error);
  }
};

module.exports = getShortLinkController;
