const { ip2int, getCountriesIP } = require('../utils');

module.exports = async (req, res, next) => {
  try {
    const { clientIP } = req.body;
    const ipAddress =
      clientIP || req.header('x-forwarded-for') || req.socket.remoteAddress;

    const userIpInt = ip2int(ipAddress);
    const ipByCountries = await getCountriesIP();

    const [userCountry] = ipByCountries.filter((country, idx) => {
      const [startInt, endInt] = country.replace(/"/g, '').split(',');
      return parseInt(startInt) <= userIpInt && userIpInt <= parseInt(endInt);
    });

    const [_, __, countryCode, countryName] = userCountry
      .replace(/"/g, '')
      .split(',');

    console.log({
      countryName,
      countryCode,
      ipAddress,
    });

    res.send({ countryName, countryCode, ipAddress });
  } catch (error) {
    next(new Error(error.message));
  }
};
