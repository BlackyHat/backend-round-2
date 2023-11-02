const app = require('./app');

const SERVER_PORT = 8080;
const IP_MASK = '0.0.0.0';

app.listen(SERVER_PORT, IP_MASK, () => {
  console.log(
    '\x1b[35m',
    `Server running. Use our API on port: ${SERVER_PORT}\n`,
    '\x1b[0m'
  );
});
