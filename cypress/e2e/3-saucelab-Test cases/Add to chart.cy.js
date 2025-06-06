/// <reference types="cypress" />,

describe('Check out', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  })

  it.only('Login and checkout', () => {

    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.inventory_item_name').should('be.visible');
    cy.get('.inventory_item_desc').should('be.visible');
    cy.get('.inventory_item_price').should('be.visible');
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('.shopping_cart_link').click();
    cy.get('#checkout').click();
    cy.get('#first-name').type('Rejoice');
    cy.get('#last-name').type('Chuks');
    cy.get('#postal-code').type('1988');
    cy.get('#continue').click();
    cy.get('#finish').click();
    cy.contains('Checkout: Complete!').should('be.visible');
    cy.get('[data-test="back-to-products"]')
    cy.contains('Back Home')
    cy.get('[data-test="shopping-cart-link"]')
    });
  });