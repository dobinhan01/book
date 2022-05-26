
class LienheController {

    // [GET] /vanhocs/:slug
    show(req, res) {
        res.render('lienhes/show');
    }
    
}

module.exports = new LienheController;