const req = require("express/lib/request")

// memanggil file model untuk siswa
let modelPelanggan = require("../models/index").pelanggan

exports.getDataPelanggan = (request, response) => {
    modelPelanggan.findAll()
    .then(result =>{
        return response.json(result)
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.addDataPelanggan = (request, response) => {
    // tampung data request
    let newPelanggan = {
        nama_pelanggan: request.body.nama_pelanggan,
        alamat_pelanggan: request.body.nama_pelanggan,
        kontak: request.body.kontak
    }

    modelPelanggan.create(newPelanggan)
    .then(result => {
        return response.json({
            message: `Data Pelanggan berhasil ditambahkan`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.editDataPelanggan = (request, response) => {
    let id = request.params.id_pelanggan
    let dataPelanggan = {
        nama_pelanggan: request.body.nama_pelanggan,
        alamat_pelanggan: request.body.nama_pelanggan,
        kontak: request.body.kontak
    }

    modelPelanggan.update(dataPelanggan, {where: {id_pelanggan: id}})
        .then(result => {
        return response.json({
            message: `Data Pelanggan berhasil di ubah`
            })
        })
        .catch(error => {
        return response.json({
            message: error.message
            })
        })
}

exports.deleteDataPelanggan = (request, response) => {
    let id = request.params.id_pelanggan
    
    modelPelanggan.destroy({ where: { id_pelanggan: id }})
    .then(result => {
        return response.json({
            message: `Data Pelanggan berhasil dihapus`
            })
        })
        .catch(error => {
        return response.json({
            message: error.message
            })
        })
    }