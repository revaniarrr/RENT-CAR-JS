const md5 = require("md5")
let jwt = require(`jsonwebtoken`)

let modelKaryawan = require("../models/index").karyawan


exports.getDataKaryawan = (request, response) => {
    modelKaryawan.findAll()
        .then(result => {
            return response.json({
                Count : result.length,
                Karyawan : result
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
}

//untuk handle add data Karyawan
exports.addDataKaryawan = (request, response) => {
    // tampung data request
    let newKaryawan = {
        nama_karyawan : request.body.nama_karyawan,
        alamat_karyawan : request.body.alamat_karyawan,
        kontak_karyawan : request.body.kontak_karyawan,
        username : request.body.username,
        password : md5(request.body.password)
    }
    modelKaryawan.create(newKaryawan)
    .then(result => {
        return response.json({
            message : `Data karyawan berhasil ditambahkan`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

//untuk handle edit data Karyawan
exports.editDataKaryawan = (request, response) => {
    let idKaryawan = request.params.id_karyawan
    let dataKaryawan = {
        nama_karyawan : request.body.nama_karyawan,
        alamat_karyawan : request.body.alamat_karyawan,
        kontak_karyawan : request.body.kontak_karyawan,
        username : request.body.username,
        password : md5(request.body.password)
    }
    // eksekusi 
    modelKaryawan.update(dataKaryawan, {where :{id_karyawan:idKaryawan}})
    .then(result => {
        return response.json({
            message : `Data karyawan berhasil diubah`
        })
    })
    .catch(error => {
        return response.json({
            message : error.message
        })
    })
}

//untuk handle delete data Karyawan
exports.deleteDataKaryawan = (request, response) => {
    let idKaryawan = request.params.id_karyawan

    // eksekusi 
    modelKaryawan.destroy({where :{id_karyawan:idKaryawan}})
    .then(result => {
        return response.json({
            message : `Data keryawan berhasil dihapus`
        })
    })
    .catch(error => {
        return response.json({
            message : error.message
        })
    })
}

exports.authentication = async(request, response) => {
    let data = {
        username : request.body.username,
        password : md5(request.body.password)
    }

    // validasi
    let result = await modelKaryawan.findOne({where : data})

    if (result) {
        // data ditemukan

        // payload adalah data yang akan dienkripsi
        let payload = JSON.stringify(result) // untuk mengubah data objek ke json

        let secretKey = `Rental Mobil`

        // generate token
        let token = jwt.sign(payload, secretKey)
        return response.json({
            logged: true,
            token: token
        })
    } else {
        // data tidak ditemukan
        return response.json({
            logged: false,
            message : `Username atau Password salah!`
        })
    }
}