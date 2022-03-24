const Sachkinhte = require('../models/Sachkinhte'); 
const { mutipleMongooseToOject } = require('../../utill/mongoose');

class SachkinhteController {
    
    // [GET] /sachkinhtes/:slug
    show(req, res, next) {
        Sachkinhte.find({ slug: req.params.slug })
            .then(sachkinhtes => {
                res.render('sachkinhtes/show', { sachkinhtes: mutipleMongooseToOject(sachkinhtes) });
            })
            .catch(next);
    }

}

module.exports = new SachkinhteController;