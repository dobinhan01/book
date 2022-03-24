const Sachngoaingu = require('../models/Sachngoaingu'); 
const { mutipleMongooseToOject } = require('../../utill/mongoose');

class SachngoainguController {
    
    // [GET] /sachngoaingus/:slug
    show(req, res, next) {
        Sachngoaingu.find({ slug: req.params.slug })
            .then(sachngoaingus => {
                res.render('sachngoaingus/show', { sachngoaingus: mutipleMongooseToOject(sachngoaingus) });
            })
            .catch(next);
    }

}

module.exports = new SachngoainguController;