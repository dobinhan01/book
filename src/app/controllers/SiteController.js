const Vanhoc = require('../models/Vanhoc'); 
const { mutipleMongooseToOject } = require('../../utill/mongoose');

class SiteController {
    
    // [GET] /
    index(req, res, next) {

        Vanhoc.find({})
            .then(vanhocs => {
                res.render('home', { 
                    vanhocs: mutipleMongooseToOject(vanhocs) 
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

}

module.exports = new SiteController;