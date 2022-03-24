const Sachthieunhi = require('../models/Sachthieunhi'); 
const { mutipleMongooseToOject } = require('../../utill/mongoose');

class SachthieunhiController {
    
    // [GET] /sachthieunhis/:slug
    show(req, res, next) {
        Sachthieunhi.find({ slug: req.params.slug })
            .then(sachthieunhis => {
                console.log(sachthieunhis)
                res.render('sachthieunhis/show', { sachthieunhis: mutipleMongooseToOject(sachthieunhis) });
            })
            .catch(next);
    }

}

module.exports = new SachthieunhiController;