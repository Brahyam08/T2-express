let cesta = [];
let almacen = require("./almacen");
const express = require("express");
const app = express();

app.get("/departamento/:dep", function (req, res) {
  let found = false;
  let parrafo = "";
  for (let i = 0; i < almacen.length; i++) {
    if (almacen[i].departamento.toLowerCase() === req.params.dep) {
      found = true;
      for (let j = 0; j < almacen[i].productos.length; j++) {
        parrafo += `<tr><td>${almacen[i].productos[j].nombre}</td><td>${almacen[i].productos[j].precio}</td><td>${almacen[i].productos[j].stock}</td></tr>`;
      }
      break;
    }
  }
  found
    ? res.send(`<table>${parrafo}</table>`)
    : res.send("El departamento no existe");
});

app.get("/departamento/:dep/comprar/:producto/:cantidad", function (req, res) {
  console.log(req.params.dep, req.params.producto, req.params.cantidad);
  let dep = false;
  let prod = false;
  for (let i = 0; i < almacen.length && !dep; i++) {
    if (almacen[i].departamento.toLowerCase() === req.params.dep) {
      dep = true;
      for (let j = 0; j < almacen[i].productos.length && !prod; j++) {
        if (almacen[i].productos[j].nombre === req.params.productoas) {
          prod = true;
          if (almacen[i].productos[j].stock >= req.params.cantidad) {
            cesta.push({
              producto: almacen[i].productos[j].nombre,
              cantidad: req.params.cantidad,
              precio: almacen[i].productos[j].precio,
            });
            almacen[i].productos[j].stock -= req.params.cantidad;
            res.send(cesta);
            break;
          } else {
            res.send("No hay stock suficiente");
            break;
          }
        }
      }
    }
  }
  if (!dep) {
    res.send("Departamento no encontrado");
  }
  if (!prod) {
    res.send("Producto no encontrado");
  }
});

app.get("/cesta", function (req, res) {
  let parrafo = "";
  for (let i = 0; i < cesta.length; i++) {
    parrafo += `<tr><td>${cesta[i].producto}</td><td>${
      cesta[i].cantidad
    }</td><td>${cesta[i].cantidad * cesta[i].precio}€</td></tr>`;
  }
  res.send(`<table>${parrafo}</table>`);
});

app.get("/pagar", function (req, res) {
  cesta = [];
  res.send("La compra ha sido realizada");
});

app.listen(3000);
