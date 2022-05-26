const newsRoute = require('./news');
const vanhocsRoute = require('./vanhocs');
const sachthieunhisRoute = require('./sachthieunhis');
const sachkinhtesRoute = require('./sachkinhtes');
const sachngoaingusRoute = require('./sachngoaingus');
const cartsRoute = require('./carts');
const gioithieusRoute = require('./gioithieus');
const lienhesRoute = require('./lienhes');
const sachmoisRoute = require('./sachmois');
const siteRoute = require('./site');

function route(app) {
    
    app.use('/news', newsRoute);
    app.use('/vanhocs', vanhocsRoute);
    app.use('/sachthieunhis', sachthieunhisRoute);
    app.use('/sachkinhtes', sachkinhtesRoute);
    app.use('/sachngoaingus', sachngoaingusRoute);
    app.use('/carts', cartsRoute);
    app.use('/gioithieus', gioithieusRoute);
    app.use('/lienhes', lienhesRoute);
    app.use('/', siteRoute);

}

module.exports = route;