const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let opcoes = ["pedra", "papel", "tesoura"];
let escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

console.log(escolhaComputador);

function perguntar() {
  rl.question(
    "Escolha uma das opções(pedra/papel,tesoura): ",
    (escolhaUsuario) => {
      let escolhaUsuarioFormatada = escolhaUsuario.toLowerCase();

      switch (escolhaUsuarioFormatada) {
        case "pedra":
          if (escolhaComputador === "pedra") {
            console.log(
              `Você escolheu ${escolhaUsuarioFormatada} e o computador escolheu ${escolhaComputador}, deu empate.`
            );
          } else if (escolhaComputador === "papel") {
            console.log(
              `Você escolheu ${escolhaUsuarioFormatada} e o computador escolheu ${escolhaComputador}, você perdeu.`
            );
          } else {
            console.log(
              `Você escolheu ${escolhaUsuarioFormatada} e o computador escolheu ${escolhaComputador}, você ganhou.`
            );
          }

          rl.close();
          break;

        case "papel":
          if (escolhaComputador === "papel") {
            console.log(
              `Você escolheu ${escolhaUsuarioFormatada} e o computador escolheu ${escolhaComputador}, deu empate.`
            );
          } else if (escolhaComputador === "pedra") {
            console.log(
              `Você escolheu ${escolhaUsuarioFormatada} e o computador escolheu ${escolhaComputador}, você ganhou.`
            );
          } else {
            console.log(
              `Você escolheu ${escolhaUsuarioFormatada} e o computador escolheu ${escolhaComputador}, você perdeu.`
            );
          }

          rl.close();
          break;

        case "tesoura":
          if (escolhaComputador === "tesoura") {
            console.log(
              `Você escolheu ${escolhaUsuarioFormatada} e o computador escolheu ${escolhaComputador}, deu empate.`
            );
          } else if (escolhaComputador === "papel") {
            console.log(
              `Você escolheu ${escolhaUsuarioFormatada} e o computador escolheu ${escolhaComputador}, você ganhou.`
            );
          } else {
            console.log(
              `Você escolheu ${escolhaUsuarioFormatada} e o computador escolheu ${escolhaComputador}, você perdeu.`
            );
          }

          rl.close();
          break;

        default:
          perguntar();
          break;
      }
    }
  );
}

perguntar();
