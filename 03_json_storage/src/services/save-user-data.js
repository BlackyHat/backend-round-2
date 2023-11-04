const { writeFile, mkdir } = require('fs/promises');
const path = require('path');

const saveUserData = async (dataPath, userData) => {
  const storagePath = dataPath.split('/').map((el) => el.toLowerCase());
  const storageFileName = `${storagePath.pop()}.json`;
  const userDir = path.join(
    __dirname,
    '..',
    'assets',
    'storage',
    ...storagePath
  );

  try {
    const filePath = path.join(userDir, storageFileName);
    await writeFile(filePath, JSON.stringify(userData), {
      flag: 'w',
      encoding: 'utf-8',
    });
    return;
  } catch (error) {
    if (error.code === 'ENOENT') {
      await mkdir(userDir, { recursive: true });
      return await saveUserData(dataPath, userData);
    }
    throw new Error('JSON file in not valid');
  }
};

module.exports = {
  saveUserData,
};
