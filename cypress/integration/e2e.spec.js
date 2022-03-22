/// <reference types="cypress" />

import ProdutoPage from '../support/page_objects/produto.page'
import FaturamentoPage from '../support/page_objects/faturamento.page'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)     
        })
       
    });


    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        
        ProdutoPage.adicionarProduto('Aero Daily Fitness Tee', 'XS', 'Black', 3)
        ProdutoPage.adicionarProduto('Aether Gym Pant', '32', 'Blue', 1)
        ProdutoPage.adicionarProduto('Ajax Full-Zip Sweatshirt', 'XS', 'Blue', 2)
        ProdutoPage.adicionarProduto('Apollo Running Short', '32', 'Black', 2)

        cy.get('#cart > .dropdown-toggle').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()

        FaturamentoPage.preencherFaturamento('Thiago', 'Sousa', 'Brasil', 'Rua Piauí', '100', 'Teresina', 'Piauí', '64063510', '86999999999', 'thiago@teste.com')
    
        cy.get('#terms').check()
        cy.get('#place_order').click()

    });


})