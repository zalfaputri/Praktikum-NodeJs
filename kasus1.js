const express = require("express") // Penghubung to frontend
const bodyParser = require("body-parser") // memanggil library body-parser 
const cors = require("cors") // memanggil library cors 
const app = express() // server (method)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.post("/biodata",(req,res) => {
    let nama = req.body.nama
    let alamat = req.body.alamat
    let umur = req.body.umur
    let jenisKelamin = req.body.jenisKelamin
    let tanggalLahir = req.body.tanggalLahir

    let response = {
        nama ,
        alamat,
        umur,
        jenisKelamin,
        tanggalLahir
    }
    res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})