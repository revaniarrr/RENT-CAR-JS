const express = require(`express`)
const app = express()

app.use(express.json())

// call pelanggan controller
let pelangganController = require("../controllers/pelangganController")

// endpoint untuk data siswa
app.get("/", pelangganController.getDataPelanggan)

// endpoint untuk add siswa
app.post("/", pelangganController.addDataPelanggan)

// endpoint untuk edit siswa
app.put("/:id_pelanggan", pelangganController.editDataPelanggan)

// endpoint untuk delete siswa
app.delete("/:id_pelanggan", pelangganController.deleteDataPelanggan)

module.exports = app 