"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let veiculos = [];
function mostrarMenu() {
    console.log("\nMenu:");
    console.log("1 - Adicionar Carro");
    console.log("2 - Listar Carros");
    console.log("3 - Sair");
}
function adicionarCarro() {
    const marca = prompt("Digite a marca do carro: ");
    const modelo = prompt("Digite o modelo do carro: ");
    const ano = prompt("Digite o ano do carro: ");
    const placa = prompt("Digite a placa do carro: ");
    const carro = {
        marca,
        modelo,
        ano,
        placa
    };
    veiculos.push(carro);
    console.log("Carro adicionado com sucesso!");
}
function listarCarros() {
    if (veiculos.length === 0) {
        console.log("Não há carros registrados.");
    }
    else {
        console.log("\nLista de Carros:");
        veiculos.forEach((carro, index) => {
            console.log(`${index + 1} - Marca: ${carro.marca}, Modelo: ${carro.modelo}, Ano: ${carro.ano}, placa: ${carro.placa}`);
        });
    }
}
function executarMenu() {
    let sair = false;
    while (!sair) {
        mostrarMenu();
        const opcao = prompt("Escolha uma opção (1/2/3): ");
        switch (opcao) {
            case "1":
                adicionarCarro();
                break;
            case "2":
                listarCarros();
                break;
            case "3":
                console.log("Saindo do sistema...");
                sair = true;
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}
executarMenu();
