const Vanhoc = require('../models/Vanhoc'); 
const { mutipleMongooseToOject } = require('../../utill/mongoose');
const { mongooseToOject } = require('../../utill/mongoose');

class VanhocController {

    // [GET] /vanhocs/:slug
    show(req, res, next) {
        Vanhoc.find({ slug: req.params.slug })
            .then(vanhocs => {
                res.render('vanhocs/show', { vanhocs: mutipleMongooseToOject(vanhocs) });
            })
            .catch(next);
    }

    // [GET] /vanhocs/:id
    product(req, res, next) {
        Vanhoc.findById(req.params.id)
            .then(vanhoc => res.render('vanhocs/product', { 
                vanhoc: mongooseToOject(vanhoc)
            }))
            .catch(next);
    }
    
}

module.exports = new VanhocController;