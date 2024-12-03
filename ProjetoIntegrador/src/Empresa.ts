 export class Empresa {
     private cnpj:string
     private nome: string
     private rua: string
     private bairro: string
     private numero: number
     private contato:number

     
    constructor (cnpj:string,nome:string,rua:string,bairro:string,numero:number,contato:number){

    this.cnpj = cnpj
    this.nome = nome
    this.rua = rua
    this.bairro = bairro
    this.numero = numero
    this.contato = contato

    }

    public getCnpj () {
        return this.cnpj
    }
   public getNome () {
    return this.nome
   }
   public setNome (nome:string) {
    this.nome = nome 
   }
   public getRua () {

    return this.rua 

   }
   public setRua (rua:string) {
    this.rua = rua;
   } 
   public getBairro() {
    return this.bairro
   }
   public setBairro (bairro:string) {
    this.bairro = bairro;
   }
   public getNumero() {
    return this.numero
   }
   public setNumero(numero:number) {
    this.numero = numero;
   }
   public getContato () {
    return this.contato
   }
   public setContato(novoContato:number) {
   this.contato = novoContato
    
   }

   ExibirInfo(){
    console.log (`Nome: ${this.nome}`)
    console.log (`CNPJ: ${this.cnpj}`)
    console.log (`Rua: ${this.rua}`)
    console.log (`Número: ${this.numero}`)
    console.log (`Bairro: ${this.bairro}`)
    
   }


}
    export const cadastro:Empresa = new Empresa("","","","",0,0)
