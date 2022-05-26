const express = require('express');
const route = express.Router();

const siteController = require('../app/controllers/SiteController');
const vanhocController = require('../app/controllers/VanhocController');

route.get('/:id/product', vanhocController.product);
route.use('/search', siteController.search);
route.use('/', siteController.index);

module.exports = route;