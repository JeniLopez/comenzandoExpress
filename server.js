const express = require("express");
const bodyParser = require("body-Parser");
const { json } = require("express");
const app = express();
const port = 2250;
app.use(express());
app.use(bodyParser());

app.listen(port, () => {
    console.log("hi");
});

app.get("/hi", (req, res) => {
    res.send(`Servidor corriendo en el puerto local ${port}`);
});

app.post("/precioFrutas", (req, res) => {
    let precio = 0;
    let json = req.body;

    for (x in json) {
        if (json.x.tipo == "fruta") {
            precio += json.x.precio;
        }
    }
    res.send(`El valor total de las frutas es ${precio}`);
});

app.post("/determinante", (req, res) => {
    let determinante =
        req.body[0][0] * req.body[1][1] - req.body[1][0] * req.body[0][1];
    res.send(`El determinante es ${determinante}`);
});
