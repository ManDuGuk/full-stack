const http = require('http');

const productsApp = require('./apps/products');

// mainApp.use('/products', productsApp);

const server = http.createServer(productsApp);
server.listen(3001, () => {
    console.log('server run...');
});