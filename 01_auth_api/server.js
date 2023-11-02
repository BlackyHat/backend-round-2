const app = require('./app');
const db = require('./db');

const { PORT, DB_PORT, DB_HOST, DB_DATABASE } = process.env;

const SERVER_PORT = PORT || 8081;
(async () => {
  console.log(
    '\x1b[34m',
    `\n PosgresSQL DB connected on port ==> ${DB_PORT},\n on host ==> ${DB_HOST},\n name ==> ${DB_DATABASE}\n`
  );
  await db.createTable();
})();

app.listen(SERVER_PORT, () => {
  console.log(
    '\x1b[33m',
    `Server running. Use our API on port: ${SERVER_PORT}\n`,
    '\x1b[0m'
  );
});
