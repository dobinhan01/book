const Sachkinhte = require('../models/Sachkinhte'); 
const { mutipleMongooseToOject } = require('../../utill/mongoose');
const { mongooseToOject } = require('../../utill/mongoose');

class SachkinhteController {
    
    // [GET] /sachkinhtes/:slug
    show(req, res, next) {
        Sachkinhte.find({ slug: req.params.slug })
            .then(sachkinhtes => {
                res.render('sachkinhtes/show', { sachkinhtes: mutipleMongooseToOject(sachkinhtes) });
            })
            .catch(next);
    }

    // [GET] /sachkinhtes/:id
    product(req, res, next) {
        Sachkinhte.findById(req.params.id)
            .then(sachkinhte => res.render('sachkinhtes/product', { 
                sachkinhte: mongooseToOject(sachkinhte)
            }))
            .catch(next);
    }

}

module.exports = new SachkinhteController;