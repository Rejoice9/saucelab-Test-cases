context('Inventory', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
    })

 
it('Page Tittle and page icons', () => {
  

    // Verify elements on inventory page
    cy.title('SWAG LABS').should('eq', 'Swag Labs');
    cy.get('[class="app_logo"]').should('be.visible');
    cy.get('[data-test="shopping-cart-link"]').should('be.visible');
    cy.get('[data-test="inventory-container"]').should('be.visible');
  })


it('Inventory table', () => {
    //

    cy.get('[data-test="inventory-list"]').should('be.visible');
    cy.get('.inventory_item_name').should('be.visible');
    cy.get('.inventory_item_price').should('be.visible');

  })

  
  it('Inventory table checks', () => {
  
    // Table 1

    cy.get('.inventory_item').eq(0).should('be.visible');
    cy.get('.inventory_item_name').eq(0).should('have.text', 'Sauce Labs Backpack').and('be.visible')
    cy.get('.inventory_item_price').eq(0).should('be.visible')
    cy.get('.inventory_item_price').eq(0).contains('$').and('be.visible');
    cy.get('[class="btn btn_primary btn_small btn_inventory "]').eq(0).should('have.text', 'Add to cart');
    cy.get('.inventory_item_name').eq(0).click();

    // Verify page will return to inventory item list
    cy.get('#back-to-products').should('be.visible');
    cy.get('#back-to-products').click()

    // Table 2
    cy.get('.inventory_item').eq(1).should('be.visible');
    cy.get('.inventory_item_name').eq(1).should('have.text', 'Sauce Labs Bike Light').and('be.visible')
    cy.get('.inventory_item_price').eq(1).should('be.visible')
    cy.get('.inventory_item_price').eq(1).contains('$').and('be.visible');
    cy.get('[class="btn btn_primary btn_small btn_inventory "]').eq(1).should('have.text', 'Add to cart');
    cy.get('.inventory_item_name').eq(1).click();

    // Verify page will return to inventory item list
    cy.get('#back-to-products').should('be.visible').click();

    // Table 3
    cy.get('.inventory_item').eq(1).should('be.visible');
    cy.get('.inventory_item_name').eq(2).should('have.text', 'Sauce Labs Bolt T-Shirt').and('be.visible')
    cy.get('.inventory_item_price').eq(2).should('be.visible')
    cy.get('.inventory_item_price').eq(2).contains('$').and('be.visible');
    cy.get('[class="btn btn_primary btn_small btn_inventory "]').eq(2).should('have.text', 'Add to cart');
    cy.get('.inventory_item_name').eq(2).click();

   // Verify page will return to inventory list
    cy.get('#back-to-products').should('be.visible');
    cy.get('#back-to-products').click();
  })
  
it('complete the check out process of one item', () => {

    // verify a user can add an item to cart successfullly 

    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('#remove-sauce-labs-backpack').should('be.visible');

    //  badge starts as empty
    cy.get('.cart_badge').should('not.exist')

    // Add item
    cy.get('.shopping_cart_link').click()

    // Recheck badge now exists and has text "1" 
    cy.get('.shopping_cart_badge').should('be.visible').and('have.text', '1')
      
    // verify user can view item added to cart
  cy.get('.title').should('have.text', 'Your Cart').should('be.visible');
  cy.get('.cart_desc_label').should('be.visible');
  cy.get('.cart_desc_label').should('be.visible');

  cy.get('.cart_quantity_label').should('be.visible');
  cy.get('.inventory_item_name').eq(0).should('be.visible');
  cy.get('.inventory_item_desc').eq(0).should('be.visible');
  cy.get('.inventory_item_price').eq(0).should('be.visible');
  cy.get('#remove-sauce-labs-backpack').should('be.visible');

  cy.get('#continue-shopping').should('be.visible').should('have.text', 'Continue Shopping')

  cy.get('#checkout').should('be.visible');
  cy.get('#checkout').click();
  
  // Verify user's checkout page is visible and can fill checkout information
  cy.get('.checkout_info').should('be.visible')
  cy.get('input[placeholder="First Name"]').should('be.visible').type('John')
  cy.get('input[placeholder="Last Name"]').should('be.visible').type('Doe')
  cy.get('input[placeholder="Zip/Postal Code"]').should('be.visible').type('12345')
  cy.get('#continue').click();

  //Verify user can view the check out: Overview page
  cy.get('.app_logo').should('be.visible').should('have.text', 'Swag Labs');
  cy.contains('Checkout: Overview').should('be.visible');
  cy.get('.inventory_item_name').eq(0).should('be.visible')
  cy.get('.inventory_item_price').eq(0).should('be.visible');
  cy.get('[data-test="payment-info-label"]').should('be.visible')
  cy.get('[data-test="payment-info-value"]').should('be.visible')
  cy.get('[data-test="shipping-info-label"]').should('be.visible')
  cy.get('[data-test="subtotal-label"]').should('be.visible')
  cy.get('[data-test="payment-info-label"]').should('be.visible')
  cy.get('[data-test="subtotal-label"]').should('be.visible')
  cy.get('[data-test="tax-label"]').should('be.visible')
  cy.get('.cart_footer').should('be.visible')
  cy.get('#finish').click();
  

  //Verify user has completed checkout

  cy.url().should('include', 'checkout-complete.html');
    cy.contains('Thank you for your order!').should('be.visible');

  })  

it.only('About Page', () => {
    
  // Verify user is redirected to about page

    cy.get('#react-burger-menu-btn').should('be.visible');
    cy.get('#react-burger-menu-btn').click();
 
 cy.get('#about_sidebar_link')
      .should('be.visible')
      .and('have.attr', 'href')
      .and('include', 'saucelabs.com')
  })
})


