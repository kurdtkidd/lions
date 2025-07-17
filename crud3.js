const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let filmes = [];

function exibirMenu() {
  console.log("\n===== CADASTRO DE FILMES =====\n");
  console.log("1 - Cadastrar filme");
  console.log("2 - Listar filmes");
  console.log("3 - Editar filme");
  console.log("4 - Remover filme");
  console.log("5 - Sair\n");

  rl.question("Escolha uma opção: ", (opcao) => {
    const opcaoFormatada = parseInt(opcao);

    switch (opcaoFormatada) {
      case 1:
        cadastrarFilme();
        break;
      case 2:
        listarFilmes();
        break;
      case 3:
        editarFilme();
        break;
      case 4:
        removerFilme();
        break;
      case 5:
        console.log("\nSaindo do sistema...");
        rl.close();
        break;
      default:
        console.log("\nDigite uma opção válida!");
        exibirMenu();
        break;
    }
  });
}

function cadastrarFilme() {
  console.log("\n--- Cadastro de Filme ---");
  rl.question("Informe o nome do filme: ", (nome) => {
    rl.question("Informe o ano do filme: ", (ano) => {
      rl.question("Informe a duração do filme em minutos: ", (duracao) => {
        filmes.push({
          nome: nome,
          ano: parseInt(ano),
          duracao: parseInt(duracao),
        });
        console.log("\nFilme cadastrado com sucesso!");
        exibirMenu();
      });
    });
  });
}

function listarFilmes() {
  console.log("\n--- Lista de Filmes ---");
  if (filmes.length === 0) {
    console.log("Não há filmes cadastrados para exibir.");
  } else {
    filmes.forEach((filme, index) => {
      console.log(
        `\nFilme ${index}:` +
        `\n  Nome: ${filme.nome}` +
        `\n  Ano: ${filme.ano}` +
        `\n  Duração: ${filme.duracao} minutos`
      );
    });
  }
  exibirMenu();
}

function editarFilme() {
  console.log("\n--- Editar Filme ---");
  if (filmes.length === 0) {
    console.log("Não há filmes cadastrados para editar.");
    return exibirMenu();
  }

  console.log("Filmes cadastrados:");
  filmes.forEach((filme, index) => {
    console.log(`  ${index} - ${filme.nome}`);
  });

  rl.question("\nDigite o número do filme que deseja editar: ", (indice) => {
    const i = parseInt(indice);
    if (isNaN(i) || i < 0 || i >= filmes.length) {
      console.log("Índice inválido.");
      return exibirMenu();
    }

    rl.question("Novo nome: ", (novoNome) => {
      rl.question("Novo ano: ", (novoAno) => {
        rl.question("Nova duração: ", (novaDuracao) => {
          filmes[i].nome = novoNome;
          filmes[i].ano = parseInt(novoAno);
          filmes[i].duracao = parseInt(novaDuracao);
          console.log("\nFilme editado com sucesso!");
          exibirMenu();
        });
      });
    });
  });
}

function removerFilme() {
  console.log("\n--- Remover Filme ---");
  if (filmes.length === 0) {
    console.log("Não há filmes cadastrados para remover.");
    return exibirMenu();
  }

  console.log("Filmes cadastrados:");
  filmes.forEach((filme, index) => {
    console.log(`  ${index} - ${filme.nome}`);
  });

  rl.question("\nDigite o número do filme que deseja remover: ", (indice) => {
    const i = parseInt(indice);
    if (isNaN(i) || i < 0 || i >= filmes.length) {
      console.log("O índice informado é inválido.");
      return exibirMenu();
    }

    const removido = filmes.splice(i, 1)[0];
    console.log(`\nFilme "${removido.nome}" removido com sucesso!`);
    exibirMenu();
  });
}

exibirMenu();
