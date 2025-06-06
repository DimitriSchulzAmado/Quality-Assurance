/// <reference = cypress>

describe("Projetos", () => {

    beforeEach("Teste entrar", () => {
        cy.visit('https://confianopai.com/login')
        cy.get(':nth-child(2) > .sc-ktwOfi').type("Dimitri@")
        cy.get(':nth-child(3) > .sc-ktwOfi').type('123')
        cy.get('.sc-csKJxZ').click()
    })

    let nome = generateName()

    it("1- Criar projeto com um aluno e um orientador", () => {
        cy.get('.sc-jdHILj').click()
        cy.get('[href="/adm/add-projeto/cadastro"]').click()
        cy.get('.sc-fYrVWQ > .sc-hsaIUA').type(nome)
        cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type("189054Aluno@inatel.br")
        cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type("18906Orientador@inatel.br")
        cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select("Com pendência")
        cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select("Outro")
        cy.get('.sc-eGgGjL > :nth-child(1)').click()
        cy.get('.Toastify__toast-body > :nth-child(2)').should("have.text", "Equipe criada com sucesso!")
    })

    it("2- Nega criar um projeto sem integrante", () => {
        cy.get('.sc-jdHILj').click()
        cy.get('[href="/adm/add-projeto/cadastro"]').click()
        cy.get('.sc-fYrVWQ > .sc-hsaIUA').type(nome)
        cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type("18906Orientador@inatel.br")
        cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select("Com pendência")
        cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select("Outro")
        cy.get('.sc-eGgGjL > :nth-child(1)').click()
        cy.get('.Toastify__toast-body > :nth-child(2)').should("have.text", "Por favor, adicione pelo menos um integrante.")
    })

    it("3- Nega criar um projeto com um usuário não existe", () => {
        cy.get('.sc-jdHILj').click()
        cy.get('[href="/adm/add-projeto/cadastro"]').click()
        cy.get('.sc-fYrVWQ > .sc-hsaIUA').type(nome)
        cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type("2029598Aluno@inatel.br")
        cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type("18906Orientador@inatel.br")
        cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select("Com pendência")
        cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select("Outro")
        cy.get('.sc-eGgGjL > :nth-child(1)').click()
        cy.get('#\\31  > .Toastify__toast-body > :nth-child(2)').should("have.text", "Erro ao buscar o nome do membro. Verifique o email e tente novamente.")
        cy.get('#\\32  > .Toastify__toast-body > :nth-child(2)').should("have.text", "Erro ao criar equipe: Erro: Aluno não cadastrado: 2029598Aluno@inatel.br")
    })

    it("4- Pesquisa o projeto e verifica se existe", () => {
        cy.get('.sc-ckdEwu').type("Gato robo")
        cy.get('.sc-dmXWDj').should("contain", "Gato robo")
    })

    it("5- Ler projeto e verificar detalhes", () => {
        cy.get('.sc-ckdEwu').type(nome)
        cy.get('.sc-dmXWDj').should("contain", nome)
        cy.get('.sc-dmXWDj').click()
        cy.get('.sc-hhyKGa > :nth-child(2)').should("contain.text", nome)
        cy.get('.sc-cSxRuM > :nth-child(2) > :nth-child(2)').should("contain.text", "189054Aluno@inatel.br")
        cy.get('.sc-cSxRuM > :nth-child(3) > :nth-child(2)').should("contain.text", "18906Orientador@inatel.br")
    })

    it("6- Atualizar o projeto adicionando um integrante", () => {
        cy.get('.sc-ckdEwu').type(nome)
        cy.get('.sc-dmXWDj').should("contain", nome)
        cy.get('.sc-dmXWDj').click()
        cy.get('.sc-cPtzlb > .sc-irLvIq > .sc-csKJxZ').click()
        cy.get('.sc-ppzwM').type("20172619Aluno@inatel.br")
        cy.get('.sc-hiTDLB').click()
        cy.get('.iTLMzn > .sc-csKJxZ').click()
        cy.get('.Toastify__toast-body > :nth-child(2)').should("have.text", "Projeto atualizado com sucesso!")
    })

    it("7- Pesquisa o projeto e o deleta", () => {
        cy.get('.sc-ckdEwu').type(nome)
        cy.get('.sc-gjLLEI').click()
        cy.get('.sc-iCKXBC > [viewBox="0 0 448 512"]').click()
        cy.get('.sc-cZpZpK > :nth-child(1)').click()
        cy.get('.sc-ckdEwu').type(nome)
        cy.get('.sc-dmXWDj').should("not.contain", nome);
    })
})

function generateName() {
    let hour = new Date().getHours().toString()
    let minute = new Date().getMinutes().toString()
    let second = new Date().getSeconds().toString()
    let name = hour + minute + second + " - Teste"

    return name
}