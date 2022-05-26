const express = require('express');
const route = express.Router();

const cartController = require('../app/controllers/CartController');

route.get('/', cartController.show);

module.exports = route;