const Sequelize = require('sequelize')
const dbConSequelize = require('../util/database')

const Barang = dbConSequelize.define('barang', {
    idBarang: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    namaBarang: Sequelize.STRING,
    urlBarang: Sequelize.STRING,
    hargaBarang: Sequelize.INTEGER,
    deskripsiBarang: Sequelize.STRING
})

module.exports = Barang;


































// const dbConnection = require('../util/database');
// module.exports = class Barang {
//     constructor(idBarang, namaBarang, urlGambar, hargaBarang, deskripsiBarang) {
//         this.idBarang = idBarang;
//         this.namaBarang = namaBarang;
//         this.urlGambar = urlGambar;
//         this.hargaBarang = hargaBarang;
//         this.deskripsiBarang = deskripsiBarang;
//     }

//     tambahDataBarang() {
//         return dbConnection.execute('INSERT INTO barang (namaBarang,urlGambar,hargaBarang,deskripsiBarang) VALUES (?,?,?,?)', [this.namaBarang, this.urlGambar, this.hargaBarang, this.deskripsiBarang])
//     }

//     static ambilDataBarang() {
//         return dbConnection.execute('SELECT * FROM barang');
//     };

//     updateDataBarang(idBarang) {
//         return dbConnection.execute('UPDATE barang SET namaBarang=?,urlGambar=?,hargaBarang=?,deskripsiBarang=? WHERE barang.idBarang=?', [this.namaBarang, this.urlGambar, this.hargaBarang, this.deskripsiBarang, idBarang])
//     };

//     static cariBarangById(idBarang) {
//         return dbConnection.execute('SELECT * FROM barang WHERE barang.idBarang =?', [idBarang])
//     };

//     static deleteByIdBarang(idBarang) {
//         return dbConnection.execute('DELETE FROM barang WHERE barang.idBarang =?', [idBarang])
//     };

// };