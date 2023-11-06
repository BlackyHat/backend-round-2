const { saveUserLink } = require('../services');

const saveShortLinkController = async (req, res, next) => {
  try {
    const { link } = req.body;
    const { host } = req.headers;
    const protocol = req.secure ? 'https:' : 'http:';

    const shortLink = await saveUserLink({ link, host, protocol });
    res.status(200).json({ success: true, shortLink });
  } catch (error) {
    next(error);
  }
};

module.exports = saveShortLinkController;
