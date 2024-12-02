import {Veiculo} from "./Veiculos";

export class Carro extends Veiculo {

 
 
    constructor(placa: string, modelo: string, marca: string, TipoCarro: boolean ) {
        super(placa, modelo, marca);
    }
 
    public exibirCarro():Object
    {
        return this.ExibirInfo();
    }

}