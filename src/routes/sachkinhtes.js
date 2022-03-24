const express = require('express');
const route = express.Router();

const sachkinhteController = require('../app/controllers/SachkinhteController');

route.get('/:slug', sachkinhteController.show);

module.exports = route;