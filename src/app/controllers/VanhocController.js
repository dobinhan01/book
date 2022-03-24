const Vanhoc = require('../models/Vanhoc'); 
const { mutipleMongooseToOject } = require('../../utill/mongoose');

class VanhocController {
    
    // [GET] /vanhocs/:slug
    show(req, res, next) {
        Vanhoc.find({ slug: req.params.slug })
            .then(vanhocs => {
                res.render('vanhocs/show', { vanhocs: mutipleMongooseToOject(vanhocs) });
            })
            .catch(next);
    }
}

module.exports = new VanhocController;