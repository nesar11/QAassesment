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

      //  get filter model name as parents Perodu and child as Axia
      cy.get('.filter__btn-list').children('.filter__btn-list__makeModel').children('.filter__btn').click();
      
      // duration loading
      cy.wait(4000);

      // get total AXIA card filter only AXIA Active car and keep only 18 cars
      cy.get('.list-card__wrapper').find('.swiper-slide').its('length').should('be.gte', 18);


    })

})
