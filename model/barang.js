const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename),
    'db',
    'barang.json');

const ambilBarangDariFile = cb => {
    fs.readFile(p, (err, isiFile) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(isiFile));
        }
    });
};

module.exports = class Barang {
    constructor(idBarang, namaBarang, urlGambar, hargaBarang, deskripsiBarang) {
        this.idBarang = idBarang;
        this.namaBarang = namaBarang;
        this.urlGambar = urlGambar;
        this.hargaBarang = hargaBarang;
        this.deskripsiBarang = deskripsiBarang;
    }
    save() {
        ambilBarangDariFile(listBarang => {
            listBarang.push(this);
            fs.writeFile(p, JSON.stringify(listBarang), err => {
                console.log(err);
            })
        })
    }

    update() {
        ambilBarangDariFile(listBarang => {
            const eksistingIdBarang = listBarang.findIndex(
                barang => barang.id === this.id
            );
            const updatedBarang = [...listBarang];
            updatedBarang[eksistingIdBarang] = this;
            fs.writeFile(p, JSON.stringify(updatedBarang), err => {
                console.log(err);
            });
        })
    }

    static ambilDataBarang(cb) {
        ambilBarangDariFile(cb);
    };

    static cariIdBarang(id, cb) {
        ambilBarangDariFile(listBarang => {
            const barang = listBarang.find(p => p.idBarang === id);
            cb(barang);
        });
    };

    static deleteById(idBarang) {
        ambilBarangDariFile(listBarang => {
            const barangTerudate = listBarang.filter(barang => barang.idBarang !== idBarang);
            console.log(barangTerudate);
            fs.writeFile(p, JSON.stringify(barangTerudate), err => {
                console.log(err);
            })
        })
    }
};