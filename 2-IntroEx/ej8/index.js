const express = require("express");
const app = express();

let operacion = require("./function");
let array = require("./array");

app.get("/numero", function (req, res) {
  array[operacion()] += 1;

  res.send(array);
});

app.get("/borrar/:numero", function (req, res) {
  let numero = req.params.numero;

  numero < array.length && numero >= 0
    ? (array[numero] = 0)
    : res.send("Tas pasao");

  res.send(array);
});

app.listen(3000);
