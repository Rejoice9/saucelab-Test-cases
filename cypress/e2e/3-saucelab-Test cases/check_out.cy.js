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

      // Events
     cy.get('.inventory_item_name').should('be.visible');
      cy.get('.inventory_item_desc').should('be.visible');
    })
})