const { BadRequestError } = require('../utils/app-errors');

module.exports = {
  validateAuth: (req, res, next) => {
    function minLength(data, length) {
      return String(data).length >= length ? true : false;
    }
    function maxLength(data, length) {
      return String(data).length <= length ? true : false;
    }
    function isEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    }
    const { email, password } = req.body;

    const isEmailValid =
      minLength(email, 3) && maxLength(email, 32) && isEmail(email);
    const isPasswordValid = minLength(password, 6) && maxLength(password, 32);

    if (!isEmailValid || !isPasswordValid) {
      throw new BadRequestError('Email or password is not valid.');
    }

    next();
  },
};
