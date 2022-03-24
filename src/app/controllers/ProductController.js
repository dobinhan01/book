const Vanhoc = require('../models/Vanhoc'); 
const { mongooseToOject } = require('../../utill/mongoose');

class VanhocController {
    
    // [GET] /vanhocs/:slug
    show(req, res, next) {
        Vanhoc.findById({ _id: req.params.id })
            .then(product => {
                console.log(product)
                res.render('products/show', { product: mongooseToOject(product)
                });
            })
            .catch(next);
    }

}

module.exports = new VanhocController;