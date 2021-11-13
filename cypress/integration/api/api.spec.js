/// <reference types="cypress" />


describe('example url succcess', () => {
    beforeEach(() => {
        cy.visit('https://facebook.com/')
    })
  
    it('Open Browser ', () => {
        cy.get('#email').type('teste')
        cy.get('#pass').type('teste')
        
        cy.get('#email').should('have.id', 'email')
    })
})
  
  