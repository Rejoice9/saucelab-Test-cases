describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/')
    })
  
    it.only('Login', () => {
   
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

});
});