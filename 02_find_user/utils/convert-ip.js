const ip2int = (ip) => {
  const parts = ip.split('.').map(Number);
  if (parts.length !== 4 || parts.some((part) => part < 0 || part > 255)) {
    throw new Error('Invalid IP address format');
  }

  return parts.reduce((ipInt, part) => ipInt * 256 + part, 0);
};

module.exports = { ip2int };
