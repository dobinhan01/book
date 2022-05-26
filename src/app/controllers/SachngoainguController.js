const Sachngoaingu = require('../models/Sachngoaingu'); 
const { mutipleMongooseToOject } = require('../../utill/mongoose');
const { mongooseToOject } = require('../../utill/mongoose');

class SachngoainguController {
    
    // [GET] /sachngoaingus/:slug
    show(req, res, next) {
        Sachngoaingu.find({ slug: req.params.slug })
            .then(sachngoaingus => {
                res.render('sachngoaingus/show', { sachngoaingus: mutipleMongooseToOject(sachngoaingus) });
            })
            .catch(next);
    }

    // [GET] /sachngoaingus/:id
    product(req, res, next) {
        Sachngoaingu.findById(req.params.id)
            .then(sachngoaingu => res.render('sachngoaingus/product', { 
                sachngoaingu: mongooseToOject(sachngoaingu)
            }))
            .catch(next);
    }

}

module.exports = new SachngoainguController;