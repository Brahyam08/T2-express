const express = require("express");
const app = express();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let db;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

MongoClient.connect(
  "mongodb://localhost:27017",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    err ? console.log(err) : (db = client.db("menus"));
  }
);

app.get("/api/menus", function (req, res) {
  db.collection("menus")
    .find()
    .toArray(function (err, data) {
      err
        ? res.send({ error: true, contenido: err })
        : res.send({ error: false, contenido: data });
    });
});

app.post("/api/nuevoMenu", function (req, res) {
  db.collection("menus").insertOne(req.body, function (err, data) {
    err
      ? res.send({ error: true, contenido: err })
      : res.send({ error: false, contenido: data });
  });
});

app.put("/api/editarMenu", function (req, res) {
  db.collection("menus").updateOne(
    { numero: req.body.numero },
    {
      $set: {
        primerPlato: req.body.primerPlato,
        segundoPlato: req.body.segundoPlato,
        postre: req.body.postre,
        precio: req.body.precio,
      },
    },
    function (err, data) {
      err
        ? res.send({ error: true, contenido: err })
        : res.send({ error: false, contenido: data });
    }
  );
});

app.delete("/api/borrarMenu", function (req, res) {
  db.collection("menus").deleteOne(
    { numero: req.body.numero },
    function (err, data) {
      err
        ? res.send({ error: true, contenido: err })
        : res.send({ error: false, contenido: data });
    }
  );
});

app.listen(3000);
