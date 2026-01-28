describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('https://www.saucedemo.com/')
  })
  it('Successful login', () => {
    cy.get('[data-test="username"]')
      .click()
      .type('standard_user')
    
    cy.get('[data-test="password"]')
      .click()
      .type('secret_sauce')

    cy.get('[data-test="login-button"')
      .click()

    cy.get('[id="shopping_cart_container"]')
      .should('be.visible')
  })

  it('Successfully logs out', () => {

    cy.get('[data-test="username"]')
      .click()
      .type('standard_user')
    
    cy.get('[data-test="password"]')
      .click()
      .type('secret_sauce')

    cy.get('[data-test="login-button"')
      .click()
    
    cy.get('#react-burger-menu-btn')
      .click()

    cy.get('[data-test="logout-sidebar-link"]')
      .click()

    cy.get('.login_logo')
      .should('be.visible')
  })

  it('Fails login by using the wrong password', () => {
    cy.get('[data-test="username"]')
      .click()
      .type('locked_out_user')

    cy.get('[data-test="password"]')
      .click()
      .type('secret_saucerino')

    cy.get('[data-test="login-button"')
      .click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain','Epic sadface: Username and password do not match any user in this service')

  })

  it('Fails login due to the user being blocked', () => {
        cy.get('[data-test="username"]')
      .click()
      .type('locked_out_user')

    cy.get('[data-test="password"]')
      .click()
      .type('secret_sauce')

    cy.get('[data-test="login-button"')
      .click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain','Epic sadface: Sorry, this user has been locked out.')
  })
})