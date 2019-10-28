const Barang = require('../model/barang');

exports.getIndex = (req, res, next) => {
    Barang.ambilDataBarang()
        .then(([dataBarang]) => {
            res.render('index', {
                listBarang: dataBarang,
                namaHalaman: 'List Barang'
            });
        })
        .catch(err => {
            console.log(err);
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
    barang.tambahDataBarang()
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
};

exports.getEditBarang = (req, res, next) => {
    const modeEdit = req.query.edit;
    if (!modeEdit) {
        return res.redirect('/');
    }
    const idBarang = req.params.idBarang;
    Barang.cariBarangById(idBarang)
        .then(([barang]) => {
            res.render('form-barang', {
                namaHalaman: 'Form Edit',
                dataBarang: barang[0],
                halamanEdit: modeEdit
            })
        })
        .catch(err => {
            console.error(err)
        })
};

exports.postEditBarang = (req, res, next) => {
    const idBarang = req.body.idBarang;
    const namaBarangUpd = req.body.namaBarang;
    const urlGambarUpd = req.body.urlGambar;
    const hargaBarangUpd = req.body.hargaBarang;
    const deskripsiBarangUpd = req.body.deskripsiBarang;

    const barangUpdate = new Barang(idBarang, namaBarangUpd, urlGambarUpd, hargaBarangUpd, deskripsiBarangUpd);
    barangUpdate.updateDataBarang(idBarang)
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })

};

exports.getDeleteBarang = (req, res, next) => {
    const idBarang = req.params.idBarang;
    Barang.deleteByIdBarang(idBarang)
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            console.log(err)
        })

}