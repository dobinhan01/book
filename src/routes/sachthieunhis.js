const express = require('express');
const route = express.Router();

const sachthieunhiController = require('../app/controllers/SachthieunhiController');

route.get('/:slug', sachthieunhiController.show);

module.exports = route;