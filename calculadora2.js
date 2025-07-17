const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Calculadora Simples");

let etapa = 0;
let numero1 = null;
let operador = null;

console.log("Digite o primeiro número:");

rl.on("line", (input) => {
  switch (etapa) {
    case 0:
      numero1 = parseFloat(input);
      if (isNaN(numero1)) {
        console.log("Número inválido. Digite o primeiro número:");
        return;
      }
      etapa = 1;
      console.log("Digite o operador (+, -, *, /):");
      break;

    case 1:
      if (!["+", "-", "*", "/"].includes(input)) {
        console.log("Operador inválido. Digite o operador (+, -, *, /):");
        return;
      }
      operador = input;
      etapa = 2;
      console.log("Digite o segundo número:");
      break;

    case 2:
      const numero2 = parseFloat(input);
      if (isNaN(numero2)) {
        console.log("Número inválido. Digite o segundo número:");
        return;
      }
      if (operador === "/" && numero2 === 0) {
        console.log("Não é possível dividir por zero. Digite outro número:");
        return;
      }

      let resultado;
      switch (operador) {
        case "+":
          resultado = numero1 + numero2;
          break;
        case "-":
          resultado = numero1 - numero2;
          break;
        case "*":
          resultado = numero1 * numero2;
          break;
        case "/":
          resultado = numero1 / numero2;
          break;
      }

      console.log(`Resultado: ${resultado}`);
      console.log("----------------------------------------");
      rl.close();
  }
});
