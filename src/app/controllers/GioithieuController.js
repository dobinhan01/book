
class GioithieuController {

    // [GET] /gioithieus/nha-xuat-ban
    show1(req, res) {
        res.render('gioithieus/nha-xuat-ban/show');
    }
    
    // [GET] /gioithieus/nha-sach
    show2(req, res) {
        res.render('gioithieus/nha-sach/show');
    }
    
}

module.exports = new GioithieuController;