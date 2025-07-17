const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let opcoes = ["pedra", "papel", "tesoura"];
let escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

function perguntar() {
  rl.question("Escolha uma das opções (pedra/papel/tesoura): ", (escolhaUsuario) => {
    let escolhaUsuarioFormatada = escolhaUsuario.toLowerCase();

    switch (escolhaUsuarioFormatada) {
      case "pedra":
      case "papel":
      case "tesoura":
        console.log(`Você escolheu ${escolhaUsuarioFormatada} e o computador escolheu ${escolhaComputador}.`);

        if (escolhaUsuarioFormatada === escolhaComputador) {
          console.log("Deu empate.");
        } else if (
          (escolhaUsuarioFormatada === "pedra" && escolhaComputador === "tesoura") ||
          (escolhaUsuarioFormatada === "papel" && escolhaComputador === "pedra") ||
          (escolhaUsuarioFormatada === "tesoura" && escolhaComputador === "papel")
        ) {
          console.log("Você ganhou!");
        } else {
          console.log("Você perdeu.");
        }

        rl.close();
        break;

      default:
        console.log("Opção inválida. Tente novamente.");
        perguntar(); 
        break;
    }
  });
}

perguntar();
