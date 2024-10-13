const express = require('express');
const app = express();
const countRouter = require('./count_router');

app.use('/', countRouter);

module.exports = app;