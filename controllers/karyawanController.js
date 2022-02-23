const md5 = require("md5")
const req = require("express/lib/request")

// memanggil file model untuk siswa
let modelKaryawan = require("../models/index").karyawan

exports.getDataKaryawan = (request, response) => {
    modelKaryawan.findAll()
    .then(result =>{
        return response.json(result)
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.addDataKaryawan = (request, response) => {
    // tampung data request
    let newKaryawan = {
        nama_karyawan: request.body.nama_karyawan,
        alamat_karyawan: request.body.alamat_karyawan,
        kontak: request.body.kontak,
        username: request.body.username,
        password: md5(request.body.password)
    }

    modelKaryawan.create(newKaryawan)
    .then(result => {
        return response.json({
            message: `Data Karyawan berhasil ditambahkan`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.editDataKaryawan = (request, response) => {
    let id = request.params.id_karyawan
    let dataKaryawan = {
        nama_karyawan: request.body.nama_karyawan,
        alamat_karyawan: request.body.alamat_karyawan,
        kontak: request.body.kontak,
        username: request.body.username,
        password: md5(request.body.password)
    }

    modelKaryawan.update(dataKaryawan, {where: {id_karyawan: id}})
        .then(result => {
        return response.json({
            message: `Data karyawan berhasil di ubah`
            })
        })
        .catch(error => {
        return response.json({
            message: error.message
            })
        })
}

exports.deleteDataKaryawan = (request, response) => {
    let id = request.params.id_karyawan
    
    modelKaryawan.destroy({ where: { id_karyawan: id }})
    .then(result => {
        return response.json({
            message: `Data karyawan berhasil dihapus`
            })
        })
        .catch(error => {
        return response.json({
            message: error.message
            })
        })
    }