
describe('Submit project (TC#20.2)', () => {
    beforeEach(() => {
      cy.visit ('https://assist-devqa.netlify.app', {failOnStatusCode: false})
  })

//   Because the direct links like => https://assist-devqa.netlify.app/bim are reported to be broken, i did a whole path, from Login to Submitting a project

it.only ('Check insertion and submition', () => {
  // login
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
  
  //go to Submit project

   cy.get('.logged-menu').click()
   cy.get('.dropdown-menu > :nth-child(1)').click()

   cy.get('body').then ((body) => {
    if (body.find('.btn-def').length > 0) {
      cy.get('.btn-def').click()
    } else {
      cy.get(':nth-child(1) > .btn-def').click()
    }
  })
  cy.url().should('be.equal', 'https://assist-devqa.netlify.app/upload')


  //insert valid data
  cy.get('.project-name > .my-input').type("DEVQA")
  cy.get('.team-name > .my-input').type("Team10")
  cy.get('.input-data-textarea').type("Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum")
  cy.get('.team-member > .my-input').type("Nadia Grigoras")
  cy.get('.button-data-team-member').click()
  cy.get('.team-member > .my-input').type("Costel Gigel")

  cy.get('.drag-zone').attachFile("File.png")
//submit project 
  cy.get('.submit-btn')


})

})