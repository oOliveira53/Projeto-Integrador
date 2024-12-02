import {Veiculo} from "./Veiculos";

export class Caminhao extends Veiculo {

 
 
 
     constructor(placa: string, modelo: string, marca: string, TipoCaminhao: boolean ) {
         super(placa, modelo, marca);
        
     }
 
 
     public exibirCaminhao(): Object{
        return  this.ExibirInfo();
     }
}