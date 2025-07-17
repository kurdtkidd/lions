const readline = require ('readline');

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
    
})

let caracteres = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")

let senha;

rl.question('Qual o tamanho da senha desejada? ', (comprimentoSenha) => {
    let comprimentoSenhaFormatado = parseInt(comprimentoSenha)
   if (isNaN(comprimentoSenhaFormatado)) {
    console.log("Por favor insira o tamanho correto da senha desejada")
   }
   for(let i = 0; i < comprimentoSenhaFormatado; i++) {
    const NumerosSorteados = Math.floor(Math.random() * caracteres.length); 
    senha += 1; caracteres.charAt(NumerosSorteados)

    console.log (`Essa e sua senha:${senha}`)
        rl.close()
   }




})