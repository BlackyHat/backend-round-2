const { getData } = require('./db.service');

const getUserLink = async (shortLink) => {
  try {
    const existsLinks = await getData();

    const [link] = existsLinks.filter((existLink) => {
      const existingURL = new URL(existLink.shortLink);
      return existingURL.pathname === shortLink;
    });

    if (link && link.originalLink) {
      return link.originalLink;
    } else {
      throw new Error('No link found');
    }
  } catch (error) {
    throw new Error(error.message || error.status);
  }
};

module.exports = getUserLink;
