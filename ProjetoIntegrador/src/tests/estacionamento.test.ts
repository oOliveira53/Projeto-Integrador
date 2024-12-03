import { Estacionamento } from "../estacionamento";

describe("Deve ser possível cadastrar estacionamento", () =>{
    let estacionamento:Estacionamento
    
    beforeEach(() => {
        estacionamento = new Estacionamento(
          30,            
          true,           
          3,             
          "3214568/0001-20", 
          "Estacionamento Exemplo", 
          "Rua das Palmeiras", 
          "Bairro Central",     
          100,            
          987654321       
        );
      }); //Finalização do beforeEach

    it("Deve ser possível criar um estacionamento", () =>{
        //Verificação herdadas da empresa
        expect(estacionamento.getNome()).toBe("Estacionamento Exemplo");
        expect(estacionamento.getCnpj()).toBe("3214568/0001-20");
        expect(estacionamento.getRua()).toBe("Rua das Palmeiras");
        expect(estacionamento.getBairro()).toBe("Bairro Central");
        expect(estacionamento.getNumero()).toBe(100);
        expect(estacionamento.getContato()).toBe(987654321);

        //Verificações do própio estacionamento
        expect(estacionamento.getVagas()).toBe(30);
        expect(estacionamento.getDisponibilidadeVagas()).toBe(true);
        expect(estacionamento.Andares).toBe(3);
      })

    it("Calcular número de vagas", () =>{
        //Total de vagas * Andares
        expect(estacionamento.calcularTotalVagas()).toBe(90)
      })

    it("Alterar o total de vagas" , () =>{
        estacionamento.setVagas(20);
        expect(estacionamento.getVagas()).toBe(20)
      })

    it("Alterar disponibilidade das vagas",() =>{
        estacionamento.setDisponibilidadeVagas(false);
        expect(estacionamento.getDisponibilidadeVagas).toBe(false);

      })
      it("Deve imprimir as informações corretas", () =>{
        //Pegar as impressões do console,log
        console.log = jest.fn();

        //Execução

        //Validação
        expect(console.log).toHaveBeenCalledWith("Nome: Estacionamento Exemplo");
        expect(console.log).toHaveBeenCalledWith("CNPJ: 3214568/0001-20");
        expect(console.log).toHaveBeenCalledWith("Rua: Rua das Palmeiras");
        expect(console.log).toHaveBeenCalledWith("Número: 100");
        expect(console.log).toHaveBeenCalledWith("Bairro: Bairro Central");


      })
    })