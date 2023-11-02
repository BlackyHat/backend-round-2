const { readFile, writeFile } = require('fs/promises');
const path = require('path');

const DIR_PATH = path.join(
  __dirname,
  '..',
  'assets',
  'IP2LOCATION-LITE-DB1.CSV'
);

const getCountriesIP = async () => {
  try {
    const data = await readFile(DIR_PATH, 'utf8');
    return data.split('\r\n');
  } catch (error) {
    throw new Error('Ivalid CSV database');
  }
};

module.exports = { getCountriesIP };
