function equaçãoA(x, y) {
  let z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 3)) / Math.abs(x + y);
  return z;
}

function equaçãoB(x, y) {
  let z = (1 + Math.sin(x)) / (1 + Math.cos(y));
  return z;
}

function equaçãoC(x, y) {
  let z =
    1 + 1 / x + 1 / Math.pow(x, 2) + 1 / Math.pow(x, 3) + 1 / Math.pow(x, 4);
  return z;
}

function equaçãoD(x, y) {
  let z = x / y - (x + Math.pow(x / y, 2)) / (x - Math.pow(x / y, 2));
  return z;
}

function equaçãoE(x, y) {
  let z = Math.sqrt(
    Math.PI + Math.pow(Math.E, 3) + Math.sqrt(4 + Math.sqrt(x))
  );
  return z;
}

console.log(equaçãoE(42, 17));
