const express = require(`express`)
const app = express()

app.use(express.json())

// call mobil controller
let mobilController = require("../controllers/mobilController")

// endpoint untuk data siswa
app.get("/", mobilController.getDataMobil)

// endpoint untuk add siswa
app.post("/", mobilController.addDataMobil)

// endpoint untuk edit siswa
app.put("/:id_mobil", mobilController.editDataMobil)

// endpoint untuk delete siswa
app.delete("/:id_mobil", mobilController.deleteDataMobil)

module.exports = app 