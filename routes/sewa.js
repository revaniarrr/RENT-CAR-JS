const express = require(`express`)
const app = express()

app.use(express.json())

// call sewa controller
let sewaController = require("../controllers/sewaController")

// endpoint untuk data siswa
app.get("/", sewaController.getDataSwa)

// endpoint untuk add siswa
app.post("/", sewaController.addDataSewa)

// endpoint untuk edit siswa
app.put("/:id_sewa", sewaController.editDataSewa)

// endpoint untuk delete siswa
app.delete("/:id_sewa", sewaController.deleteDataSewa)

module.exports = app 