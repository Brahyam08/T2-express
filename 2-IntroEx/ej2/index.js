const express = require("express");
const app = express();

app.get("/:numero", function (req, res) {
  res.send(`${Math.floor(Math.random() * (req.params.numero - 1) + 1)}`);
});

app.listen(3000);
