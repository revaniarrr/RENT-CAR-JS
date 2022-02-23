const express = require(`express`)
const app = express()

app.use(express.json())

// call karyawan controller
let karyawanController = require("../controllers/karyawanController")

// endpoint untuk data siswa
app.get("/", karyawanController.getDataKaryawan)

// endpoint untuk add siswa
app.post("/", karyawanController.addDataKaryawan)

// endpoint untuk edit siswa
app.put("/:id_karyawan", karyawanController.editDataKaryawan)

// endpoint untuk delete siswa
app.delete("/:id_karyawan", karyawanController.deleteDataKaryawan)

module.exports = app 