/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://www.carsome.my/')
  })
  it('cy.title() - get the title', () => {
    
    // visit the website and click on buy car class
    cy.get('.buy-car').click();

    // curent url will be https://www.carsome.my/buy-car  and from the menu box brand select as Perodua then click
    cy.get('.menu-box-brand').contains("Perodua").click();
    
    // current navigated url https://www.carsome.my/buy-car/perodua
    cy.url().should('include', 'buy-car/perodua');


    
  })

})
