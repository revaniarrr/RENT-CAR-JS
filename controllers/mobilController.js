const req = require("express/lib/request")

// memanggil file model untuk siswa
let modelMobil = require("../models/index").mobil

exports.getDataMobil = (request, response) => {
    modelMobil.findAll()
    .then(result =>{
        return response.json(result)
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.addDataMobil = (request, response) => {
    // tampung data request
    let newMobil = {
        nomor_mobil: request.body.nomor_mobil,
        merk: request.body.merk,
        jenis: request.body.jenis,
        warna: request.body.warna,
        tahun_pembuatan: request.body.tahun_pembuatan,
        biaya_sewa_per_hari: request.body.biaya_sewa_per_hari,
        image: request.body.image
    }

    modelMobil.create(newMobil)
    .then(result => {
        return response.json({
            message: `Data Mobil berhasil ditambahkan`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.editDataMobil = (request, response) => {
    let id = request.params.id_mobil
    let dataMobil = {
        nomor_mobil: request.body.nomor_mobil,
        merk: request.body.merk,
        jenis: request.body.jenis,
        warna: request.body.warna,
        tahun_pembuatan: request.body.tahun_pembuatan,
        biaya_sewa_per_hari: request.body.biaya_sewa_per_hari,
        image: request.body.image
    }

    modelSiswa.update(dataMobil, {where: {id_mobil: id}})
        .then(result => {
        return response.json({
            message: `Data mobil berhasil di ubah`
            })
        })
        .catch(error => {
        return response.json({
            message: error.message
            })
        })
}

exports.deleteDataMobil = (request, response) => {
    let id = request.params.id_mobil
    
    modelMobil.destroy({ where: { id_mobil: id }})
    .then(result => {
        return response.json({
            message: `Data mobil berhasil dihapus`
            })
        })
        .catch(error => {
        return response.json({
            message: error.message
            })
        })
    }