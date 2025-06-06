/// <reference types="cypress" />

context('Check out', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
    })
  
    it('add and checkout single item', () => {
      // https://www.saucedemo.com/inventory.html
  
      cy.get('.inventory_item_name').should('be.visible');
      cy.get('.inventory_item_desc').should('be.visible');
      cy.get('.inventory_item_price').should('be.visible');

      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible')
      cy.get('#add-to-cart-sauce-labs-backpack').click();
  
    })
    

     it('cy.get-checkout', () => {
      https://www.saucedemo.com/inventory.html

     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('[data-test="shopping-cart-link"]').click();
      cy.get('[class="inventory_item_name"]').should('be.visible');
      cy.get('[data-test="checkout"]').should('be.visible');
      cy.get('[data-test="checkout"]').click();
    })

    // Checkout: Your information

    it('cy.get-checkout', () => {
      //https://www.saucedemo.com/checkout-step-two.html

      cy.get('[data-test="firstName"]').type('Rejoice');
      cy.get('#last-name').type('Chuks');
      cy.get('#postal-code').type('1988');
      cy.get('#continue').click();

      cy.get('#finish').click();
      cy.contains('Checkout: Complete!').should('be.visible');
      cy.get('[data-test="back-to-products"]')
      cy.contains('Back Home')
    })   
})