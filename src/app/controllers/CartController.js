const Cart = require('../models/Cart'); 
const { mutipleMongooseToOject } = require('../../utill/mongoose');
const { mongooseToOject } = require('../../utill/mongoose');

class CartController {

    // [GET] /carts/:slug
    show(req, res, next) {
        Cart.find({})
            .then(carts => {
                res.render('carts/show', { carts: mutipleMongooseToOject(carts) });
            })
            .catch(next);
    }

}

module.exports = new CartController;