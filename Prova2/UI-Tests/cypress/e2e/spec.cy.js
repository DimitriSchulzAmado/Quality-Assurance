function generateUser() {
  let name = "User" + new Date().getTime().toString()
  let password = "Password" + new Date().getTime().toString()

  return { name, password }
}

describe('demoblaze', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html')
  })

  let user = generateUser()
  
  it('Success User Sign Up', () => {
    cy.get('#signin2').click()
    cy.get('#sign-username').type(user.name)
    cy.get('#sign-password').type(user.password)
    cy.get('#signInModal > div > div > div.modal-footer > button.btn.btn-primary').click()
    cy.on('window:alert', (message) => {
      expect(message).to.equal('Sign up successful.')
    })
  })

  it('Success User Login', () => {
    cy.get('#login2').click()
    cy.get('#loginusername').type('admin')
    cy.get('#loginpassword').type('admin')
    cy.get('#logInModal > div > div > div.modal-footer > button.btn.btn-primary').click()
    cy.on('window:alert', (message) => {
      expect(message).to.equal('Welcome ' + 'admin')
    })
  })

  it('Success Add Item to Cart', () => {
    cy.get('.hrefch').contains('Samsung galaxy s6').click()
    cy.get('.btn-success').click()
    cy.on('window:alert', (message) => {
      expect(message).to.equal('Product added')
    })
    cy.get('#cartur').click()
    cy.get('.success').should('contain', 'Samsung galaxy s6')
  })

  it('Fail User Login', () => {
    cy.get('#login2').click()
    cy.get('#loginusername').type('wrongUser')
    cy.get('#loginpassword').type('wrongPassword')
    cy.get('#logInModal > div > div > div.modal-footer > button.btn.btn-primary').click()
    cy.on('window:alert', (message) => {
      expect(message).to.equal('Wrong password.')
    })
  })
})