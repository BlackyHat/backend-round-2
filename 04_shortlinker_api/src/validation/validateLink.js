module.exports = {
  validateLink: (req, res, next) => {
    try {
      const { link } = req.body;
      const newUrl = new URL(link);

      if (newUrl.protocol === 'http:' || newUrl.protocol === 'https:') {
        next();
      } else {
        throw new Error('Link is not valid.');
      }
    } catch (err) {
      next(err);
    }
  },
};
