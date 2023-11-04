const { saveUserData } = require('../services/save-user-data');

const saveDataController = async (req, res, next) => {
  try {
    const json_path = req.originalUrl;
    const userData = req.body;

    if (!json_path || !userData) {
      throw new Error('Path or file is wrong');
    }
    if (!req.is('application/json')) {
      throw new Error('JSON file in not valid');
    }
    await saveUserData(json_path, userData);
    res.status(200).json({ ...userData });
  } catch (error) {
    next(error);
  }
};

module.exports = saveDataController;
