const express = require("express");
const app = express();

let operacion = require("./function");
let array = require("./array");

app.get("/numero", function (req, res) {
  array[operacion()] += 1;

  res.send(array);
});

app.listen(3000);
