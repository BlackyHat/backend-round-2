const express = require('express');
const { storageRouter } = require('./routes/storage.routes');

const app = express();
app.use(express.json());

app.use('/', storageRouter);
app.use(require('./middlewares/error-handler'));

module.exports = app;
