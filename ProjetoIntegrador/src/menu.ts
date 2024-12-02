import promptSync from 'prompt-sync'; 
const prompt = promptSync(); 


interface Carro {
  marca: string;
  modelo: string;
  placa: string;
}


let veiculos: Carro[] = [];


function mostrarMenu(): void {
  console.log("\nMenu:");
  console.log("1 - Adicionar Carro");
  console.log("2 - Listar Carros");
  console.log("3 - Remover Carros");
  console.log("4- Sair")
}


function adicionarCarro(): void {
  const marca: string = prompt("Digite a marca do carro: ");
  const modelo: string = prompt("Digite o modelo do carro: ");
  const placa: string = prompt("Digite a placa do carro: ");


  const carro: Carro = {
    marca,
    modelo,
    
    placa
  };


  veiculos.push(carro);

  console.log("Carro adicionado com sucesso!");
}

function listarCarros(): void {
  if (veiculos.length === 0) {
    console.log("Não há carros registrados.");
  } else {
    console.log("\nLista de Carros:");
    veiculos.forEach((carro, index) => {
      console.log(`${index + 1} - Marca: ${carro.marca}, Modelo: ${carro.modelo}, placa: ${carro.placa}`);
    });
  }
}


function removerCarro(): void {
  if (veiculos.length === 0) {
    console.log("Não há carros para remover.");
  } else {
    listarCarros();
    const indice: string = prompt("Digite o número do carro que deseja remover: ");
    const indiceNumerico: number = parseInt(indice) - 1;

    if (indiceNumerico >= 0 && indiceNumerico < veiculos.length) {
      veiculos.splice(indiceNumerico, 1);
      console.log("Carro removido com sucesso!");
    } else {
      console.log("Índice inválido. Nenhum carro foi removido.");
    }
  }
}

function executarMenu(): void {
  let sair: boolean = false;

  while (!sair) {
    mostrarMenu();
    const opcao: string = prompt("Escolha uma opção (1/2/3/4): ");

    switch (opcao) {
      case "1":
        adicionarCarro();
        break;
      case "2":
        listarCarros();
        break;
      case "3":
        removerCarro();
        break;
      case "4":
        console.log("Saindo do sistema...");
        sair = true;
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }
}

executarMenu();
