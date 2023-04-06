/// <reference types="cypress" />

describe('Swag Labs', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Fluxo de Compra', () => {

    //Realiza o Login no site Swag Labs
    cy.get('[data-test=username]').clear().type('standard_user')
    cy.get('[data-test=password]').clear().type('secret_sauce') 

    cy.get('[data-test=login-button]').click({force:true})
    cy.wait(1000) 

    cy.contains('Swag Labs').should('to.have.length', 1)

    //Seleciona Produto
    cy.get('#item_4_title_link > .inventory_item_name').click({force:true})

    //Adiciona Produto ao Carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click({force:true})
    cy.get('.shopping_cart_link').click({force:true})

    //Realiza Checkout da Compra
    cy.get('[data-test="checkout"]').click({force:true})

    //Preenche as informações do Checkout
    cy.get('[data-test="firstName"]').clear().type('Jonathan')
    cy.get('[data-test="lastName"]').clear().type('Motta')
    cy.get('[data-test="postalCode"]').clear().type('32313')

    cy.get('[data-test="continue"]').click({force:true})

    //Visão Geral do Checkout
    cy.contains('Sauce Labs Backpack').should('to.have.length', 1)
    cy.contains('$29.99').should('to.have.length', 1) 

    //Finaliza Compra
    cy.get('[data-test="finish"]').click({force:true})

    //Checkout: Complete!
    cy.contains('Thank you for your order!').should('to.have.length', 1)

    //Back Home
    cy.get('[data-test="back-to-products"]').click({force:true})
    cy.contains('Swag Labs').should('to.have.length', 1)
  })

})