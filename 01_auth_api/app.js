const express = require('express');
const { authRouter, userRouter } = require('./routes');

const app = express();

app.use(express.json());
app.use('/auth', authRouter);
app.use('/me', userRouter);

app.all('*', require('./middlewares/bad-url-error'));
app.use(require('./middlewares/error-handler'));

module.exports = app;
