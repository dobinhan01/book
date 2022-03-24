const express = require('express');
const route = express.Router();

const productController = require('../app/controllers/ProductController');

route.get('/:id', productController.show);

module.exports = route;