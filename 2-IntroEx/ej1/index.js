const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hola Mundo</h1><br/><h4>desde Express</h4>");
});

app.listen(3000);
