/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade Página de Produtos', () => {

beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/produtos/")
})

it('Adicionar um produto no carrinho', () => {
    var quantidade = 2
    cy.get('[class="product-block grid"]').last().click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)


    
});
    
});