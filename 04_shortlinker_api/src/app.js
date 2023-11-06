const express = require('express');
const { shortlinkRouter } = require('./routes/shortLink.routes');

const app = express();
app.use(express.json());

app.use('/', shortlinkRouter);
app.use(require('./middlewares/errorHandler'));

module.exports = app;
