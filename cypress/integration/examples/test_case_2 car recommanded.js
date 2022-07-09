/// <reference types="cypress" />
context('Window', () => {
  beforeEach(() => {
    // visit provided link
    cy.visit('https://www.carsome.my/')
  })
    it('cy.title() - get the title', () => {
      // visit the website and click on buy car class
      cy.get('.buy-car').click();
      // From the top right navigation Buy car dropdown most bottom a special cta button name recommand for me a car on click create parent tab
      // invoke inside insert removeAttr and second parameter as target then on click in the child tab will open the recomand page
      cy.get('.car-finder-menu-wrapper').invoke('removeAttr', 'target').click();
      // select the buget from array under Rm 30K
      cy.get('.content-list-wrapper').children('.content-item').eq('0').click();
      
    })

})
