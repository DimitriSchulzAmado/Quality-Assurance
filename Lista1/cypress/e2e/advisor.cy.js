/// <reference = cypress>

describe("Suite de testes dos Orientadores", () => {

    beforeEach(() => {
        cy.visit("https://confianopai.com/adm/novo-usuario")
        cy.get(':nth-child(2) > .sc-ktwOfi').type('Dimitri@')
        cy.get(':nth-child(3) > .sc-ktwOfi').type('123')
        cy.get('.sc-csKJxZ').click()
        cy.get('[href="/adm/novo-usuario"]').click()
        cy.get('.sc-dsAqUS').select('Orientador')
    })

    it("1 Teste de cadastro de orientador com sucesso", () => {
        createUser()
    })

    it("2 Teste limpa formulário após cadastro com sucesso", () => {
        createUser()
        cy.get(':nth-child(1) > div > input').should('have.value', '')
        cy.get(':nth-child(2) > div > input').should('have.value', '')
        cy.get(':nth-child(3) > div > input').should('have.value', '')
        cy.get(':nth-child(4) > div > button').should('be.visible')
    })

    it("3 Teste cadastro de email ja cadastrado com falha", () => {
        const email = generateEmails()
    
        cy.get(':nth-child(1) > div > input').type('teste')
        cy.get(':nth-child(2) > div > input').type(email[0])
        cy.get(':nth-child(3) > div > input').type('teste')
        cy.get(':nth-child(4) > div > button').click()
        cy.get('.Toastify__toast-body').should('contain', 'Usuário criado com sucesso!')
    
        cy.get(':nth-child(1) > div > input').type('teste')
        cy.get(':nth-child(2) > div > input').type(email[0])
        cy.get(':nth-child(3) > div > input').type('teste')
        cy.get(':nth-child(4) > div > button').click()
    
        cy.get('.Toastify__toast-body').should('contain', 'Falha ao criar usuário.')
    })

    it("4 Teste cadastro orientador sem senha com falha", () => {
        let email = generateEmails()

        cy.get(':nth-child(1) > div > input').type('teste')
        cy.get(':nth-child(2) > div > input').type(email[0])
        cy.get(':nth-child(3) > div > input').should('be.empty')
        cy.get(':nth-child(4) > div > button').click()
        cy.get(':nth-child(3) > div > input')
        .then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
    })

    it("5 Teste cadastro orientador com email inválido (sem @xxx.com) com falha", () => {
        cy.get(':nth-child(1) > div > input').type('teste')
        cy.get(':nth-child(2) > div > input').type('teste')
        cy.get(':nth-child(3) > div > input').type('teste')
        cy.get(':nth-child(4) > div > button').click()
        cy.get('.Toastify__toast-body').should('contain', 'Por favor, insira um endereço de email válido.')
    })

    it("6 Teste cadastro orientador sem nome com falha", () => {
        let emails = generateEmails()

        cy.get(':nth-child(2) > div > input').type(emails[0])
        cy.get(':nth-child(3) > div > input').type('teste')
        cy.get(':nth-child(4) > div > button').click()
        cy.get(':nth-child(1) > div > input')
        .then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
    })

    it("7 Teste cadastro orientador sem email com falha", () => {
        cy.get(':nth-child(1) > div > input').type('teste')
        cy.get(':nth-child(3) > div > input').type('teste')
        cy.get(':nth-child(4) > div > button').click()
        cy.get(':nth-child(2) > div > input')
        .then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
    })
})

function generateEmails() {
    let qtd = 2
    let emails = []

    for (let i = 0; i < qtd; i++) {
        let hour = new Date().getHours().toString()
        let minute = new Date().getMinutes().toString()
        let second = new Date().getSeconds().toString()
        let email = hour + minute + second + "@teste.com"
        emails.push(email)
    }

    return emails
}

function createUser() {
    let emails = generateEmails()

    cy.get(':nth-child(1) > div > input').type('teste')
    cy.get(':nth-child(2) > div > input').type(emails[0])
    cy.get(':nth-child(3) > div > input').type('teste')
    cy.get(':nth-child(4) > div > button').click()
    cy.get('.Toastify__toast-body').should('contain', 'Usuário criado com sucesso!')
}
