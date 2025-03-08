const express = require('express');
const cors = require('cors');

const app = express();


const port = process.env.PROT || 5000;

app.use(cors());




app.get("", (req, res) => {
    res.send("Este es el backend de ProaLaFalda web page");
})

app.use((req, res) => {
    res.status(404).send("url invalida")
    console.log("404")
})

app.listen(port , () => {
    console.log('servidor corriendo en: localhost:', port);
})