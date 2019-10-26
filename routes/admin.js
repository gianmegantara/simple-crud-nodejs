const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();

router.get('/', adminController.getIndex);
router.get('/form-barang', adminController.getTambahBarang);
router.post('/tambah-barang', adminController.postTambahBarang);
router.get('/edit-barang/:idBarang', adminController.getEditBarang);
router.post('/edit-barang', adminController.postEditBarang);
router.get('/delete-barang/:idBarang', adminController.getDeleteBarang);

module.exports = router;