const express = require('express');
const route = express.Router();

const sachngoainguController = require('../app/controllers/SachngoainguController');

route.get('/:id/product', sachngoainguController.product);
route.get('/:slug', sachngoainguController.show);

module.exports = route;