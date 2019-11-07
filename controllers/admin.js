const Barang = require('../model/barang');

exports.getIndex = (req, res, next) => {
    Barang.findAll()
        .then(dataBarang => {
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
    const urlBarang = req.body.urlBarang;
    const hargaBarang = req.body.hargaBarang;
    const deskripsiBarang = req.body.deskripsiBarang;

    Barang.create({
            namaBarang: namaBarang,
            urlBarang: urlBarang,
            hargaBarang: hargaBarang,
            deskripsiBarang: deskripsiBarang
        })
        .then(result => {
            console.log('Berhasil Menambah Barang')
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
    Barang.findByPk(idBarang)
        .then(barang => {
            res.render('form-barang', {
                namaHalaman: 'Form Edit',
                dataBarang: barang,
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
    const urlBarangUpd = req.body.urlBarang;
    const hargaBarangUpd = req.body.hargaBarang;
    const deskripsiBarangUpd = req.body.deskripsiBarang;

    Barang.findByPk(idBarang)
        .then(barang => {
            barang.namaBarang = namaBarangUpd;
            barang.urlBarang = urlBarangUpd;
            barang.hargaBarang = hargaBarangUpd;
            barang.deskripsiBarang = deskripsiBarangUpd;
            return barang.save()
        })
        .then(result => {
            console.log('Berhasil Mengupdate Barang')
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })


};

exports.getDeleteBarang = (req, res, next) => {
    const idBarang = req.params.idBarang;
    Barang.findByPk(idBarang)
        .then(barang => {
            return barang.destroy()
        })
        .then(result => {
            console.log('Berhasil Menghapus Barang')
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })

}