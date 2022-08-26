

describe('Login (TC#10.6)', () => {
  beforeEach(() => {
    cy.visit ('https://assist-devqa.netlify.app', {failOnStatusCode: false})
})



it ('Login with valid data', function (){
  

  cy.get('body').then ((body) => {
    if (body.find('.logged-menu').length > 0) {
      cy.get('.logged-menu').click()
      cy.get('.dropdown-menu > :nth-child(2)').click()
      cy.get(':nth-child(1) > .btn-def').click()
    } else {
      cy.get(':nth-child(1) > .btn-def').click()
    }
    
    
      })


  cy.get('.login-container > :nth-child(2)').click()

  cy.url().should('be.equal', 'https://assist-devqa.netlify.app/sign-in')
  cy.get(':nth-child(1) > .info-detail').type("user1@test.com")
  cy.get(':nth-child(2) > .info-detail').type("user123456")

  cy.get('.submit-btn').click()
  cy.url().should('be.equal', 'https://assist-devqa.netlify.app/home')
})



it ('Login with invalid data', function (){

  cy.get('body').then ((body) => {
    if (body.find('.logged-menu').length > 0) {
      cy.get('.logged-menu').click()
      cy.get('.dropdown-menu > :nth-child(2)').click()
      cy.get(':nth-child(1) > .btn-def').click()
    } else {
      cy.get(':nth-child(1) > .btn-def').click()
    }
    
    
      })


  cy.get('.login-container > :nth-child(2)').click()

  cy.url().should('be.equal', 'https://assist-devqa.netlify.app/sign-in')
  cy.get(':nth-child(1) > .info-detail').type("user1@test.com")
  cy.get(':nth-child(2) > .info-detail').type("user12345")

  cy.get('.submit-btn').click()
  cy.url().should('be.equal', 'https://assist-devqa.netlify.app/sign-in')
})

})

