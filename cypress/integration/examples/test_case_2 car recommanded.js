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

      // select the from array first item as 0 which local
      cy.get('.content-list-wrapper').children('.content-item').eq('0').click();

      // Select the body type  from array first item as 3 which Hatchback
      cy.get('.last-top').children('.last-content-item').eq('3').click();

      // click on view results button follow by parent and child class DOM
      cy.get('.view-button-wrapper').children('.view-button').eq('0').click();

     //  loading duration 5000s
      cy.wait(5000);

      // view all Peradua AXIA lower to higher price car list sort result
      cy.get('.content-wrapper').children('.content-item').children('.item-wrapper').children('.item-bottom').eq('0').children('.bottom-bottom').children('.bottom-left').invoke('removeAttr','target').click();


    })

})
