let array = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];
const express = require("express");
const app = express();

app.get("/persona", function (req, res) {
  res.send(`Esta es la lista completa de personas ${array}`);
});

/* app.get("/persona/:nombre", function (req, res) {
  let nombre = req.params.nombre.toLowerCase();
  switch (nombre) {
    case "homer":
      res.send(`Estás llamando a ${array[0]}`);
      break;
    case "marge":
      res.send(`Estás llamando a ${array[1]}`);
      break;
    case "bart":
      res.send(`Estás llamando a ${array[2]}`);
      break;
    case "lisa":
      res.send(`Estás llamando a ${array[3]}`);
      break;
    case "maggie":
      res.send(`Estás llamando a ${array[4]}`);
      break;
    default:
      res.send("No estás llam(ando a nadie");
  }
}); */

app.get("/persona/:patata", function (req, res) {
  let nombre = req.params.patata;
  console.log(nombre);

  for (let i = 0; i < array.length; i++) {
    if (nombre === array[i]) {
      res.send(`Has elegido a ${array[i]}`);
    }
  }
  res.send("Lo que has elegido no existe");
});

app.listen(process.env.PORT || 3000);
