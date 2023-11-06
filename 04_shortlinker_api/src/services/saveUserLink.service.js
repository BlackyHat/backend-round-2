const { getData, setData } = require('./db.service');
const { createShortLink } = require('../utils/createShortLink');

const saveUserLink = async ({ link: originalLink, host, protocol }) => {
  const shortLink = createShortLink(host, protocol);

  try {
    const existsLinks = await getData();

    const [link] = existsLinks.filter(
      (existLink) => existLink.originalLink === originalLink
    );
    if (link && link.shortLink) {
      return link.shortLink;
    } else {
      existsLinks.push({ shortLink, originalLink });
      await setData(existsLinks);
      return shortLink;
    }
  } catch (error) {
    throw new Error(error.message || error.status);
  }
};

module.exports = saveUserLink;
