const express = require('express');
const route = express.Router();

const vanhocController = require('../app/controllers/VanhocController');

route.get('/:id/product', vanhocController.product);
route.get('/:slug', vanhocController.show);
route.get('/', vanhocController.show);

module.exports = route;