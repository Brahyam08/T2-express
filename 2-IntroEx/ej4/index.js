const express = require("express");
const app = express();

let saludo = require("./function");

app.get("/string", function (req, res) {
  res.send(saludo());
});

app.listen(3000);
