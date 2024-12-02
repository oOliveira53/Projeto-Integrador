"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estacionamento = void 0;
const Empresa_1 = require("./Empresa");
class Estacionamento extends Empresa_1.empresa {
    vagas;
    disponibilidadeVaga;
    Andares;
    constructor(vagas, disponibilidadeVagas, andares, cnpj, nome, rua, bairro, numero, contato) {
        super(cnpj, nome, rua, bairro, numero, contato);
        this.vagas = vagas;
        this.disponibilidadeVaga = disponibilidadeVagas;
        this.Andares = andares;
    }
    getVagas() {
        return this.vagas;
    }
    setVagas(vagas) {
        this.vagas = vagas;
    }
    getDisponibilidadeVagas() {
        return this.disponibilidadeVaga;
    }
    setDisponibilidadeVagas(disponibilidadeVaga) {
        this.disponibilidadeVaga = disponibilidadeVaga;
    }
    ExibirInfo() {
        super.ExibirInfo;
        console.log(`Vagas :${this.vagas}`);
        console.log(`Disponibilidade: ${this.disponibilidadeVaga}`);
    }
    calcularTotalVagas() {
        return this.vagas * this.Andares;
    }
}
exports.Estacionamento = Estacionamento;
const estacionamento2 = new Estacionamento(10, true, 3, "3214568/0001-20", "esta", "rua1", "fragata", 10, 2145897);
