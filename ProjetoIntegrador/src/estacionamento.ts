import { Empresa } from "./Empresa";

export class Estacionamento extends Empresa {
    vagas:number
    disponibilidadeVaga: boolean
    Andares:number
    
    constructor (vagas:number, disponibilidadeVagas:boolean, andares:number, cnpj:string,nome:string,rua:string,bairro:string,numero:number,contato:number) {
        super (cnpj,nome,rua,bairro,numero,contato)
        this.vagas = vagas
        this.disponibilidadeVaga = disponibilidadeVagas
        this.Andares = andares
    }

    public getVagas () {
        return this.vagas
    }

    public setVagas(vagas:number) {
        this.vagas = vagas
    }

    public getDisponibilidadeVagas() {
        return this.disponibilidadeVaga
    }

    public setDisponibilidadeVagas(disponibilidadeVaga:boolean) {
        this.disponibilidadeVaga = disponibilidadeVaga;
    } 

    public calcularTotalVagas(): number {
        return this.vagas * this.Andares;
    }

    

}
const estacionamento2 = new Estacionamento (10,true,3,"3214568/0001-20","esta", "rua1", "fragata", 10,2145897)

estacionamento2.ExibirInfo()