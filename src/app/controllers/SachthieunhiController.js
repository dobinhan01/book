const Sachthieunhi = require('../models/Sachthieunhi'); 
const { mutipleMongooseToOject } = require('../../utill/mongoose');
const { mongooseToOject } = require('../../utill/mongoose');

class SachthieunhiController {
    
    // [GET] /sachthieunhis/:slug
    show(req, res, next) {
        Sachthieunhi.find({ slug: req.params.slug })
            .then(sachthieunhis => {
                res.render('sachthieunhis/show', { sachthieunhis: mutipleMongooseToOject(sachthieunhis) });
            })
            .catch(next);
    }

    // [GET] /sachthieunhis/:id
    product(req, res, next) {
        Sachthieunhi.findById(req.params.id)
            .then(sachthieunhi => res.render('sachthieunhis/product', { 
                sachthieunhi: mongooseToOject(sachthieunhi)
            }))
            .catch(next);
    }

}

module.exports = new SachthieunhiController;