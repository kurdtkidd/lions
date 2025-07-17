const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Calculadora Simples");

function perguntarNumero1() {
  rl.question("Digite o primeiro número: ", (resposta1) => {
    const numero1 = parseFloat(resposta1);
    if (isNaN(numero1)) {
      console.log("Número inválido.");
      return perguntarNumero1();
    }
    perguntarOperador(numero1);
  });
}

function perguntarOperador(numero1) {
  rl.question("Digite o operador (+,-,*,/): ", (operador) => {
    if (!["+", "-", "*", "/"].includes(operador)) {
      console.log("Operador inválido.");
      return perguntarOperador(numero1);
    }
    perguntarNumero2(numero1, operador);
  });
}

function perguntarNumero2(numero1, operador) {
  rl.question("Digite o segundo número: ", (resposta2) => {
    const numero2 = parseFloat(resposta2);
    if (isNaN(numero2)) {
      console.log("Número inválido.");
      return perguntarNumero2(numero1, operador);
    }
    if (operador === "/" && numero2 === 0) {
      console.log("Não é possível dividir por zero");
      return perguntarNumero2(numero1, operador);
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
  });
}

perguntarNumero1();
