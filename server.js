const express = require("express");
const bodyParser = require("body-Parser");
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
    for (x of req.body) {
        if (i.tipo == "fruta") {
            precio += i.precio;
        }
    }
    res.send(`El valor total de las frutas es ${precio}`);
});
