
class pessoa {
    nome:string
    
    

    contato:number

    documento:string


     constructor(nome:string,contato:number,documento:string) {
        
        this.nome = nome
       
        this.contato = contato
        this.documento = documento
     }

     public getNOme() {
        return this.nome
     }
     public setNome (nome:string){
        this.nome = nome;
     }
    
     public getContato() {
        return this.contato
     }
     public setContato (contato:number) {
        this.contato = contato
     }
     public getDocumento () {
        return this.documento
     }
     

     public ExibirInfo() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Documento: ${this.documento}`)
        console.log(`Numero Contato: ${this.contato}`)
     }
}