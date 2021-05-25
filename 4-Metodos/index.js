const express = require("express");
const app = express();

const personas = require("./personas");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());

app.get("/personas", function (req, res) {
  res.send(personas);
});

app.post("/personas", function (req, res) {
  personas.push({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    edad: parseInt(req.body.edad),
  });

  console.log(personas);
  res.send({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    edad: parseInt(req.body.edad),
  });
});

app.put("/personas", function (req, res) {
  let persona = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    edad: parseInt(req.body.edad),
  };
  let found = false;
  for (let i = 0; i < personas.length && !found; i++) {
    if (personas[i].nombre === req.body.nombre) {
      found = true;
      personas[i].apellido = req.body.apellido;
      personas[i].edad = req.body.edad;
    }
  }
  found
    ? res.send({ mensaje: "Modificado correctamente" })
    : res.send({ mensaje: "Persona no encontrada" });
});

app.delete("/personas", function (req, res) {
  let found = false;
  for (let i = 0; i < personas.length && !found; i++) {
    if (personas[i].nombre.includes(req.body.nombre)) {
      found = true;
      personas.splice(i, 1);
    }
  }

  found
    ? res.send({ mensaje: "Eliminado correctamente" })
    : res.send({ mensaje: "Persona no encontrada" });
});

app.listen(3000);
