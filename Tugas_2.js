const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/convert/celcius/:suhu", (req,res) => {
    let suhu = Number(req.params.suhu)
    let reamur = (4 / 5) * suhu
    let kelvin = suhu + 273
    let farenheit = ((9 / 5) * suhu) + 32
    let response = {
        celcius : suhu,
        result: {
            reamur : reamur,
            kelvin : kelvin,
            farenheit : farenheit
        }
    }

    res.json(response)

})

app.get("/convert/reamur/:suhu", (req,res) => {
    let suhu = Number(req.params.suhu)
    let celcius = (5 / 4) * suhu
    let kelvin = ((5 / 4) * suhu) + 273
    let farenheit = ((9 / 4) * suhu) + 32
    let response = {
        celcius : suhu,
        result: {
            celcius : celcius,
            kelvin : kelvin,
            farenheit : farenheit
        }
    }

    res.json(response)

})

app.get("/convert/kelvin/:suhu", (req,res) => {
    let suhu = Number(req.params.suhu)
    let celcius = suhu - 273
    let reamur = (4 / 5) * (suhu - 273)
    let farenheit = ((9 / 5) * (suhu - 273)) + 32
    let response = {
        celcius : suhu,
        result: {
            celcius : celcius,
            reamur : reamur,
            farenheit : farenheit
        }
    }

    res.json(response)

})

app.get("/convert/farenheit/:suhu", (req,res) => {
    let suhu = Number(req.params.suhu)
    let celcius = (5 / 9) * (suhu - 32)
    let reamur = (4 / 9) * (suhu - 32)
    let kelvin = ((5 / 9) * (suhu - 32)) + 273

    let response = {
        celcius : suhu,
        result: {
            celcius : celcius,
            reamur : reamur,
            kelvin : kelvin
        }
    }

    res.json(response)

})

app.listen(8000, () => {
    console.log("Server dijalankan pada port 8000");
})