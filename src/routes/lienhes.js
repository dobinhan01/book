const express = require('express');
const route = express.Router();

const lienheController = require('../app/controllers/LienheController');

route.get('/', lienheController.show);

module.exports = route;