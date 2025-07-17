const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let funcionarios = [];

function exibirMenu() {
  console.log(
    "\n1 - Cadastrar Funcionário \n2 - Exibir Funcionários\n3 - Editar Funcionário \n4 - Remover Funcionário \n5 - Sair\n"
  );
  rl.question("Escolha uma opção: ", (opcao) => {
    const opcaoFormatada = parseInt(opcao);
    switch (opcaoFormatada) {
      case 1:
        cadastrarFuncionario();
        break;
      case 2:
        exibirFuncionarios();
        break;
      case 3:
        editarFuncionario();
        break;
      case 4:
        removerFuncionario();
        break;
      case 5:
        rl.close();
        break;
      default:
        console.log("\nOpção inválida, digite um número entre 1 e 5.\n");
        exibirMenu();
        break;
    }
  });
}

function cadastrarFuncionario() {
  rl.question("\nInforme o nome do funcionário: ", (nome) => {
    rl.question("Informe o cargo: ", (cargo) => {
      rl.question("Informe o salário: ", (salario) => {
        funcionarios.push({ nome: nome, cargo: cargo, salario: parseFloat(salario) });
        console.log("\nFuncionário cadastrado com sucesso.\n");
        exibirMenu();
      });
    });
  });
}

function exibirFuncionarios() {
  if (funcionarios.length === 0) {
    console.log("\nNenhum funcionário cadastrado.\n");
  } else {
    for (let funcionario of funcionarios) {
      console.log(
        `\nNome: ${funcionario.nome} \nCargo: ${funcionario.cargo} \nSalário: ${funcionario.salario}`
      );
    }
  }
  exibirMenu();
}

function editarFuncionario() {
  if (funcionarios.length === 0) {
    console.log("\nNenhum funcionário cadastrado para editar.\n");
    return exibirMenu();
  }
  console.log("\nFuncionários cadastrados:\n");
  funcionarios.forEach((funcionario, index) => {
    console.log(
      `Número: ${index} - Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}\n`
    );
  });

  rl.question(
    "Digite o número do funcionário que deseja editar: ",
    (indice) => {
      const i = parseInt(indice);
      if (isNaN(i) || i < 0 || i >= funcionarios.length) {
        console.log("\nÍndice inválido.\n");
        return exibirMenu();
      }

      rl.question("Novo nome: ", (novoNome) => {
        rl.question("Novo cargo: ", (novoCargo) => {
          rl.question("Novo salário: ", (novoSalario) => {
            funcionarios[i].nome = novoNome;
            funcionarios[i].cargo = novoCargo;
            funcionarios[i].salario = novoSalario;
            console.log("\nFuncionário editado com sucesso!");
            exibirMenu();
          });
        });
      });
    }
  );
}

function removerFuncionario() {
  if (funcionarios.length === 0) {
    console.log("\nNenhum funcionário cadastrado para remover.\n");
    return exibirMenu();
  }
  console.log("\nFuncionários cadastrados:\n");
  funcionarios.forEach((funcionario, index) => {
    console.log(
      `${index} - Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}\n`
    );
  });

  rl.question(
    "Digite o número do funcionário que deseja remover: ",
    (indice) => {
      const i = parseInt(indice);
      if (isNaN(i) || i < 0 || i >= funcionarios.length) {
        console.log("Índice inválido.");
        return exibirMenu();
      }

      const removido = funcionarios.splice(i, 1)[0];
      console.log(`\nFuncionário '${removido.nome}' removido com sucesso!\n`);
      exibirMenu();
    }
  );
}

exibirMenu();
