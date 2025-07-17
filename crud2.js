const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let filmes = [];

function exibirMenu() {
  console.log("=====CADASTRO DE FILMES=====\n");
  console.log(
    "1-Cadastrar filme\n2-Listar filmes\n3-Editar filme\n4-Remover filme\n5-Sair\n6-Buscar por nome\n"
  );
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
        console.log("Saindo do sistema...");
        rl.close();
        break;
        case 6:
          buscarFilmePorNome();
          break;
      default:
        console.log("Digite uma opção válida!");
        exibirMenu();
        break;
    }
  });
}

function cadastrarFilme() {
  rl.question("Informe o nome do filme: ", (nome) => {
    rl.question("Informe o ano do filme: ", (ano) => {
      rl.question("Informe a duração do filme em minutos: ", (duracao) => {
        filmes.push({
          nome: nome,
          ano: parseInt(ano),
          duracao: parseInt(duracao),
        });
        console.log("Filme cadastrado com sucesso!");
        exibirMenu();
      });
    });
  });
}

function listarFilmes() {
  if (filmes.length === 0) {
    console.log("Não há filmes cadastrados para exibir.");
  } else {
    for (let filme of filmes) {
      console.log(
        `Nome: ${filme.nome}, Ano: ${filme.ano}, Duração: ${filme.duracao}`
      );
    }
  }
  exibirMenu();
}

function editarFilme() {
  if (filmes.length === 0) {
    console.log("Não há filmes cadastrados para editar.");
    return exibirMenu();
  }
  console.log("Filmes cadastrados:");
  filmes.forEach((filme, index) => {
    console.log(`Número: ${index}, Nome: ${filme.nome}`);
  });

  rl.question(
    "Digite o número correspondente ao filme que deseja editar: ",
    (indice) => {
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
            console.log("Filme editado com sucesso!");
            exibirMenu();
          });
        });
      });
    }
  );
}

function removerFilme() {
  if (filmes.length === 0) {
    console.log("Não há filmes cadastrados para remover.");
    return exibirMenu();
  }
  console.log("Filmes cadastrados:");
  filmes.forEach((filme, index) => {
    console.log(`Número: ${index}, Nome: ${filme.nome}`);
  });

  rl.question(
    "Digite o número correspondente ao filme que deseja remover: ",
    (indice) => {
      const i = parseInt(indice);
      if (isNaN(i) || i < 0 || i >= filmes.length) {
        console.log("O índice informado é inválido.");
        return exibirMenu();
      }
      const removido = filmes.splice(i, 1)[0];
      console.log(`Filme: ${removido.nome} removido com sucesso!`);
      exibirMenu();
    }
  );
}

function buscarFilmePorNome() {
  if (filmes.length === 0) {
    console.log("Não existe nenhum filme cadastrado para procurar.");
    return exibirMenu();
  }
  rl.question("Digite o título do filme que você procura: ", (titulo) => {
    const tituloFormatado = titulo.toLowerCase();
    const resultado = filmes.filter((filme) => filme.nome.toLowerCase() === tituloFormatado);
    console.log(resultado);
    if (resultado.length === 0) {
      console.log("O filme digitado não foi encontrado.")
      return exibirMenu();
    }
  });
}

exibirMenu();

