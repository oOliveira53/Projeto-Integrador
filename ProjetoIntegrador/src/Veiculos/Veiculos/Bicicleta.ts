import {Veiculo} from "./Veiculos";

export class Bicicleta extends Veiculo {
    
 
 
 
     constructor(placa: string, modelo: string, marca: string, TipoBicicleta: boolean ) {
         super(placa, modelo, marca);
        
 
     }
 
     public exibirBicicleta(): Object{
        return  this.ExibirInfo();
     }
}