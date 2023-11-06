module.exports = {
  createShortLink: (host, protocol = 'http:/') => {
    return protocol.concat('/', host, createShorter());
  },
};

function createShorter(linkLength = 8) {
  let shortLink = '/';
  for (let i = 0; i < linkLength; i += 1) {
    const letter = getRandomLetter();
    shortLink += letter;
  }
  return shortLink;
}

function getRandomLetter() {
  const min = 65;
  const max = 122;
  const randomCharCode = Math.floor(Math.random() * (max - min + 1)) + min;
  if (randomCharCode > 90 && randomCharCode < 97) {
    return getRandomLetter();
  }
  return String.fromCharCode(randomCharCode);
}
