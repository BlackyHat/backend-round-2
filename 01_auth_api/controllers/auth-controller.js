const { signUp, signIn } = require('../services');

const signInController = async (req, res, next) => {
  try {
    const { id, access_token, refresh_token } = await signIn(req.body);

    res.status(200).json({
      success: 'true',
      data: { id, access_token, refresh_token },
    });
  } catch (error) {
    next(error);
  }
};

const signUpController = async (req, res, next) => {
  try {
    const { id, access_token, refresh_token } = await signUp(req.body);

    res.status(201).json({
      success: 'true',
      data: { id, access_token, refresh_token },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { signInController, signUpController };
