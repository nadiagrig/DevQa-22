describe('Headers (TC#1.1, TC#1.2)', () => {

    beforeEach(() => {
        cy.visit ('https://assist-devqa.netlify.app', {failOnStatusCode: false})
    })

it ('Home', () => {
cy.get('div.head-container')
    .should('contain', 'Home')
    .and('contain', 'BIM 2021')
    .and('contain', 'Regulations')
    .and('contain', 'History')
//     cy.get(':nth-child(1) > .btn-def')
//     cy.get(':nth-child(2) > .btn-def')
//     cy.get('.head-container > .logo')
})




it ('BIM 2021', () => {
     cy.get('[href="/bim"]').click()
    cy.url().should('be.equal', 'https://assist-devqa.netlify.app/bim')

        cy.get('div.head-container')
        .should('contain', 'Home')
        .and('contain', 'BIM 2021')
        .and('contain', 'Regulations')
        .and('contain', 'History')
    
    })

it('Regulations', () => {
cy.get('[href="/regulations"]').click()
    cy.url().should('be.equal', 'https://assist-devqa.netlify.app/regulations')
        
    cy.get('div.head-container')
        .should('contain', 'Home')
        .and('contain', 'BIM 2021')
        .and('contain', 'Regulations')
        .and('contain', 'History')
      
})
    



it('History', () => {
cy.get('[href="/history"]').click()
    cy.url().should('be.equal', 'https://assist-devqa.netlify.app/history')
    
        cy.get('div.head-container')
        // .should('contain', '.logo')
        .should('contain', 'Home')
        .and('contain', 'BIM 2021')
        .and('contain', 'Regulations')
        .and('contain', 'History')
        
})
    


})