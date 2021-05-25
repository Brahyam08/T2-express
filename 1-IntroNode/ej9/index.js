const esPar = require("./par");
const espar = require("./par");

function random() {
  return parseInt(Math.random() * 100);
}

let rnd = random();

console.log(rnd, esPar(rnd));
