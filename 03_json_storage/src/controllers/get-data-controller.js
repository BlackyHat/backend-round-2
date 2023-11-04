const { getUserData } = require('../services/get-user-data');

const getDataController = async (req, res, next) => {
  try {
    const json_path = req.originalUrl;

    if (!json_path) {
      throw new Error('Path or file name is wrong');
    }
    const userData = await getUserData(json_path);

    res.status(200).json({ ...userData });
  } catch (error) {
    next(error);
  }
};

module.exports = getDataController;
