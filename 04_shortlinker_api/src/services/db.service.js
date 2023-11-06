const { writeFile, readFile } = require('fs/promises');
const path = require('path');
const DB_PATH = path.join(__dirname, '..', 'assets', 'db', 'links.json');

module.exports = {
  getData: async () => {
    const data = await readFile(DB_PATH, 'utf8');
    return JSON.parse(data);
  },
  setData: async (data) => {
    await writeFile(DB_PATH, JSON.stringify(data), {
      flag: 'w',
      encoding: 'utf-8',
    });
  },
};
