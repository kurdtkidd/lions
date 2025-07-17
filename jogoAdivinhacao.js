const readline = require('readline');

const rl = readline.createInterface ( {
input: process.stdin,
output: process.stdout
});

const numeroGerado = Math.floor(Math.random() * 10) + 1;
let contador = 1;

rl.setPrompt('Digite um valor entre 1 e 10: ');
rl.prompt();

rl.on('line', (input) => {
    
if (parseInt(input) === numeroGerado && contador <= 5 && (parseInt(input) > 0 && parseInt(input) < 11)) {
    console.log(`Parabéns você acertou! Com ${contador} tentativa(s)!`);
    rl.close();
} else if (contador <= 5 && (parseInt(input) > 0 && parseInt(input) < 11)) {
    console.log('Tente novamente!');
    contador++;
    rl.prompt();
} else {
    console.log('Seu computador explodiu!!!');
    rl.close();
}
});



















