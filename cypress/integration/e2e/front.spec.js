/// <reference types="cypress" />


describe('example url succcess', () => {
    beforeEach(() => {
        cy.visit('/')
    })
  
    it('Open Browser ', () => {
        cy.get('#filter_keyword').type('teste')
        cy.get('#filter_keyword').should('have.id', 'filter_keyword')
    })
})
  
  