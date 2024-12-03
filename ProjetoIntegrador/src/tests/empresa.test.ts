import { Empresa } from "../Empresa";



describe("Quando for cadastrar empresa", () =>{
    let empresa:Empresa
    beforeAll(() =>{
        empresa = new Empresa(
            '12.345.678/0001-99',
            'Empresa Exemplo Ltda',
            'Rua das Flores',
            'Bairro Central',
            123,
            987654321
        );
    })
    
    it("Deve ser possível cadastrar uma empresa", () =>{
        expect(empresa).not.toBeNull()
        expect(empresa.getNome()).toBe('Empresa Exemplo Ltda');
        expect(empresa.getCnpj()).toBe("12.345.678/0001-99");
        expect(empresa.getRua()).toBe("Rua das Flores");
        expect(empresa.getBairro()).toBe("Bairro Central");
        expect(empresa.getNumero()).toBe(123);
        expect(empresa.getContato()).toBe(987654321);
    })

    it("Deve ser possível alterar o nome da empresa", () =>{
        empresa.setNome("Nova Empresa Ltda")

        expect(empresa.getNome()).toBe("Nova Empresa Ltda")
    })

    it("Deve ser possível alterar a rua", () =>{
        empresa.setRua("Avenida 25 de Julho")
        
        expect(empresa.getRua()).toBe("Avenida 25 de Julho")
    })

    it("Deve exibir corretamente as informações da empresa" , () =>{
        //Capturar chamadas de console.log
        console.log = jest.fn();

        //Execução
        empresa.ExibirInfo();

        //Verificação

        expect(console.log).toHaveBeenCalledWith("Nome: Nova Empresa Ltda");
        expect(console.log).toHaveBeenCalledWith("CNPJ: 12.345.678/0001-99");
        expect(console.log).toHaveBeenCalledWith("Rua: Avenida 25 de Julho");
        expect(console.log).toHaveBeenCalledWith("Número: 123");
        expect(console.log).toHaveBeenCalledWith("Bairro: Bairro Central");
    })

} )
