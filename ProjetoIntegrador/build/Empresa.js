"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empresa = void 0;
class empresa {
    cnpj;
    nome;
    rua;
    bairro;
    numero;
    contato;
    constructor(cnpj, nome, rua, bairro, numero, contato) {
        this.cnpj = cnpj;
        this.nome = nome;
        this.rua = rua;
        this.bairro = bairro;
        this.numero = numero;
        this.contato = contato;
    }
    getCnpj() {
        return this.cnpj;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getRua() {
        return this.rua;
    }
    setRua(rua) {
        this.rua = rua;
    }
    getBairro() {
        return this.bairro;
    }
    setBairro(bairro) {
        this.bairro = bairro;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getContato() {
        return this.contato;
    }
    setContato(novoContato) {
        this.contato = novoContato;
    }
    ExibirInfo() {
        console.log(`Nome: ${this.nome}`);
        console.log(`CNPJ: ${this.cnpj}`);
        console.log(`Rua: ${this.rua}`);
        console.log(`Número: ${this.numero}`);
        console.log(`Bairro: ${this.bairro}`);
    }
}
exports.empresa = empresa;
