const express = require("express");
const app = express();

let array = [
  "Hugo",
  "Ander",
  "Rocio",
  "Blas",
  "Victor",
  "Jorge",
  "Brahyam",
  "Pablo",
  "Naroa",
];

app.get("/:anyadir", function (req, res) {
  let anyadir = req.params.anyadir;
  array.push(anyadir);
  res.send(array);
});

app.listen(3000);
