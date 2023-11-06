const app = require('./src/app');

const SERVER_PORT = 8080;

app.listen(SERVER_PORT, () => {
  console.log(
    '\x1b[35m',
    `Server running. Use our API on port: ${SERVER_PORT}\n`,
    '\x1b[0m'
  );
});
