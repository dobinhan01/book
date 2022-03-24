const express = require('express');
const route = express.Router();

const vanhocController = require('../app/controllers/VanhocController');

route.get('/:slug', vanhocController.show);

module.exports = route;