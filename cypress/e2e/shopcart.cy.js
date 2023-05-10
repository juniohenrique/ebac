/// <reference types="cypress" />

context('Assertions', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('verify shopcart', function() {
    cy.get('#primary-menu > .menu-item-629 > a').click();
    cy.get('a:contains("Abominable Hoodie")').click();
    cy.get('.button-variable-item-XS').click();
    cy.get('.button-variable-item-Blue').click();
    cy.get('.input-text').clear('2');
    cy.get('.input-text').type('2');
    cy.get('.single_add_to_cart_button').click();
    cy.get('.woocommerce-message > .button').click();
    cy.get('.quantity > .input-text').should('have.value', '2');

  });
})
