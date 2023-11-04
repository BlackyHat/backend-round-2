const { readFile } = require('fs/promises');
const path = require('path');

const getUserData = async (dataPath) => {
  const storagePath = dataPath.split('/').map((el) => el.toLowerCase());
  const storageFileName = `${storagePath.pop()}.json`;
  const filePath = path.join(
    __dirname,
    '..',
    'assets',
    'storage',
    ...storagePath,
    storageFileName
  );
  try {
    const userData = await readFile(filePath, 'utf8');
    return JSON.parse(userData);
  } catch (error) {
    throw new Error('No file found by this path');
  }
};

module.exports = {
  getUserData,
};
