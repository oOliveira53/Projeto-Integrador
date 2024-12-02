import {Veiculo} from "./Veiculos";

export class Moto extends Veiculo {

    constructor(placa: string, modelo: string, marca: string, TipoMoto: boolean ) {
        super(placa, modelo, marca);
    }

    public exibirMoto(): Object
    {
        return this.ExibirInfo();
    }
 


}