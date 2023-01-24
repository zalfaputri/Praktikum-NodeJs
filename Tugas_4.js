const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/bmi", (req, res) => {
    let berat = Number(req.body.berat)
    let tinggi = Number(req.body.tinggi)
    let bmi = berat / (tinggi * tinggi)
    let status = ""
    if (bmi < 18.5) {
        status = "Kekurangan Berat Badan"
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal (Ideal)"
    }
    else if (bmi >= 25.0 && bmi <= 29.9){
        status = "Kelebihan Berat Berat Badan"
    }
    else {
        status = "Kegemukan (Obesitas)"
    }
    let response = {
        tinggi : tinggi,
        berat : berat,
        bmi : bmi,
        status : status
    }
    
    res.json(response)

})

app.listen(8000, () => {
    console.log("Servedijalankan pada port 8000");
})