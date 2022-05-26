const express = require('express');
const route = express.Router();

const gioithieuController = require('../app/controllers/GioithieuController');

route.get('/nha-xuat-ban', gioithieuController.show1);
route.get('/nha-sach', gioithieuController.show2);

module.exports = route;