//prova da lions
//oi

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Cálculo média");

let etapa = 1;
let notas = [];

console.log("Digite a nota da primeira prova:");

rl.on("line", (input) => {
  switch (etapa) {
    case 1:
      const prova1 = parseFloat(input);
      if (isNaN(prova1)) {
        console.log("Nota inválida. Digite a nota da primeira prova:");
        return;
      }
      notas.push(prova1);
      etapa = 2;
      console.log("Digite a nota da segunda prova:");
      break;

    case 2:
      const prova2 = parseFloat(input);
      if (isNaN(prova2)) {
        console.log("Nota inválida. Digite a nota da segunda prova:");
        return;
      }
      notas.push(prova2);
      const media = (notas[0] + notas[1]) / 2;
      console.log(`A média das notas das provas é ${media}.`);
      
      if (media >= 6) {
        console.log('O aluno está aprovado!');
      } else {
        console.log('O aluno não alcançou a média 6 e está reprovado.');
      }
      rl.close();
      break;
  }
});
