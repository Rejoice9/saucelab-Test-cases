describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://darulquraninstitute.safsims.flexisafapps-stage.com/')
  })

  it.only('Login', () => {

      cy.visit('https://darulquraninstitute.safsims.flexisafapps-stage.com/')
      cy.get('input[name="email"]').type('hamidalsharif@gmail.com');
      cy.get('input[name="password"]').type('P@55w0rd');
      cy.get('.flexi-button').contains('span', /^Login$/).click();
    
      cy.wait(5000);
      cy.get('[class="saf-staff"]').click();
      cy.get('.flexi-button').contains('span','Proceed').click();
    })
  })
