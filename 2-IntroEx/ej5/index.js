const express = require("express");
const app = express();

let objeto = {
  nombre: "Juan",
  apellido: "Pedro",
  edad: 50,
};

app.get("/nombre/:name", function (req, res) {
  objeto.nombre = req.params.name;
  res.send(objeto.nombre);
});

app.get("/apellido/:surname", function (req, res) {
  objeto.apellido = req.params.surname;
  res.send(objeto.apellido);
});

app.get("/edad/:age", function (req, res) {
  objeto.edad = req.params.age;
  res.send(objeto.edad);
});

app.get("/persona", function (req, res) {
  res.send(objeto);
});

app.listen(3000);
