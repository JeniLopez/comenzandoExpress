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
    let pFruta = 0;
    let pVerdura = 0;
    let json = req.body;

    for (let x in json) {
        if (json[x].tipo == "fruta") {
            pFruta += parseInt(json[x].precio);
        } else {
            pVerdura += parseInt(json[x].precio);
        }
    }
    res.send(
        `El valor total de las frutas es ${pFruta} y el de las verduras es ${pVerdura}, el total de la compra es ${
            pVerdura + pFruta
        }`
    );
});

app.post("/determinante", (req, res) => {
    let determinante =
        req.body[0][0] * req.body[1][1] - req.body[1][0] * req.body[0][1];
    res.send(`El determinante es ${determinante}`);
});

/*
JSON:
{
    "manzana": {"tipo":"fruta","precio":"2"},
    "banana": {"tipo":"fruta","precio":"3"},
    "zanahoria": {"tipo":"verdura","precio":"2"}
}

Matriz 2x2:
[
    [1, 2],
    [3, 4]
]
*/
