const { AppError } = require('../utils/app-errors');

const userController = async (req, res, next) => {
  try {
    const { id, email } = req.user;
    res.status(200).json({ success: 'true', data: { id, email } });
  } catch (error) {
    next(new AppError({ status: 500, message: error.message }));
  }
};

module.exports = { userController };
