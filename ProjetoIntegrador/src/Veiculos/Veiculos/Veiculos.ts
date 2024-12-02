export class Veiculo implements Veiculo{  
    protected placa: string;
    protected modelo: string;
    protected marca: string;

    constructor(placa: string, modelo: string, marca: string) {
        this.placa = placa;
        this.modelo = modelo;
        this.marca = marca;
    }

    protected getPlaca(): string {
        return this.placa;
    }

    protected setPlaca(placa: string): void {
        this.placa = placa;
    }

    protected ExibirInfo(): { placa:string,modelo:string,marca:string } {
        return {
            placa: this.placa,
            modelo: this.modelo,
            marca: this.marca
        }
    }
}
