module.exports = (_, res) => {
  res
    .status(404)
    .json({ status: 'false', error: 'Oops! Resource not found...' });
};
