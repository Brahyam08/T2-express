let primeroUltimo = require("./function2");
let ultimoPrimero = require("./function");

let array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

primeroUltimo(array1());
console.log("------------");
ultimoPrimero(array1());

function array1() {
  let array10 = [];
  for (let i = 0; i < 10; i++) {
    array10.push(i);
  }
  return array10;
}
