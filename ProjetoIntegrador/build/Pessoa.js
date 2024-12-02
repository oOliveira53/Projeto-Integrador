"use strict";
class pessoa {
    nome;
    placa;
    contato;
    documento;
    constructor(nome, placa, contato, documento) {
        this.nome = nome;
        this.placa = placa;
        this.contato = contato;
        this.documento = documento;
    }
    getNOme() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getPlaca() {
        return this.placa;
    }
    setPlaca(placa) {
        this.placa = placa;
    }
    getContato() {
        return this.contato;
    }
    setContato(contato) {
        this.contato = contato;
    }
    getDocumento() {
        return this.documento;
    }
    ExibirInfo() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Placa: ${this.placa}`);
        console.log(`Documento: ${this.documento}`);
        console.log(`Numero Contato: ${this.contato}`);
    }
}
