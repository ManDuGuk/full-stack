var http = require('http');
var express = require('express');
var cors = require('cors')

const countApp = require('./app');
const mainApp = express();

mainApp.use('/count', countApp);
mainApp.use(cors());
mainApp.use("/", express.static('public'))


const server = http.createServer(mainApp);
server.listen(3000, function () {
    console.log('running server');
})