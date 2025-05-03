/// <reference = cypress>

describe("Teste da criação, registro e login", () => {
  it("Teste criação de usuário com sucesso", () => {
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Dimitri')
    cy.get('#Text1').type('Schulz Amado')
    cy.get('#username').type('dimitri')
    cy.get('#password').type('123456')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('have.text', 'Registration successful')
  })

  it("Teste criação de usuário com falha", () => {
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Dimitri')
    cy.get('#Text1').type('Schulz Amado')
    cy.get('#username').type('dimitri')
    cy.get('.btn-primary').should('be.disabled')
  })

  it("Teste login com sucesso", () => {
    let infos = createUser()

    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', infos[0])
  })
})

function createUser() {
  let hour = new Date().getHours().toString()
  let minute = new Date().getMinutes().toString()
  let second = new Date().getSeconds().toString()
  let id = hour + minute + second + "ID"
  let password = hour + minute + second + "PASSWORD"
  let infos = [id, password]

  cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
  cy.get('.btn-link').click()
  cy.get('#firstName').type(id)
  cy.get('#Text1').type(id)
  cy.get('#username').type(id)
  cy.get('#password').type(password)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('have.text', 'Registration successful')

  return infos
}