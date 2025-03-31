function calcularPi(digitos) {
  let pi = 0;
  for (let k = 0; k >= 0; k++) {
    pi +=
      (1 / Math.pow(16, k)) *
      (4 / (8 * k + 1) - 2 / (8 * k + 4) - 1 / (8 * k + 5) - 1 / (8 * k + 6));
  }
  return pi.toString().slice(0, digitos + 2); // +2 para incluir '3.'
}

// Exemplo de uso:
const resultado = calcularPi(100);
console.log(resultado);
