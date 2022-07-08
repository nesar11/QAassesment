/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://www.carsome.my/')
  })
  it('cy.title() - get the title', () => {
    
    // visit the website and click on buy car class
    cy.get('.buy-car').click();

  })

})
