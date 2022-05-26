const Vanhoc = require('../models/Vanhoc'); 
const Sachthieunhi = require('../models/Sachthieunhi'); 
const Sachkinhte = require('../models/Sachkinhte'); 
const Sachngoaingu = require('../models/Sachngoaingu'); 
const { mutipleMongooseToOject } = require('../../utill/mongoose');

class SiteController {
    
    // [GET] /
    index(req, res, next) {
        
        // Vanhoc.find({})
        // .then(vanhocs => {
        //     res.render('home', { 
        //         vanhocs: mutipleMongooseToOject(vanhocs) 
        //     });
        // })
        // .catch(next);

        Vanhoc.find({})
            .then(vanhocs => {
                Sachthieunhi.find({})
                    .then(sachthieunhis => {
                        Sachkinhte.find({})
                            .then(sachkinhtes => {
                                Sachngoaingu.find({})
                                    .then(sachngoaingus => {
                                        res.render('home', {
                                            vanhocs: mutipleMongooseToOject(vanhocs),
                                            sachthieunhis: mutipleMongooseToOject(sachthieunhis),
                                            sachkinhtes: mutipleMongooseToOject(sachkinhtes),
                                            sachngoaingus: mutipleMongooseToOject(sachngoaingus) 
                                        })
                                    })
                            })
                    })
            .catch(next);
        })

    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

}

module.exports = new SiteController;