const Sachmoi = require('../models/Sachmoi'); 
const { mutipleMongooseToOject } = require('../../utill/mongoose');

class SachmoiController {
    
    // [GET] /sachmois/
    show(req, res, next) {
        Sachmoi.find({})
            .then(sachmois => {
                console.log(sachmois);
                res.render('home', { sachmois: mutipleMongooseToOject(sachmois) });
            })
            .catch(next);
    }

}

module.exports = new SachmoiController;