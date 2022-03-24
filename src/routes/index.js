const newsRoute = require('./news');
const vanhocsRoute = require('./vanhocs');
const sachthieunhisRoute = require('./sachthieunhis');
const sachkinhtesRoute = require('./sachkinhtes');
const sachngoaingusRoute = require('./sachngoaingus');
const productsRoute = require('./products');
const sachmoisRoute = require('./sachmois');
const siteRoute = require('./site');

function route(app) {
    
    app.use('/news', newsRoute);
    app.use('/vanhocs', vanhocsRoute);
    app.use('/sachthieunhis', sachthieunhisRoute);
    app.use('/sachkinhtes', sachkinhtesRoute);
    app.use('/sachngoaingus', sachngoaingusRoute);
    app.use('/', productsRoute);
    app.use('/',sachmoisRoute);
    app.use('/', siteRoute);

}

module.exports = route;