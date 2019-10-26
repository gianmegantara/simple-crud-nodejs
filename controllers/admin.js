const Barang = require('../model/barang');

exports.getIndex = (req, res, next) => {
    Barang.ambilDataBarang(barang => {
        res.render('index', {
            listBarang: barang,
            namaHalaman: 'List Barang'
        });
    });
};

exports.getTambahBarang = (req, res, next) => {
    res.render('form-barang', {
        namaHalaman: 'Tambah Barang',
        halamanEdit: false
    });
};

exports.postTambahBarang = (req, res, next) => {
    const namaBarang = req.body.namaBarang;
    const urlGambar = req.body.urlGambar;
    const hargaBarang = req.body.hargaBarang;
    const deskripsiBarang = req.body.deskripsiBarang;

    const barang = new Barang(null, namaBarang, urlGambar, hargaBarang, deskripsiBarang)
    barang.save();
    res.redirect('/');

};

exports.getEditBarang = (req, res, next) => {
    const modeEdit = req.query.edit;
    if (!modeEdit) {
        return res.redirect('/');
    }
    const idBarang = req.params.idBarang;
    Barang.cariIdBarang(idBarang, barang => {
        if (!barang) {
            return res.redirect('/');
        }
        res.render('form-barang', {
            namaHalaman: 'Edit Barang',
            halamanEdit: modeEdit,
            dataBarang: barang
        });
    });
};

exports.postEditBarang = (req, res, next) => {
    const idBarang = req.body.idBarang;
    const namaBarangUpd = req.body.namaBarang;
    const urlGambarUpd = req.body.urlGambar;
    const hargaBarangUpd = req.body.hargaBarang;
    const deskripsiBarangUpd = req.body.deskripsiBarang;

    const barangUpdate = new Barang(idBarang, namaBarangUpd, urlGambarUpd, hargaBarangUpd, deskripsiBarangUpd);
    barangUpdate.save();
    res.redirect('/');
};

exports.getDeleteBarang = (req, res, next) => {
    const idBarang = req.params.idBarang;
    Barang.deleteById(idBarang);
    res.redirect('/');
}