function array(n) {
  let array10 = [];
  for (let i = 0; i < 10; i++) {
    n += 1;
    array10.push(n);
  }

  return array10;
}

module.exports = array;
