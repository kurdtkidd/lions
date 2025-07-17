const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Digite o número da tabuada que você quer calcular:', (input) => {
const tabuada = parseInt(input);

for (let i = 1; i <= 10; i++) {
    let conta = tabuada * i;
    console.log (`O valor de ${tabuada} * ${i} é ${conta}`);
    rl.close();
}
});

