const express = require('express');
const app = express();
const serveStatic = require('serve-static');
const path = require('path');

app.set('port', 8085);

//pulbic에 있는 파일 접급해서사용가능
app.use('/', serveStatic(path.join(__dirname, 'public')));

module.exports = app;